const text = 'This is first line\nThis is second line';
const extraLine = [];
const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

Page({
  data: {
    text,
    longText,
  },
  add: function () {
    extraLine.push('Other line');
    this.setData({
      text: text + '\n' + extraLine.join('\n'),
    });
  },
  remove: function () {
    if (extraLine.length > 0) {
      extraLine.pop();
      this.setData({
        text: text + '\n' + extraLine.join('\n'),
      });
    }
  },
});
