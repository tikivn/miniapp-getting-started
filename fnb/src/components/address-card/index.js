Component({
  props: {
    weight: 'regular',
    status: 'LOADING',
    iconLeft: 'store',
    iconRight: '',
    title: '',
    subTitle: '',
    onSelect() {},
    onIconRightSelect() {},
  },
  data: {
    iconsList: {
      map: '/assets/map_icon.png',
      next: '/assets/next_icon.png',
      edit: '/assets/edit_icon.png',
      clock: '/assets/clock_icon.png',
      store: '/assets/store_icon.png',
      phone: '/assets/phone_icon.png',
      heart: '/assets/heart_icon.png',
      user_gray: '/assets/user_gray.png',
      clock_gray: '/assets/clock_gray.png',
      location: '/assets/location_icon.png',
      store_gray: '/assets/store_icon_gray.png',
      store_favorite: '/assets/store_favorite.png',
      location_blue: '/assets/location_icon_blue.png',
    },
  },
  onInit() {},
  didUpdate() {},
  methods: {
    onSelect(e) {
      this.props.onSelect(e);
    },
    onIconRightSelect() {
      this.props.onIconRightSelect(this.props);
    },
  },
});
