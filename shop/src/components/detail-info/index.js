Component({
  props: {
    viewMore: false,
    detail: {
      madeIn: '',
      size: '',
      color: '',
      material: '',
      image: '',
      shortDescription: '',
      longDescription: '',
    },
  },
  methods: {
    _onSwitchView(){
      this.setData({
        viewMore: !this.data.viewMore
      })
    }
  }
})
