Page({
  onLoadFontFace() {
    my.loadFontFace({
      family: 'Pacifico Regular',
      source: "url('https://sungd.github.io/Pacifico.ttf')",
      success: (res) => {
        my.showAlert({ content: 'Font is load successful' });
      },
      fail: (res) => {
        my.showAlert({ title: JSON.stringify(res) });
      },
    });
  },
});
