import { navigateTo } from "../../helper";

Component({
  props: {
    status: "LOADING",
  },
  data: {
    orderMethods: [
      {
        code: "STORE_PICKUP",
        title: "Store pickup",
        subTitle: "Best quality",
        image: "/assets/deliver_1.png",
      },
      {
        code: "DELIVERY",
        title: "Delivery",
        subTItle: "Always on time",
        image: "/assets/deliver_2.png",
      },
    ],
  },
  methods: {
    onReservationSelect() {
      navigateTo("online-reservation");
    },
    onReservationsListSelect() {
      navigateTo("reservations");
    },
    onLeftButtonClick() {
      navigateTo("reservations");
    },
  },
});
