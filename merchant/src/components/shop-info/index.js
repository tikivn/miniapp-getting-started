Component({
  props: {
    className: '',
    isLoading: false,
    isFollowButtonLoading: false,
    shop: {
      name: '',
      logo: '',
    },
    follow: {
      following: {
        total_follower: 0,
      },
      is_followed: false,
    },
    onTapFollowButton: () => {},
  },

  methods: {
    async _onTapFollowButton() {
      this.props.onTapFollowButton();
    },
  },
});
