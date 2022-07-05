<div align="center">
  <img src="https://salt.tikicdn.com/ts/miniapp/cf/d5/cd/36c7269026fec6bc85d62aa31ffe3fc2.png" alt="Logo" width="80" height="80">
<h3 align="center">Merchant Template</h3>
  <p align="center">
    Template hỗ trợ store của Tiki có thể tạo được một ứng dụng shopping đơn giản bằng nền tảng Tini App
    <br />
    <br />
  </p>
</div>

<div align="center">
  <img src="https://salt.tikicdn.com/ts/miniapp/c3/8f/7c/73520800f96ac05c7a1d649b5e89c986.png" alt="Screen Shot" width="360">
<h3 align="center">Merchant Template</h3>
</div>

<br/>

## Chức năng

- Xem thông tin shop (Tên, logo, số lượng followers)
- Theo dõi/Huỷ theo shop
- Nhắn tin với shop
- Banners quảng cáo
- Danh mục sản phẩm
- Thông tin sản phẩm
- Sắp xếp sản phẩm
- Tìm kiếm sản phẩm
- Mua và thanh toán sản phẩm thông qua Tiki

<br/>

## Hướng dẫn cài đặt

Trước hết, vui lòng tải về [Tini Studio](https://developers.tiki.vn/downloads) để chỉnh sửa cũng như khởi chạy template.

### Cài đặt

1. Từ menu của Tini Studio chọn `File --> New Project --> Ở mục Template chọn Merchant`. Hoặc có thể clone trực tiếp repo này về và mở bằng Tini Studio.

2. Cài đặt các packages

   ```sh
   yarn
   ```

3. Thay thế seller ID của store tại file `app.js`
   ```js
   sellerId: <your_seller_id>;
   ```
