import { navigateTo } from "../../../../helper";

Component({
  props: {
    status: "LOADING",
    banners: [1, 2, 3, 4],
  },
  methods: {
    onSelect() {
      navigateTo("web-view-page");
    },
  },
});
