import { getTrackingDetail } from '../../services/index';

Page({
  data: {
    isLoading: true,
    trackingSteps: [],
  },

  async loadData() {
    this.setData({
      isLoading: true,
    });

    try {
      const trackingSteps = await getTrackingDetail();

      this.setData({
        trackingSteps,
        isLoading: false,
      });
    } catch (error) {
      this.setData({
        isLoading: false,
      });
    }
  },

  // Life cycle
  onReady() {
    this.loadData();
  },
});
