# Learn Speak English

Một trang web học nói tiếng Anh đơn giản, bằng HTML/CSS/JavaScript thuần, kèm tính năng:

- Chọn chủ đề (topic) và phần (part) từ dropdown
- Hiển thị hội thoại theo turn (người nói A/B)
- Phát giọng nói (Text-to-Speech) cho từng câu hoặc toàn bộ hội thoại (Play All) bằng Web Speech API
- Dùng hai giọng khác nhau cho hai nhân vật (Play All - 2 voices)
- Dịch nhanh EN ↔ VI với fallback (LibreTranslate / Google JSON)
- Nút Clear để xóa lựa chọn, dừng phát ngay lập tức
- Responsive: dropdown có modal fallback trên màn hình nhỏ (iPhone, mobile)
- Nút ẩn/hiện vùng input tiếng Anh; lưu trạng thái người dùng


## Hướng dẫn nhanh (Run locally)

1. Mở thư mục project trong trình duyệt
   - Đây là một trang tĩnh. Mở `index.html` bằng trình duyệt (double-click hoặc `File → Open`).

2. (Tùy chọn) Dùng máy chủ tĩnh để tránh một số giới hạn của browser (CORS/Audio)

Windows PowerShell (một cách nhanh):

```powershell
# nếu có npm + http-server
npm install -g http-server; http-server -c-1
# Hoặc dùng Python 3
python -m http.server 8080
# Sau đó mở http://localhost:8080
```

3. Tính năng cần chú ý
- Text-to-Speech: Trình duyệt cần hỗ trợ Web Speech API (Chrome, Edge, Safari hỗ trợ khác nhau). Trên iPhone, Safari có giới hạn: giọng và control có thể khác so với Chrome Desktop.
- Translate: Mặc định dùng public endpoints; vì lý do bảo mật và hạn mức, bạn nên thay bằng proxy/đăng ký API cho production.

## Cấu trúc thư mục

- `index.html` — giao diện chính
- `styles.css` — style
- `script.js` — logic: dropdown, TTS, translate, playback
- `data.js` — dữ liệu hội thoại (turns)
