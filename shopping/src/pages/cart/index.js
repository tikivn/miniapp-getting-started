import makeGraphQLRequest from "../../services/index";
const app = getApp();

Page({
  data: {
    cart: app.cart,
  },
  onShow() {
    this.setData({ cart: app.cart });
  },
  async makeOrder(token) {
    const query = `mutation create_fake_order ($input: OrderFakeCreateInput) {
      create_fake_order (input: $input) {
        id
        status
        sub_total
        total
        grand_total
        shipping_address {
          name
          email
          street
          phone
        }
        billing_address {
          name
          email
          street
          phone
        }
        items {
          product_id
          sku
          price
          quantity
          sub_total
          name
        }
        created_at
        updated_at
      }
    }`;
    const variables = {
      input: {
        app_identifier: "tiki-miniapp-demo",
        item_name: "Test fake order",
        item_price: 5000,
        item_quantity: 10,
      },
    };
    return await makeGraphQLRequest({ query, variables }, token);
  },
  doPayment() {
    my.getAuthCode({
      scope: [],
      success: async (auth) => {
        try {
          const order = await this.makeOrder(auth.authCode);
          my.makePayment({
            orderId: order.data.create_fake_order.id,
            success: (res) => {
              my.alert({ title: "payment", content: res });
            },
          });
        } catch (e) {
          console.log(e);
          my.alert({ title: "Fail", content: e.errorMessage });
        }
      },
    });
  },
});
