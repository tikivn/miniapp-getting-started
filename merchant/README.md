<div align="center">
  <img width="200" src="https://salt.tikicdn.com/ts/miniapp/8f/b5/0e/9f86f79f537964ecdde56000092dd0de.png" alt="QR" />
<h3 align="center">Merchant Template</h3>
  <p align="center">
    Tiện ích mẫu giúp các nhà bán của Tiki có thể mở rộng kênh bán hàng và tương tác với khách hàng trên nền tảng Tini App.
    <br />
    <a href="https://github.com/tikivn/miniapp-getting-started/tree/main/merchant"><strong>Xem thêm tại »</strong></a>
    <br />
    <br />
  </p>
</div>

<div align="center">
  <img src="https://salt.tikicdn.com/ts/miniapp/d4/a1/7d/c8a294df58bd4676a8a278aeeb29e0ea.png
" alt="Screen Shot">
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

2. Cài đặt các packages:

   ```sh
   yarn
   ```

3. Thay thế seller ID của store tại file `app.js`

   ```js
   sellerId: <your_seller_id>;
   ```

4. Mở simulator và xem thành quả.
