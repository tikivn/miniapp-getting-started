Page({
  onPageScroll(event) {
    if (event.scrollTop > 120) {
      my.setNavigationBar({
        title: "Ngày hội đọc sách",
      });
    } else {
      my.setNavigationBar({
        title: "  ",
      });
    }
  },
});
