Page({
  onActionSheet() {
    my.showActionSheet({
      title: "Action Sheet",
      items: ["Button 1", "Button 2", "Button 3"],
      destructiveBtnIndex: 2,
      success: (res) => {
        const btn = res.index === -1 ? "Cancel" : "at index " + res.index;
        my.alert({
          title: `Clicked button ${btn}`,
        });
      },
    });
  },
});
