Page({
  data: {
    inputTypes: [
      "none",
      "text",
      "tel",
      "url",
      "email",
      "numeric",
      "decimal",
      "search",
    ],
    confirmTypes: ["enter", "done", "go", "next", "previous", "search", "send"],
  },
  onInput(e) {
    console.log("onInput", e);
  },
  onConfirm(e) {
    console.log("onConfirm", e);
  },
  onFocus(e) {
    console.log("onFocus", e);
  },
  onBlur(e) {
    console.log("onBlur", e);
  },
});
