Component({
  methods: {
    onGoToHome() {
      // my.navigateTo({ url: `pages/index/index` });

      my.switchTab({
        url: "pages/index/index",
      });
    },
  },
});
