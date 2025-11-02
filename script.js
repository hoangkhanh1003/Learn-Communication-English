// Progress tracking removed (UI-only app now)
const names = { A: "Anna", B: "Ben" };
const avatars = { A: "https://banobagi.vn/wp-content/uploads/2025/04/anh-avatar-kute-1.jpeg", B: "https://ekidenglish.edu.vn/wp-content/uploads/2025/04/anh-avatar-kute-4.jpeg" };

// Merge `additionalDialogues` into `allDialogues` at runtime if present.
// We must NOT put logic into data.js per project rules; do it here instead.
try {
      if (typeof additionalDialogues !== 'undefined' && Array.isArray(additionalDialogues) && additionalDialogues.length) {
            const combined = (allDialogues || []).concat(additionalDialogues || []);

            const dialogueFingerprint = d => {
                  if (!d) return '';
                  const title = String(d.title || '').trim().toLowerCase();
                  const turnsFp = Array.isArray(d.turns)
                        ? d.turns.map(t => `${String(t.who||'').trim()}|${String(t.s||'').trim()}`).join('||')
                        : '';
                  return `${title}:::${turnsFp}`;
            };

            const seen = new Map();
            combined.forEach(d => {
                  if (!d || !d.title) return;
                  const fp = dialogueFingerprint(d);
                  if (!seen.has(fp)) seen.set(fp, d);
                  else {
                        const existing = seen.get(fp);
                        if (Number(d.id) < Number(existing.id)) seen.set(fp, d);
                  }
            });

            const merged = Array.from(seen.values());
            merged.sort((a, b) => Number(a.id) - Number(b.id));

            // Replace allDialogues contents in-place so other modules referencing
            // the array object keep working.
            allDialogues.length = 0;
            merged.forEach(d => allDialogues.push(d));
      }
} catch (e) {
      // If anything goes wrong, leave allDialogues as-is and continue.
}

// (Removed unused inline SVGs constant to reduce dead code)

let showIPA = true;
let showVN = true;
// Playback control for full-dialogue
let fullPlaybackActive = false;
let fullPlaybackPaused = false;
// Session id to isolate concurrent playback attempts
let playbackSession = 0;
// Speech rate configurable by user (default 0.72 for full playback)
const SPEECH_RATE_KEY = 'talkingSpeechRate';
let speechRate = parseFloat(localStorage.getItem(SPEECH_RATE_KEY) || '0.72');

// Voice selection: try to pick a clear, natural-sounding English voice when available.
let preferredTTSVoice = null;
const preferredVoiceNames = [
      'Google US English',
      'Microsoft Zira',
      'Microsoft David',
      'Samantha',
      'Joanna',
      'Alex',
      'Daniel',
      'Victoria',
      'en-US'
];

function chooseVoiceFromList(list) {
      if (!list || !list.length) return null;
      // Try exact / partial name matches first
      for (const name of preferredVoiceNames) {
            const v = list.find(vi => (vi.name && vi.name.includes(name)) || (vi.voiceURI && vi.voiceURI.includes(name)));
            if (v) return v;
      }
      // Prefer en-US, then any en
      let v = list.find(vi => vi.lang && vi.lang.toLowerCase().startsWith('en-us'));
      if (v) return v;
      v = list.find(vi => vi.lang && vi.lang.toLowerCase().startsWith('en'));
      if (v) return v;
      // Last resort: first voice
      return list[0];
}

function ensureVoicesLoaded(cb) {
      const synth = window.speechSynthesis;
      if (!synth) return cb && cb();
      const voices = synth.getVoices();
      if (voices && voices.length) {
            preferredTTSVoice = chooseVoiceFromList(voices);
            return cb && cb();
      }
      // voices may load asynchronously
      const onChange = () => {
            const v = synth.getVoices();
            if (v && v.length) {
                  preferredTTSVoice = chooseVoiceFromList(v);
                  synth.removeEventListener('voiceschanged', onChange);
                  cb && cb();
            }
      };
      synth.addEventListener('voiceschanged', onChange);
}

function getVoiceForLang(lang) {
      const synth = window.speechSynthesis;
      if (!synth) return null;
      const voices = synth.getVoices() || [];
      if (!lang) return null;
      const low = lang.toLowerCase();
      // try exact match first
      let v = voices.find(vi => vi.lang && vi.lang.toLowerCase() === low);
      if (v) return v;
      // then prefix match (en, vi, etc.)
      v = voices.find(vi => vi.lang && vi.lang.toLowerCase().startsWith(low.split('-')[0]));
      if (v) return v;
      return null;
}

// Choose two distinct voices: prefer one for A and one for B. Returns {voiceA, voiceB}
function chooseTwoVoices() {
      const synth = window.speechSynthesis;
      const voices = synth ? synth.getVoices() : [];
      if (!voices || !voices.length) return { voiceA: null, voiceB: null };
      // Pick two distinct voices from preferred list
      let voiceA = null, voiceB = null;
      for (const name of preferredVoiceNames) {
            const v = voices.find(vi => (vi.name && vi.name.includes(name)) || (vi.voiceURI && vi.voiceURI.includes(name)));
            if (v) {
                  if (!voiceA) voiceA = v;
                  else if (!voiceB && v !== voiceA) voiceB = v;
                  if (voiceA && voiceB) break;
            }
      }
      // Fallback if not enough
      if (!voiceA) voiceA = chooseVoiceFromList(voices);
      if (!voiceB) {
            // Strong test-only preference: try to pick a commonly male-named voice first.
            // This forces a change for testing; it's deterministic and does not add UI.
            // For this test, prefer any voice that contains 'david' first (Microsoft David)
            const davidCandidate = voices.find(v => v !== voiceA && v.name && v.name.toLowerCase().includes('david'));
            if (davidCandidate) {
                  voiceB = davidCandidate;
            } else {
                  const malePreferred = ['David', 'Daniel', 'John', 'Paul', 'Mark', 'Thomas', 'Alex', 'Michael'];
                  for (const hint of malePreferred) {
                        const candidate = voices.find(v => v !== voiceA && v.name && v.name.toLowerCase().includes(hint.toLowerCase()));
                        if (candidate) { voiceB = candidate; break; }
                  }
            }

            // If still not found, pick the last English voice that's different from voiceA (often a distinct voice).
            if (!voiceB) {
                  const englishVoices = voices.filter(v => v !== voiceA && v.lang && v.lang.toLowerCase().startsWith('en'));
                  if (englishVoices.length) {
                        voiceB = englishVoices[englishVoices.length - 1];
                  } else {
                        // final fallback: any voice not equal to voiceA
                        const others = voices.filter(v => v !== voiceA);
                        voiceB = others.length ? others[others.length - 1] : null;
                  }
            }
      }
      return { voiceA, voiceB };
}

// Play entire dialogue sequentially using two voices (A/B). Returns a Promise that resolves when finished.
function playFullDialogueTwoVoices(dialogue) {
      return new Promise((resolve) => {
            if (!window.speechSynthesis) return resolve();
            const synth = window.speechSynthesis;
            ensureVoicesLoaded(() => {
                  const { voiceA, voiceB } = chooseTwoVoices();
                  // Debug: print chosen voices so users can see what the browser provided
                  try {
                        console.debug('Selected voices for full playback:', {
                              voiceA: voiceA ? { name: voiceA.name, lang: voiceA.lang } : null,
                              voiceB: voiceB ? { name: voiceB.name, lang: voiceB.lang } : null
                        });
                  } catch (e) {}
                  // create a session id for this playback run
                  const mySession = ++playbackSession;
                        // playback controller allows external events (like rate changes) to interact
                        const controller = {
                              session: mySession,
                              playNext: null, // will be assigned after playNext defined
                              handleRateChange(newRate) {
                                    if (this.session !== playbackSession) return;
                                    // update global speechRate and persist
                                    speechRate = newRate;
                                    try { localStorage.setItem(SPEECH_RATE_KEY, String(newRate)); } catch (e) {}
                                    // Do NOT cancel the current utterance — future chunks will pick up the new rate.
                              }
                        };
                        // expose controller globally so UI handlers can access it
                        try { window.currentPlaybackController = controller; } catch (e) {}
                  let idx = 0;
                  fullPlaybackActive = true;
                  fullPlaybackPaused = false;
                        // indicate full-play mode on the chat area for unified highlight styling
                        try {
                              const chat = document.getElementById('chatArea');
                              if (chat) chat.classList.add('full-play');
                        } catch (e) {}
                  let currentTimeout = null;
                  let currentUtterance = null;
                        // collect DOM turn elements for highlighting (assumes renderAll has run)
                        const chatCardTurns = (() => {
                              const chat = document.getElementById('chatArea');
                              if (!chat) return [];
                              const firstCard = chat.querySelector('.chat-card');
                              if (!firstCard) return [];
                              return Array.from(firstCard.querySelectorAll('.turn'));
                        })();

                              function clearPending() {
                        if (currentTimeout) {
                              clearTimeout(currentTimeout);
                              currentTimeout = null;
                        }
                        if (currentUtterance) {
                              try { synth.cancel(); } catch (e) {}
                              currentUtterance = null;
                        }
                  }

                              function stopAndResolve() {
                                    // Only change global flags for the active session
                                    if (mySession === playbackSession) {
                                          fullPlaybackActive = false;
                                          fullPlaybackPaused = false;
                                    }
                                    clearPending();
                                          // clear any playing highlight
                                          try {
                                                const chat = document.getElementById('chatArea');
                                                if (chat) chat.querySelectorAll('.turn.playing').forEach(el => el.classList.remove('playing'));
                                                // remove full-play marker
                                                if (chat) chat.classList.remove('full-play');
                                          } catch (e) {}
                                          try { synth.cancel(); } catch (e) {}
                                          // remove any exposed controller
                                          try { if (window.currentPlaybackController && window.currentPlaybackController.session === mySession) delete window.currentPlaybackController; } catch (e) {}
                                          resolve();
                              }

                              function playNext() {
                                    // If this session is no longer current, stop immediately
                                    if (mySession !== playbackSession) return stopAndResolve();
                                    if (fullPlaybackPaused) {
                                          // wait and retry while paused
                                          currentTimeout = setTimeout(playNext, 200);
                                          return;
                                    }
                                    if (idx >= dialogue.turns.length) return stopAndResolve();
                                    const turn = dialogue.turns[idx];
                                    // Highlight the corresponding DOM turn (if available)
                                    try {
                                          chatCardTurns.forEach(tel => tel.classList.remove('playing'));
                                          if (chatCardTurns[idx]) {
                                                chatCardTurns[idx].classList.add('playing');
                                                // scroll into view smoothly, center the playing turn
                                                try { chatCardTurns[idx].scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
                                          }
                                    } catch (e) {}
                                    // Speak the turn in small chunks so rate changes apply to upcoming chunks
                                    const text = turn.s || '';
                                    const tokens = text.split(/\s+/).filter(t => t.length > 0);
                                    // Adaptive chunk sizing: speak short turns in one utterance to avoid audible gaps.
                                    // For longer turns use a larger chunk size than before to reduce the number of utterances.
                                    const chunkSize = (tokens.length <= 12) ? tokens.length : 8; // words per utterance chunk
                                    let tokenPos = 0;

                                    // speak next chunk for this turn

                                    function speakChunk() {
                                          // session check
                                          if (mySession !== playbackSession) return stopAndResolve();
                                          if (fullPlaybackPaused) {
                                                currentTimeout = setTimeout(speakChunk, 200);
                                                return;
                                          }
                                          // finished this turn
                                          if (tokenPos >= tokens.length) {
                                                try { if (chatCardTurns[idx]) chatCardTurns[idx].classList.remove('playing'); } catch (e) {}
                                                idx += 1;
                                                currentTimeout = setTimeout(playNext, 250);
                                                return;
                                          }

                                          const chunkTokens = tokens.slice(tokenPos, tokenPos + chunkSize);
                                          const chunkText = chunkTokens.join(' ');
                                          const u = new SpeechSynthesisUtterance(chunkText);
                                          currentUtterance = u;
                                          // Always get the latest speechRate from localStorage (if available), else from global
                                          let latestRate = speechRate;
                                          try {
                                                const stored = localStorage.getItem(SPEECH_RATE_KEY);
                                                if (stored !== null && !isNaN(parseFloat(stored))) {
                                                      latestRate = parseFloat(stored);
                                                }
                                          } catch (e) {}
                                          u.rate = latestRate;
                                          // (debug log removed)
                                          u.pitch = 1.0;
                                          u.volume = 1.0;
                                          // select voice based on who
                                          if (turn.who === 'A' && voiceA) u.voice = voiceA;
                                          else if (turn.who === 'B' && voiceB) u.voice = voiceB;
                                          else if (preferredTTSVoice) u.voice = preferredTTSVoice;
                                          u.lang = /[\u00C0-\u024F\u1EA0-\u1EF9]/.test(turn.s) ? 'vi-VN' : 'en-US';
                                          u.onend = () => {
                                                if (mySession !== playbackSession) return stopAndResolve();
                                                // advance to next chunk
                                                tokenPos += chunkSize;
                                                // small pause between chunks to sound natural (shorter than before)
                                                currentTimeout = setTimeout(speakChunk, 40);
                                          };
                                          try { synth.speak(u); } catch (e) { /* speak may fail silently */ }
                                    }

                                    // start speaking chunks for this turn
                                    try { if (!controller.playNext) controller.playNext = playNext; } catch (e) {}
                                    speakChunk();
                              }

                        // cancel any ongoing speech and start
                        clearPending();
                        try { synth.cancel(); } catch (e) {}
                        // give the engine a very short moment to clear its queue on some browsers
                        setTimeout(playNext, 20);
            });
      });
}

// speak() removed: unused. Use speakPreferred() or playFullDialogueTwoVoices() for TTS.

// Speak using the preferred play-button voice (unified voice for all reads)
function speakPreferred(text) {
      if (!window.speechSynthesis) return;
      const u = new SpeechSynthesisUtterance(text);
      // keep default lang but voice will be forced to preferredTTSVoice when available
      u.lang = 'en-US';
      u.rate = speechRate;

      const speakNow = () => {
            if (preferredTTSVoice) u.voice = preferredTTSVoice;
            u.pitch = 1.0;
            u.volume = 1.0;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(u);
      };

      if (!preferredTTSVoice) {
            ensureVoicesLoaded(() => speakNow());
      } else {
            speakNow();
      }
}

function createTurnElement(turn) {
      const side = turn.who === "A" ? "left" : "right";
      const container = document.createElement("div");
      container.className = `turn ${side}`;

            // Avatar with fallback: use <img> inside a wrapper div so we can style the circle
            const avatarWrap = document.createElement("div");
            avatarWrap.className = "avatar";
            // add speaker-specific class so .avatar.A / .avatar.B styles apply
            avatarWrap.classList.add(turn.who);
            const avatarImg = document.createElement("img");
            avatarImg.src = avatars[turn.who] || "";
            avatarImg.alt = names[turn.who];
            avatarImg.onerror = () => {
                  // fallback: simple colored circle with initials
                  avatarImg.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className = "avatar-fallback";
                  fallback.textContent = names[turn.who].split(' ')[0].charAt(0);
                  avatarWrap.appendChild(fallback);
            };
            avatarWrap.appendChild(avatarImg);

      const meta = document.createElement("div");
      meta.className = "meta";

      const nameLbl = document.createElement("div");
      nameLbl.className = "name-label";
      nameLbl.textContent = names[turn.who];

      const bubble = document.createElement("div");
      bubble.className = "bubble";

      const sentence = document.createElement("div");
      sentence.className = "sentence";

      // Build word-level spans so users can hover to highlight and click to hear each word.
      // Split on spaces to preserve punctuation attached to words; strip punctuation when speaking.
      const tokens = turn.s.split(/(\s+)/);
      tokens.forEach(tok => {
            if (tok.trim() === '') {
                  // whitespace -> preserve as text node
                  sentence.appendChild(document.createTextNode(tok));
                  return;
            }
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = tok;
            span.style.cursor = 'pointer';
            span.style.padding = '0 2px';
            span.style.borderRadius = '3px';
            span.title = 'Click to hear this word';
            // hover highlight (simple inline style to avoid CSS edits)
            span.addEventListener('mouseenter', () => {
                  const isDark = document.documentElement.classList.contains('dark');
                  // Use a light yellow highlight in both themes; increase dark-mode opacity for visibility
                  span.style.backgroundColor = isDark ? 'rgba(255,235,59,0.28)' : 'rgba(255,249,196,0.9)';
            });
            span.addEventListener('mouseleave', () => {
                  span.style.backgroundColor = '';
            });
            // click reads only the word (strip common punctuation)
            span.addEventListener('click', (e) => {
                  e.stopPropagation();
                  const clean = tok.replace(/[.,!?;:\"()\[\]{}]/g, '').trim();
                  if (clean) speakPreferred(clean);
            });
            sentence.appendChild(span);
      });

      // Also keep whole-sentence click (click gaps or sentence background)
      sentence.addEventListener('click', () => speakPreferred(turn.s));

      const controls = document.createElement("div");
      controls.className = "controls-small";
      const playBtn = document.createElement("button");
      playBtn.className = "play-btn";
      playBtn.title = "Play";
      playBtn.textContent = "▶";
      playBtn.addEventListener("click", () => speakPreferred(turn.s));
      controls.appendChild(playBtn);

      const ipaEl = document.createElement("div");
      ipaEl.className = "ipa";
      ipaEl.textContent = turn.ipa;
      ipaEl.style.display = showIPA ? "block" : "none";
      // IPA is not clickable by user request
      ipaEl.style.cursor = 'default';
      ipaEl.title = '';

      const vnEl = document.createElement("div");
      vnEl.className = "vn";
      vnEl.textContent = turn.vn;
      vnEl.style.display = showVN ? "block" : "none";
      // Vietnamese text is not clickable by user request
      vnEl.style.cursor = 'default';
      vnEl.title = '';

            meta.appendChild(nameLbl);
            bubble.appendChild(sentence);
            bubble.appendChild(controls);
            bubble.appendChild(ipaEl);
            bubble.appendChild(vnEl);

            // Append elements in a consistent DOM order: avatar, meta, bubble.
            // Visual side (left/right) is handled by CSS (.turn.right { flex-direction: row-reverse }).
            container.appendChild(avatarWrap);
            container.appendChild(meta);
            container.appendChild(bubble);

      return container;
}

function renderAll() {
  const chat = document.getElementById("chatArea");
  if (!chat) return;
  chat.innerHTML = "";
 
  // Get selected topic index
      const selectedIndex = selectedTopicIndex;
      // If no topic is selected yet, don't render content
      if (selectedIndex === -1) return;
 
      // Render only the selected dialogue
      const d = allDialogues[selectedIndex];
      if (!d) return;
 
      const card = document.createElement("div");
      card.className = "chat-card";
      const heading = document.createElement("h2");
      // Combine English title and Vietnamese translation on one line
      heading.textContent = titleVN[d.title] ? `${d.title} - ${titleVN[d.title]}` : d.title;
      card.appendChild(heading);

      // If there are multiple parts for this title, show the parts selector
      const parts = getPartsForSelectedIndex();
      if (parts && parts.length > 1) {
            const baseTitle = parts[0].title;
            const sel = typeof topicPartSelection[baseTitle] === 'number' ? topicPartSelection[baseTitle] : 0;
            const selector = document.createElement('div');
            selector.className = 'parts-selector';
            parts.forEach((p, i) => {
                  const btn = document.createElement('button');
                  btn.className = 'part-btn';
                  btn.type = 'button';
                  btn.textContent = `Part ${i + 1}`;
                  btn.setAttribute('aria-pressed', (i === sel) ? 'true' : 'false');
                  if (i === sel) btn.classList.add('active');
                  btn.addEventListener('click', () => {
                        // When changing parts, cancel any ongoing playback and reset UI
                        try { handleTopicChange(); } catch (e) {}
                        topicPartSelection[baseTitle] = i;
                        renderAll();
                  });
                  selector.appendChild(btn);
            });
            card.appendChild(selector);
      }

      // Render turns for the dialogue currently chosen (respecting part selection)
      const current = getCurrentDialogue() || d;
      current.turns.forEach(t => card.appendChild(createTurnElement(t)));
      chat.appendChild(card);

}

function toggleIPA() {
      showIPA = !showIPA;
      document.querySelectorAll(".ipa").forEach(el => {
            el.style.display = showIPA ? "block" : "none";
      });
      const btn = document.getElementById("toggleIPA");
      btn.textContent = showIPA ? "IPA" : "IPA";
      btn.classList.toggle("active", showIPA);
}

// Custom dropdown functionality
// start with no topic selected — user must pick one to see content
let selectedTopicIndex = -1;

// Keep track of which part (0-based) is selected per topic title
const topicPartSelection = {};

// Return all parts (dialogues) for the currently selected topic index (grouped by title)
function getPartsForSelectedIndex() {
      const base = getDialogueForSelectedIndex();
      if (!base) return [];
      return allDialogues.filter(x => x.title === base.title);
}

// Return the dialogue object that should be used for the current selection,
// taking into account multi-part grouping by title.
function getCurrentDialogue() {
      const parts = getPartsForSelectedIndex();
      if (!parts || parts.length === 0) return null;
      const baseTitle = parts[0].title;
      const sel = typeof topicPartSelection[baseTitle] === 'number' ? topicPartSelection[baseTitle] : 0;
      const idx = Math.max(0, Math.min(parts.length - 1, sel));
      return parts[idx];
}

// Helper to resolve a dialogue for the current selection.
function getDialogueForSelectedIndex() {
      if (selectedTopicIndex === -1) return null;
      let d = allDialogues[selectedTopicIndex];
      if (d) return d;
      // Fallback: try to match by the displayed English title in the button
      try {
            const btn = document.getElementById('topicSelect');
            const enEl = btn && btn.querySelector && btn.querySelector('.topic-en');
            const enText = enEl ? enEl.textContent.trim() : (btn ? btn.textContent.trim() : '');
            if (enText) {
                  d = allDialogues.find(x => x.title === enText);
                  if (d) {
                        // update index to the found position for future operations
                        selectedTopicIndex = allDialogues.indexOf(d);
                        return d;
                  }
                  // Try contains match (some labels include extra text)
                  d = allDialogues.find(x => enText.includes(x.title) || x.title.includes(enText));
                  if (d) {
                        selectedTopicIndex = allDialogues.indexOf(d);
                        return d;
                  }
            }
      } catch (e) {}
      return null;
}

function initCustomDropdown() {
      const dropdownButton = document.getElementById('topicSelect');
      const dropdownList = document.getElementById('dropdownList');
      const searchInput = document.getElementById('topicSearch');

      if (!dropdownButton || !dropdownList) return;

      // Toggle dropdown on button click
      dropdownButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdownList.classList.contains('open');
            if (!isOpen) {
                  // On small screens, open modal instead for full-screen friendly UI
                  const small = window.matchMedia && window.matchMedia('(max-width:768px)').matches;
                  if (small) {
                        const modal = document.getElementById('dropdownModal');
                        const modalContent = modal && modal.querySelector('.dropdown-modal-content');
                        if (modal && modalContent) {
                              // Move the real dropdownList node into the modal so existing event listeners remain attached.
                              // Save original parent and sibling so we can restore later.
                              if (!modal._dropdownRestore) {
                                    modal._dropdownRestore = { parent: dropdownList.parentNode, nextSibling: dropdownList.nextSibling };
                              }
                              modalContent.appendChild(dropdownList);
                              // make sure the dropdown shows inside the modal
                              dropdownList.classList.add('open');
                              if (dropdownButton) dropdownButton.classList.add('open');
                              modal.setAttribute('aria-hidden','false');
                              document.body.style.overflow = 'hidden';
                              // wire close button to restore dropdown back to its original place
                              const closeBtn = document.getElementById('dropdownModalClose');
                              if (closeBtn) closeBtn.onclick = () => {
                                    // restore dropdownList to original location if it was moved
                                    if (modal._dropdownRestore && modal._dropdownRestore.parent) {
                                          const info = modal._dropdownRestore;
                                          try {
                                                // hide the dropdown first
                                                dropdownList.classList.remove('open');
                                                if (dropdownButton) dropdownButton.classList.remove('open');
                                                if (info.nextSibling) info.parent.insertBefore(dropdownList, info.nextSibling);
                                                else info.parent.appendChild(dropdownList);
                                          } catch (e) {
                                                // ignore restore failures
                                          }
                                          delete modal._dropdownRestore;
                                    }
                                    modal.setAttribute('aria-hidden','true');
                                    document.body.style.overflow = '';
                              };
                        }
                  } else {
                        dropdownList.classList.add('open');
                        dropdownButton.classList.add('open');
                  }
                  // Focus search input when opening
                  if (searchInput) {
                        // Use preventScroll when focusing so opening the dropdown doesn't jump the page
                        try {
                              setTimeout(() => searchInput.focus({ preventScroll: true }), 100);
                        } catch (e) {
                              // Fallback for older browsers
                              setTimeout(() => searchInput.focus(), 100);
                        }
                  }
            } else {
                  closeAllDropdowns();
            }
      });

      // Search functionality
      if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                  const searchTerm = e.target.value.toLowerCase().trim();
                  const categorySections = document.querySelectorAll('.category-section');

                  categorySections.forEach(section => {
                        const categoryItems = section.querySelectorAll('.dropdown-item');
                        let hasVisibleItems = false;

                        categoryItems.forEach(item => {
                              const text = item.textContent.toLowerCase();
                              const isVisible = text.includes(searchTerm);
                              item.style.display = isVisible ? 'block' : 'none';
                              if (isVisible) hasVisibleItems = true;
                        });

                        // Show/hide entire category section
                        section.style.display = hasVisibleItems || searchTerm === '' ? 'block' : 'none';

                        // Expand categories that have matching items
                        if (hasVisibleItems && searchTerm !== '') {
                              section.classList.add('expanded');
                        } else if (searchTerm === '') {
                              section.classList.remove('expanded');
                        }
                  });
            });

            // Clear search on escape
            searchInput.addEventListener('keydown', (e) => {
                  if (e.key === 'Escape') {
                        searchInput.value = '';
                        searchInput.dispatchEvent(new Event('input'));
                        searchInput.blur();
                  }
            });
      }

      // Handle category header clicks for expand/collapse
      // Make headers behave like an accordion: opening one closes others
      const categoryHeaders = document.querySelectorAll('.category-header');
      categoryHeaders.forEach(header => {
            // make header keyboard-focusable for accessibility
            header.setAttribute('tabindex', '0');
            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', 'false');

            const toggleSection = (e) => {
                  if (e && e.stopPropagation) e.stopPropagation();
                  const categorySection = header.closest('.category-section');
                  const isExpanded = categorySection.classList.contains('expanded');

                  // If already expanded, collapse it
                  if (isExpanded) {
                        categorySection.classList.remove('expanded');
                        header.setAttribute('aria-expanded', 'false');
                        return;
                  }

                  // Close any other expanded sections (accordion behavior)
                  document.querySelectorAll('.category-section.expanded').forEach(sec => {
                        sec.classList.remove('expanded');
                        const hdr = sec.querySelector('.category-header');
                        if (hdr) hdr.setAttribute('aria-expanded', 'false');
                  });

                  // Open the clicked one
                  categorySection.classList.add('expanded');
                  header.setAttribute('aria-expanded', 'true');
            };

            header.addEventListener('click', toggleSection);
            // support keyboard interaction (Enter and Space)
            header.addEventListener('keydown', (ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        toggleSection(ev);
                  }
            });
      });

      // Handle item selection
      const dropdownItems = document.querySelectorAll('.dropdown-item');
      dropdownItems.forEach((item) => {
            item.addEventListener('click', () => {
                  // Remove selected class from all items
                  document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));

                  // Add selected class to clicked item
                  item.classList.add('selected');

                  selectedTopicIndex = parseInt(item.dataset.value);
                  const text = item.textContent;
                  // split english and vietnamese by the first ' - ' delimiter if present
                  let en = text;
                  let vn = '';
                  const idx = text.indexOf(' - ');
                  if (idx !== -1) {
                        en = text.slice(0, idx).trim();
                        vn = text.slice(idx + 3).trim();
                  }
                  if (dropdownButton) {
                        dropdownButton.innerHTML = '';
                        const enEl = document.createElement('span');
                        enEl.className = 'topic-en';
                        enEl.textContent = en;
                        dropdownButton.appendChild(enEl);
                        if (vn) {
                              const vnEl = document.createElement('span');
                              vnEl.className = 'topic-vn';
                              vnEl.textContent = vn;
                              dropdownButton.appendChild(vnEl);
                        }
                  }

                  // Reset part selection for this title to the first part when user selects a topic
                  try {
                        if (en) topicPartSelection[en] = 0;
                  } catch (e) {}

                  // Keep the dropdown open after selection to allow learners to pick multiple topics quickly.
                  // Keep search value as-is so user can refine results. Focus the search input for convenience.
                        try {
                              if (searchInput) {
                                    // Prevent scroll when focusing after selection to avoid jumping to top
                                    try { searchInput.focus({ preventScroll: true }); }
                                    catch (e) { searchInput.focus(); }
                              }
                        } catch (e) {}

                  // Trigger topic change (re-render content) but do not close the dropdown.
                  handleTopicChange();
            });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
            const modal = document.getElementById('dropdownModal');
            if (modal && modal.getAttribute('aria-hidden') === 'false') {
                  // if modal open, close when clicking outside inner
                  const inner = modal.querySelector('.dropdown-modal-inner');
                  if (inner && !inner.contains(e.target)) {
                        // restore dropdownList back to its original parent if we moved it
                        if (modal._dropdownRestore && modal._dropdownRestore.parent) {
                              const info = modal._dropdownRestore;
                              try {
                                    const dropdownList = document.getElementById('dropdownList');
                                    if (dropdownList) {
                                          // hide the dropdown before restoring to avoid leftover visible list
                                          dropdownList.classList.remove('open');
                                          if (dropdownButton) dropdownButton.classList.remove('open');
                                          if (info.nextSibling) info.parent.insertBefore(dropdownList, info.nextSibling);
                                          else info.parent.appendChild(dropdownList);
                                    }
                              } catch (e) {}
                              delete modal._dropdownRestore;
                        }
                        modal.setAttribute('aria-hidden','true');
                        document.body.style.overflow = '';
                  }
            } else if (!dropdownButton.contains(e.target) && !dropdownList.contains(e.target)) {
                  closeAllDropdowns();
            }
      });

            // Do not auto-select any item on init; keep dropdown showing placeholder
            // (selection will be applied when user clicks an item)
}

function closeAllDropdowns() {
      // ensure no dropdowns or buttons remain in 'open' state
      const dropdownList = document.getElementById('dropdownList');
      if (dropdownList) dropdownList.classList.remove('open');
      const dropdownButton = document.getElementById('topicSelect');
      if (dropdownButton) dropdownButton.classList.remove('open');
      document.querySelectorAll('.dropdown-list').forEach(list => list.classList.remove('open'));
      document.querySelectorAll('.dropdown-button').forEach(btn => btn.classList.remove('open'));
      // Collapse all categories
      document.querySelectorAll('.category-section').forEach(section => {
            section.classList.remove('expanded');
      });
      // Clear search
      const searchInput = document.getElementById('topicSearch');
      if (searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
      }
}

function handleTopicChange() {
      // Stop any ongoing playback when switching topics
      playbackSession += 1;
      fullPlaybackActive = false;
      fullPlaybackPaused = false;
      try { window.speechSynthesis.cancel(); } catch (e) {}
      // clear playing highlights and remove controller
      try { const chat = document.getElementById('chatArea'); if (chat) { chat.querySelectorAll('.turn.playing').forEach(el => el.classList.remove('playing')); chat.classList.remove('full-play'); } } catch(e) {}
      try { if (window.currentPlaybackController) delete window.currentPlaybackController; } catch(e) {}
      // reset play/pause button states
      try { const btnPlay = document.getElementById('playFullTwoVoices'); if (btnPlay) { btnPlay.disabled = false; btnPlay.innerHTML = '🎧 Play All'; } const btnPause = document.getElementById('pauseResume'); if (btnPause) { btnPause.disabled = true; btnPause.innerHTML = '⏸️ Pause'; } } catch(e) {}
      
      // Re-render the selected dialogue
      renderAll();
}

function toggleVN() {
      showVN = !showVN;
      document.querySelectorAll(".vn").forEach(el => {
            el.style.display = showVN ? "block" : "none";
      });
      const btn = document.getElementById("toggleVN");
      btn.textContent = showVN ? "VN" : "VN";
      btn.classList.toggle("active", showVN);
}

document.addEventListener("DOMContentLoaded", () => {
      // Initialize custom dropdown
      initCustomDropdown();

      // If no topic is selected initially, show placeholder text in the button
      try {
            const dropdownButton = document.getElementById('topicSelect');
            if (dropdownButton && selectedTopicIndex === -1) {
                  dropdownButton.innerHTML = '';
                  const p1 = document.createElement('span');
                  p1.className = 'topic-en';
                  p1.textContent = 'Choose a topic';
                  dropdownButton.appendChild(p1);
                  const p2 = document.createElement('span');
                  p2.className = 'topic-vn';
                  p2.textContent = 'Chọn chủ đề';
                  dropdownButton.appendChild(p2);
            }
      } catch (e) {}
      
      // Topic selector (now handled by custom dropdown)
      // The change event is now handled in handleTopicChange() function
      
      // Buttons
            const btnIPA = document.getElementById("toggleIPA");
            const btnVN = document.getElementById("toggleVN");

            if (btnIPA) btnIPA.addEventListener("click", toggleIPA);
            if (btnVN) btnVN.addEventListener("click", toggleVN);

      // Speech rate slider wiring
      const rateSlider = document.getElementById('speechRate');
      const rateVal = document.getElementById('speechRateVal');
      if (rateSlider && rateVal) {
            rateSlider.value = String(speechRate);
            rateVal.textContent = String(speechRate) + 'x';
            rateSlider.setAttribute('aria-valuenow', String(speechRate));
            rateSlider.addEventListener('input', (e) => {
                  const v = parseFloat(e.target.value);
                  speechRate = v;
                  rateVal.textContent = v.toFixed(2) + 'x';
                  rateSlider.setAttribute('aria-valuenow', String(v));
                  try { localStorage.setItem(SPEECH_RATE_KEY, String(v)); } catch (e) {}
                  // if a full playback is active, notify controller to apply rate immediately
                  try { if (window.currentPlaybackController && fullPlaybackActive) window.currentPlaybackController.handleRateChange(v); } catch (e) {}
            });

            // Allow adjusting rate by mouse wheel when hovering over the control
            const rateControl = document.querySelector('.rate-control');
            const adjustRateByWheel = (ev) => {
                  ev.preventDefault();
                  // step from slider or default
                  const step = parseFloat(rateSlider.step) || 0.01;
                  const dir = ev.deltaY < 0 ? 1 : -1; // wheel up -> increase
                  let v = parseFloat(rateSlider.value) + dir * step;
                  const min = parseFloat(rateSlider.min) || 0.4;
                  const max = parseFloat(rateSlider.max) || 1.2;
                  v = Math.min(max, Math.max(min, v));
                  speechRate = v;
                  rateSlider.value = String(v);
                  rateVal.textContent = String(v.toFixed(2));
                  rateSlider.setAttribute('aria-valuenow', String(v));
                  try { localStorage.setItem(SPEECH_RATE_KEY, String(v)); } catch (e) {}
                  // if full playback is active, notify controller to restart current sentence at new rate
                  try { if (window.currentPlaybackController && fullPlaybackActive) window.currentPlaybackController.handleRateChange(v); } catch (e) {}
            };

            if (rateControl) {
                  rateControl.addEventListener('wheel', adjustRateByWheel, { passive: false });
            } else {
                  // fallback: attach to the slider itself
                  rateSlider.addEventListener('wheel', adjustRateByWheel, { passive: false });
            }
      }

            // Theme toggle wiring
            const btnTheme = document.getElementById("toggleTheme");
            const THEME_KEY = 'talkingTheme';

    function setTheme(dark) {
      if (dark) {
        document.documentElement.classList.add('dark');
        // Button should show the target mode (what will happen when clicked)
        if (btnTheme) {
          btnTheme.innerHTML = `🌙`;
          btnTheme.setAttribute('aria-pressed','true');
          btnTheme.title = 'Switch to Light mode';
          btnTheme.classList.add('active');
        }
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (btnTheme) {
          btnTheme.innerHTML = `🌙`;
          btnTheme.setAttribute('aria-pressed','false');
          btnTheme.title = 'Switch to Dark mode';
          btnTheme.classList.remove('active');
        }
        localStorage.setItem(THEME_KEY, 'light');
      }
    }

            function toggleTheme() {
                  const isDark = document.documentElement.classList.contains('dark');
                  setTheme(!isDark);
            }

            // Initialize theme from localStorage or prefers-color-scheme
            const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      setTheme(saved === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }

    // Ensure button shows correct target-mode label if present
    if (btnTheme && !btnTheme.innerHTML) {
      const isDark = document.documentElement.classList.contains('dark');
      btnTheme.innerHTML = `🌙`;
      btnTheme.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      if (isDark) {
        btnTheme.classList.add('active');
      } else {
        btnTheme.classList.remove('active');
      }
    }

            if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

            // Wire play-full-two-voices button
            const btnPlayFull = document.getElementById('playFullTwoVoices');
                        const btnPause = document.getElementById('pauseResume');
                  const btnRestart = document.getElementById('restartFromStart');

                  // hoisted helper so restart can call it
                  let startFullPlayback;

                              if (btnPlayFull) {
                                    // helper to start playback and manage button states
                                                startFullPlayback = async () => {
                                                      // Get selected dialogue (respect multi-part selection)
                                                            const dlg = getCurrentDialogue() || allDialogues[selectedTopicIndex];
                                                            if (!dlg) return;
                                                      
                                                      btnPlayFull.disabled = true;
                                                      btnPlayFull.textContent = 'Playing...';
                                          if (btnPause) {
                                                btnPause.disabled = false;
                                                // keep the pause icon when enabling
                                                btnPause.innerHTML = '⏸️ Pause';
                                          }
                                          fullPlaybackPaused = false;
                                          try {
                                                await playFullDialogueTwoVoices(dlg);
                                          } finally {
                                                fullPlaybackActive = false;
                                                if (btnPause) {
                                                      btnPause.disabled = true;
                                                      // ensure icon remains visible even when disabled
                                                      btnPause.innerHTML = '⏸️ Pause';
                                                }
                                                btnPlayFull.disabled = false;
                                                btnPlayFull.innerHTML = '🎧 Play All';
                                          }
                                    };

                                                                        btnPlayFull.addEventListener('click', async () => {
                                                                  if (fullPlaybackActive) {
                                                                        // Playback already running — ignore clicks. Use Pause/Resume to control playback.
                                                                        return;
                                                                  }
                                                                  // Start playback fresh
                                                                  startFullPlayback();
                                                            });
                              }

                        // Pause/Resume button wiring
                        if (btnPause) {
                              btnPause.addEventListener('click', () => {
                                    if (!fullPlaybackActive) return;
                                    if (!fullPlaybackPaused) {
                                          // Pause
                                          try { window.speechSynthesis.pause(); } catch (e) {}
                                          fullPlaybackPaused = true;
                                          // show resume label with play icon
                                          btnPause.innerHTML = '▶ Resume';
                                    } else {
                                          // Resume
                                          try { window.speechSynthesis.resume(); } catch (e) {}
                                          fullPlaybackPaused = false;
                                          // show pause label with pause icon
                                          btnPause.innerHTML = '⏸️ Pause';
                                    }
                              });
                        }

                        // Restart button wiring: always cancel current playback (if any) and start from the beginning
                        if (btnRestart) {
                              btnRestart.addEventListener('click', () => {
                                    // increment session id so old callbacks bail out
                                    playbackSession += 1;
                                    // clear global flags and cancel speech
                                    fullPlaybackActive = false;
                                    fullPlaybackPaused = false;
                                    try { window.speechSynthesis.cancel(); } catch (e) {}
                                    // small delay to ensure cancel processed, then start
                                    setTimeout(() => {
                                          // start fresh if helper exists
                                          if (typeof startFullPlayback === 'function') {
                                                startFullPlayback();
                                          } else {
                                                // fallback: get selected dialogue and play
                                                const selectedIndex = selectedTopicIndex;
                                                const dlg = allDialogues[selectedIndex];
                                                if (dlg) playFullDialogueTwoVoices(dlg);
                                          }
                                    }, 120);
                              });
                        }

                  // Scroll-to-top button wiring
                  try {
                        const scrollBtn = document.getElementById('scrollToTopBtn');
                        const chatArea = document.getElementById('chatArea');
                        if (scrollBtn && chatArea) {
                              // show button when page is scrolled past the top of chatArea
                              const checkVisibility = () => {
                                    const rect = chatArea.getBoundingClientRect();
                                    // if chatArea top is above 80px from viewport top, show button
                                    if (rect.top < 80) scrollBtn.classList.add('visible'); else scrollBtn.classList.remove('visible');
                              };
                              window.addEventListener('scroll', checkVisibility, { passive: true });
                              // also check after rendering changes
                              const obs = new MutationObserver(() => checkVisibility());
                              obs.observe(chatArea, { childList: true, subtree: true });

                              scrollBtn.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    try {
                                          chatArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    } catch (err) {
                                          window.scrollTo({ top: chatArea.offsetTop, behavior: 'smooth' });
                                    }
                              });
                              // initial check
                              setTimeout(checkVisibility, 200);
                        }
                  } catch (e) {}

                  // Adjust scroll button to avoid overlapping footer when footer is visible
                  try {
                        const footer = document.querySelector('.footer');
                        const scrollBtn = document.getElementById('scrollToTopBtn');
                        if (footer && scrollBtn && 'IntersectionObserver' in window) {
                              const io = new IntersectionObserver(entries => {
                                    entries.forEach(en => {
                                          if (en.isIntersecting) {
                                                // footer visible, lift the button above footer
                                                const footerRect = footer.getBoundingClientRect();
                                                // add 16px gap
                                                scrollBtn.style.bottom = `${window.innerHeight - footerRect.top + 28}px`;
                                          } else {
                                                // reset to default
                                                scrollBtn.style.bottom = '';
                                          }
                                    });
                              }, { root: null, threshold: 0 });
                              io.observe(footer);
                        }
                  } catch (e) {}
});


// User input container show/hide toggle (persisted)
try {
      document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('toggleUserInput');
            const container = document.getElementById('userInputContainer');
            const userInput = document.getElementById('userInputText');
            const KEY = 'userInputVisible';
            if (!toggleBtn || !container) return;
            // default collapsed
            let visible = false;
            try { const stored = localStorage.getItem(KEY); if (stored === '1') visible = true; } catch (e) {}
            const apply = () => {
                  if (visible) {
                        container.classList.remove('collapsed');
                        toggleBtn.setAttribute('aria-pressed', 'true');
                  toggleBtn.textContent = '📝 Hide';
                        try { setTimeout(() => userInput && userInput.focus({ preventScroll: true }), 80); } catch (e) { try { userInput && userInput.focus(); } catch (e2) {} }
                  } else {
                        container.classList.add('collapsed');
                        toggleBtn.setAttribute('aria-pressed', 'false');
                  toggleBtn.textContent = '📝 Show';
                  }
                  try { localStorage.setItem(KEY, visible ? '1' : '0'); } catch (e) {}
            };
            apply();
            toggleBtn.addEventListener('click', () => { visible = !visible; apply(); });
      });
} catch (e) {}

// User input TTS feature
document.addEventListener("DOMContentLoaded", () => {
      const playUserInputBtn = document.getElementById("playUserInput");
      const userInputText = document.getElementById("userInputText");
      if (playUserInputBtn && userInputText) {
            playUserInputBtn.addEventListener("click", () => {
                  const text = userInputText.value.trim();
                  if (text) {
                        speakPreferred(text);
                  }
            });
            userInputText.addEventListener("keydown", (e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        playUserInputBtn.click();
                  }
            });
      }

      // Translate textarea input to Vietnamese
      try {
            const translateBtn = document.getElementById('translateInput');
            const dirToggle = document.getElementById('translateDirToggle');
            const resultEl = document.getElementById('translationResult');
            // direction: true => EN->VI, false => VI->EN
            let enToVi = true;
            if (dirToggle) {
                  dirToggle.addEventListener('click', () => {
                        enToVi = !enToVi;
                        dirToggle.textContent = enToVi ? 'EN→VI' : 'VI→EN';
                  });
            }
            if (translateBtn && userInputText && resultEl) {
                  translateBtn.addEventListener('click', async () => {
                        const text = userInputText.value.trim();
                        if (!text) return;
                        translateBtn.disabled = true;
                        translateBtn.textContent = 'Translating...';
                        resultEl.style.display = 'block';
                        resultEl.textContent = 'Translating...';
                        const source = enToVi ? 'en' : 'vi';
                        const target = enToVi ? 'vi' : 'en';
                        // Use LibreTranslate public instance (no API key). This may be rate limited.
                        const payload = { q: text, source: source, target: target, format: 'text' };
                        let ok = false;
                        try {
                              const resp = await fetch('https://libretranslate.de/translate', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(payload),
                                    mode: 'cors'
                              });
                              if (resp && resp.ok) {
                                    const data = await resp.json();
                                    if (data && data.translatedText) {
                                          resultEl.textContent = data.translatedText;
                                          ok = true;
                                    }
                              }
                        } catch (e) {
                              // network or CORS failure
                        }
                        translateBtn.disabled = false;
                        translateBtn.textContent = 'Translate ↓';
                        if (!ok) {
                              // Try unofficial Google Translate JSON endpoint as a fallback and display inline
                              try {
                                    const gresp = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + source + '&tl=' + target + '&dt=t&q=' + encodeURIComponent(text));
                                    if (gresp && gresp.ok) {
                                          const gdata = await gresp.json();
                                          // parse the nested arrays returned by the endpoint
                                          let combined = '';
                                          if (Array.isArray(gdata)) {
                                                for (const seg of gdata[0] || []) {
                                                      if (seg && seg[0]) combined += seg[0];
                                                }
                                          }
                                          if (combined) {
                                                resultEl.textContent = combined;
                                                ok = true;
                                          }
                                    }
                              } catch (e) {
                                    // ignore and show error below
                              }
                              if (!ok) {
                                    resultEl.textContent = 'Translation currently unavailable. Please try again later.';
                              }
                        }
                  });
            }
      } catch (e) {}

      // Clear selected dialogue button
      try {
            const clearBtn = document.getElementById('clearSelection');
            if (clearBtn) {
                  clearBtn.addEventListener('click', () => {
                        // reset selection state
                        selectedTopicIndex = -1;
                        // clear any topic text in the button
                        const dropdownButton = document.getElementById('topicSelect');
                        if (dropdownButton) {
                              dropdownButton.innerHTML = '';
                              const p1 = document.createElement('span');
                              p1.className = 'topic-en';
                              p1.textContent = 'Choose a topic';
                              dropdownButton.appendChild(p1);
                              const p2 = document.createElement('span');
                              p2.className = 'topic-vn';
                              p2.textContent = 'Chọn chủ đề';
                              dropdownButton.classList.remove('open');
                        }
                        // clear chat area
                        // stop any ongoing playback and reset playback UI
                        playbackSession += 1;
                        fullPlaybackActive = false;
                        fullPlaybackPaused = false;
                        try { window.speechSynthesis.cancel(); } catch (e) {}
                        // clear playing highlights and remove controller
                        try { const chat = document.getElementById('chatArea'); if (chat) { chat.querySelectorAll('.turn.playing').forEach(el => el.classList.remove('playing')); chat.classList.remove('full-play'); } } catch(e) {}
                        try { if (window.currentPlaybackController) delete window.currentPlaybackController; } catch(e) {}
                        // reset play/pause button states
                        try { const btnPlay = document.getElementById('playFullTwoVoices'); if (btnPlay) { btnPlay.disabled = false; btnPlay.innerHTML = '🎧 Play All'; } const btnPause = document.getElementById('pauseResume'); if (btnPause) { btnPause.disabled = true; btnPause.innerHTML = '⏸️ Pause'; } } catch(e) {}
                        renderAll();
                        // clear selection classes
                        document.querySelectorAll('.dropdown-item.selected').forEach(el => el.classList.remove('selected'));
                        // restore dropdownList if it was moved into modal
                        const modal = document.getElementById('dropdownModal');
                        const dropdownList = document.getElementById('dropdownList');
                        if (modal && modal._dropdownRestore && modal._dropdownRestore.parent && dropdownList) {
                              const info = modal._dropdownRestore;
                              try {
                                    dropdownList.classList.remove('open');
                                    if (info.nextSibling) info.parent.insertBefore(dropdownList, info.nextSibling);
                                    else info.parent.appendChild(dropdownList);
                              } catch (e) {}
                              delete modal._dropdownRestore;
                              modal.setAttribute('aria-hidden','true');
                              document.body.style.overflow = '';
                        }
                        // reset part selection map
                        for (const k in topicPartSelection) delete topicPartSelection[k];
                        // reset translation UI
                        const resultEl = document.getElementById('translationResult');
                        if (resultEl) { resultEl.style.display='none'; resultEl.textContent=''; }
                  });
            }
      } catch (e) {}

      // Clear input text button
      try {
            const clearInputBtn = document.getElementById('clearInputText');
            const userInput = document.getElementById('userInputText');
            const translateBtnEl = document.getElementById('translateInput');
            const resultEl = document.getElementById('translationResult');
            if (clearInputBtn && userInput) {
                  clearInputBtn.addEventListener('click', () => {
                        userInput.value = '';
                        try { userInput.focus(); } catch (e) {}
                        if (resultEl) { resultEl.style.display='none'; resultEl.textContent=''; }
                        if (translateBtnEl) { translateBtnEl.disabled = false; translateBtnEl.textContent = 'Translate ↓'; }
                  });
            }
      } catch (e) {}
});

renderAll();
