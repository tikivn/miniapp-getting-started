Component({
  methods: {
    async onTap(e) {
      try {
        const url = e.target.dataset.app.url;
        console.log("tab banner>>", url);
        await my.openDeeplink({url})
      } catch (error) {
        console.log("tab banner>>", error);
        my.alert({ title: 'Fail', content: "Không tìm thấy url" });
      }
    },
  },
});
