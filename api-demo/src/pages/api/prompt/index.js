Page({
  onPrompt() {
    my.prompt({
      title: "Prompt",
      message:
        "This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message This is a long message ",
      placeholder: "Type whatever",
      okButtonText: "Uhm",
      cancelButtonText: "Ohm",
      success: (result) => {
        my.alert({
          title: JSON.stringify(result),
        });
      },
    });
  },
});
