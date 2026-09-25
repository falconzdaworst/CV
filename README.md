# CV — Portfolio cá nhân

Website giới thiệu CV, kinh nghiệm, học vấn, kỹ năng và thông tin liên hệ. Người xem có thể tải bản CV PDF ngay trên trang.

Trang sử dụng **HTML, CSS và JavaScript thuần**, không cần cài thư viện, không cần bước build và có thể triển khai trực tiếp lên GitHub Pages.

## Tự đăng website lên GitHub

1. **Giải nén tệp ZIP** đã nhận. Mở thư mục chứa trực tiếp `index.html`, `styles.css`, `app.js`, thư mục `assets` và `.nojekyll`.
2. Đăng nhập GitHub bằng tài khoản có quyền chỉnh sửa [falconzdaworst/CV](https://github.com/falconzdaworst/CV). Nếu repository đang trống, bấm liên kết **uploading an existing file**. Nếu repository đã có tệp, chọn **Add file → Upload files**.
3. Kéo thả **các tệp và thư mục bên trong** thư mục đã giải nén vào trang tải lên: `index.html`, `styles.css`, `app.js`, `assets`, `.nojekyll` và `README.md`. Giữ nguyên thư mục `assets`. **Không tải tệp ZIP hoặc thư mục `CV` bao ngoài lên.**
4. Nhập mô tả như `Add portfolio website`, rồi bấm **Commit changes** để lưu lên nhánh **main**. Kiểm tra `index.html` nằm ngay ở trang gốc của repository, cùng cấp với `assets`.
5. Mở [Settings → Pages](https://github.com/falconzdaworst/CV/settings/pages). Trong **Build and deployment**, chọn **Source → Deploy from a branch**.
6. Chọn nhánh **main**, thư mục **/(root)**, rồi bấm **Save**.
7. Chờ lượt triển khai trong tab **Actions** báo thành công. Sau đó mở **[https://falconzdaworst.github.io/CV/](https://falconzdaworst.github.io/CV/)**. Link chỉ hoạt động sau khi GitHub Pages triển khai xong.

Tệp `.nojekyll` đã có trong bộ mã nguồn để bỏ qua xử lý Jekyll. Nếu máy đang ẩn tệp này, bật hiển thị tệp ẩn trước khi tải lên. Website đơn giản này vẫn có thể chạy nếu thiếu `.nojekyll`, nhưng nên tải đầy đủ bộ tệp đã cung cấp.

Không cần cài Node.js, chạy `npm install` hay `npm run build`.

## Xem trên máy

Mở `index.html` bằng trình duyệt. Giữ nguyên các tệp và thư mục đi kèm để giao diện và nút tải CV hoạt động đầy đủ.

Tham khảo: [Hướng dẫn chọn nguồn xuất bản GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) và [hướng dẫn tạo trang GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Cập nhật nội dung

- Sửa nội dung và các liên kết trong `index.html`. Với phần tử có thuộc tính `data-i18n`, cập nhật khóa tương ứng trong cả hai bộ bản dịch tiếng Việt và tiếng Anh ở `app.js`; JavaScript sẽ thay nội dung HTML bằng bản dịch khi trang chạy.
- Sửa giao diện trong `styles.css`; sửa hành vi tương tác trong `app.js`.
- Thay CV PDF bằng bản mới và cập nhật liên kết tải trong `index.html` nếu đổi tên tệp.
- Dùng đường dẫn tài nguyên tương đối để website hoạt động tại địa chỉ `/CV/` trên GitHub Pages.

Sau khi cập nhật, tải các tệp đã sửa lên lại bằng **Add file → Upload files** và **Commit changes** vào `main`. GitHub Pages sẽ tự triển khai bản mới.
