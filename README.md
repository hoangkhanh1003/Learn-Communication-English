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

## Ảnh minh họa

Thêm ảnh vào thư mục `images/` (hoặc dùng ảnh remote) để hiển thị trong repo.

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
- `images/` — avatar và minh họa

## Lưu ý kỹ thuật / Production checklist

- Kiểm tra kỹ các chỗ dùng `innerHTML` (cần sanitize nếu dữ liệu không tin cậy). Hiện tại tôi đã sửa những chỗ gây lỗi UI; vẫn nên review toàn bộ project.
- Thay các endpoint dịch (LibreTranslate/Google) bằng một endpoint cấu hình (proxy server) kèm API key.
- TTS: behavior khác nhau trên browser. Kiểm tra Safari (iPhone) — có thể cần điều chỉnh `SpeechSynthesisUtterance` chunking và delay.
- Ảnh avatar: nên host trong repo hoặc CDN đáng tin cậy để tránh broken images.
- Footer & scroll: đảm bảo padding-bottom đủ để nội dung không bị che bởi footer cố định.

## Hướng dẫn up lên GitHub

1. Tạo repo mới trên GitHub.
2. Trong thư mục project local, khởi tạo git và push:

```powershell
cd "C:\Users\khanhnh17\Desktop\Learn-Speak-English"
git init
git add .
git commit -m "Initial commit - Learn Speak English"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. Kiểm tra GitHub Pages (nếu muốn host as static site): `Settings → Pages` và chọn branch `main` và folder `/ (root)`.

## Phần mở rộng đề xuất

- Thêm cơ chế auth & lưu tiến trình học (localStorage hoặc server)
- Thay translate bằng service trả phí (Google Cloud Translate, DeepL) với API key server-side
- Thêm unit-tests (Node script) để validate `data.js` (ví dụ: `detect_incomplete_parts.js` đang có sẵn)

## License

MIT — bạn có thể sửa đổi, phân phối và dùng cho mục đích cá nhân/giáo dục.

---

Nếu bạn muốn, tôi có thể:

- Viết README tiếng Anh kèm badge (build, license)
- Thêm ảnh minh họa sẵn có trong repo và cập nhật README để show các ảnh cụ thể
- Tạo `package.json` và script `start` để dễ phục vụ bằng `npm start`

Cho tôi biết bạn muốn thêm phần nào nữa (Tiếng Anh / badges / demo link) và tôi sẽ bổ sung.
