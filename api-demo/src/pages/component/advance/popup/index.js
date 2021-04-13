Page({
    data: {
        popup: {},
    },
    onLoad() {},
    onMaskClick() {
        this.setData({
            popup: {},
        });
    },
    onTap(e) {
        this.setData({
            popup: e.target.dataset.popup,
        });
    },
});
