import { navigateTo } from "../../../../helper";

Component({
  props: {
    status: "LOADING",
    campaign: {},
  },
  methods: {
    handleSelect() {
      navigateTo("web-view-page");
    },
  },
});
