Component({
  data: {
    isLoading: false,
    orderInfo: {},
    orderSteps: [
      {
        status: '',
        description: ''
      }
    ],
  },
  props: {
    order: {
      id: '',
      tracking: {},
      buyer: {},
      seller: {},
    }
  },

  methods: {
    onMoveTrackingDetail() {
      my.navigateTo({ url: 'pages/tracking-detail/index' });
    }
  },

  deriveDataFromProps(nextProps) {
    if (nextProps.order.id) {
      const { tracking } = nextProps.order;
      const steps = [
        {
          id: tracking.id,
          status: tracking.status,
          description: tracking.date
        }
      ];

      this.setData({
        orderSteps: steps
      })
    }
  },
})
