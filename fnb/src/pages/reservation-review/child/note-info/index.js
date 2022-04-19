Component({
  props: {
    area: '',
    areaList: [],
    childrenNumber: 0,
    elderlyPeopleNumber: 0,
    onNumberPeopleChange() {},
    onShowPadding() {},
    onHidePadding() {},
    onAreaSelect() {},
    onNoteInput() {},
  },
  methods: {
    _onShowPadding() {
      this.props.onHidePadding();
    },
    _onShowPadding() {
      this.props.onShowPadding();
    },
    _onChangeElderlyPeopleNumber(v) {
      this.props.onNumberPeopleChange('elderlyPeopleNumber', v);
    },
    _onChangeChildrenNumber(v) {
      this.props.onNumberPeopleChange('childrenNumber', v);
    },
    _onAreaSelect(e) {
      this.props.onAreaSelect(e);
    },
    _onNoteInput(e) {
      this.props.onNoteInput(e);
    },
  },
});
