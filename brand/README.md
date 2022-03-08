<!-- <div align="center">
  <img width="200" src="https://salt.tikicdn.com/ts/miniapp/8f/b5/0e/9f86f79f537964ecdde56000092dd0de.png" alt="QR" /> -->
<h3 align="center">Brand Template</h3>
  <p align="center">
    Ứng dụng giúp hỗ trợ các Seller mở brand trên Tini App
    <br />
    <a href="https://github.com/tikivn/miniapp-getting-started/tree/main/brand"><strong>Xem thêm tại »</strong></a>
    <br />
    <br />
  </p>
</div>

<div align="center">
  <img src="https://salt.tikicdn.com/ts/miniapp/98/f8/c0/2a36796f9b471fabcfcc7b651b3fffc8.png" alt="Screen Shot" width="360">
  <h3 align="center">Brand Template</h3>
</div>

<br/>

## Chức năng

- Xem thông tin brand (logo, cover)
- Banners quảng cáo
- Danh mục sản phẩm
- Thông tin sản phẩm
- Sắp xếp và lọc sản phẩm
- Tìm kiếm sản phẩm
- Mua và thanh toán sản phẩm thông qua Tiki

<br/>

## Hướng dẫn cài đặt

Trước hết, vui lòng tải về [Tini Studio](https://developers.tiki.vn/downloads) để chỉnh sửa cũng như khởi chạy template.

### Cài đặt

1. Từ menu của Tini Studio chọn `File --> New Project --> Ở mục Template chọn Brand`. Hoặc có thể clone trực tiếp repo này về và mở bằng Tini Studio.

2. Cài đặt các packages

   ```sh
   yarn
   ```

3. Thay thế các thông số của brand tại file `app.js`
   ```js
   brandName: <your_brand_name>;
   brandLogo: <your_brand_name>;
   brandCover: <your_brand_name>;
   ```
4. Mở simulator và xem thành quả.
