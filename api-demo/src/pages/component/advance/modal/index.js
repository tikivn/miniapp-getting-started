Page({
    data: {
        modal: {},
    },
    resetModal() {
        this.setData({
            modal: {},
        });
    },
    onButtonClick(e) {
        this.setData({
            modal: {},
        });
        console.log("e.target", e.target);
        if (e.target.dataset.index === 0) {
            my.alert({
                content: "item" + JSON.stringify(e.target.dataset),
            });
        } else if (e.target.dataset.index === 1) {
            my.alert({
                content: "item" + JSON.stringify(e.target.dataset),
            });
        } else {
            my.alert({
                content: "unhandle",
            });
        }
    },
    setModalState(nextModal) {
        const newModalState = {
            ...this.data.modal,
            ...nextModal,
        };
        console.log("nextModal", nextModal);
        console.log("nextState", newModalState);

        this.setData({
            modal: newModalState,
        });
    },
    changeImageSize(e) {
        this.setModalState({
            topImageSize: e.target.dataset.size,
        });
    },
    onMaskClick() {
        this.resetModal();
    },
    onModalClose() {
        this.resetModal();
    },
    onCancel() {
        this.setData({ modal: {} });
    },
    onTap(e) {
        this.setModalState(e.target.dataset.modal);
    },
});
