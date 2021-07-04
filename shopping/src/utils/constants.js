export const orderStatusMap = {
  draft: "Chờ thanh toán",
  online_paid: "Thanh toán thành công",
  pending: "Chờ ghép",
  successful_delivery: "Giao hàng thành công",
  "in-transit": "Đang giao",
  picking: "Tài xế đang nhận hàng",
  delivering: "Đang giao",
  failed_shipment: "Giao hàng thất bại",
  allocating: "Đang tìm tài xế",
};

export const deliveryTagMap = {
  INSTANT: "Giao ngay 30m",
  SAME_DAY: "Giao trong 2h - 4h",
  BULK: "Giao trong ngày",
};
