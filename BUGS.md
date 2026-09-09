## Tuần 1 — Ngày 6

**Bug 1:** Vòng lặp bắt đầu từ i = 1 nên bỏ qua phần tử đầu tiên.

- Triệu chứng: tổng ra 90 thay vì 100
- Tìm ra bằng: đặt breakpoint trong vòng lặp, đọc panel VARIABLES thấy i = 1
- Bài học: nhìn code không thấy, nhìn giá trị thật thì thấy ngay

**Bug 2:** TypeError: Cannot read properties of null

- Dòng lỗi thật: error-practice.js:2:15
- Nguyên nhân: mảng có phần tử null, hàm không kiểm tra trước khi truy cập .name
