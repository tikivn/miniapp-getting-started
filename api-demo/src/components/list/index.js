Component({
    data: {},
    methods: {
      onOpenPage(e) {
        if (e.target.dataset.url) {
          my.navigateTo({
              url: e.target.dataset.url,
          });
        }
      },
    },
});
