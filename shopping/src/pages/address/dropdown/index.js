import { debounce } from "../../../utils/debounce";
import { compareNormalize } from "../../../utils/search";

Component({
  props: {
    label: "",
    placeholder: "Chọn tại đây",
    disabled: false,
    items: [],
    selectedItem: null,
    bottomSheetTitle: "Chọn địa chỉ",
    onSelect: () => {},
  },
  data: {
    searchItems: [],
    searchText: "",
    showBottomSheet: false,
  },
  didUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.onSearch(this.data.searchText);
    }
  },
  didMount() {
    this.setData({ searchItems: this.props.items });
    this.onSearch = debounce(this.onSearch.bind(this), 200);
  },
  methods: {
    showBottomSheet() {
      this.setData({ showBottomSheet: true });
    },
    hideBottomSheet() {
      this.setData({ showBottomSheet: false, searchText: "" });
    },
    onSearch(value) {
      const { items } = this.props;
      const searched = items.filter((i) => compareNormalize(i.name, value));

      this.setData({ searchItems: searched });
    },
    onChangeSearchText(event) {
      const { value } = event.detail;

      this.setData(value);
      this.onSearch(value);
    },
    onSelect(event) {
      const item = event.target.dataset.item;
      if (!this.props.selectedItem || item.id !== this.props.selectedItem.id) {
        this.props.onSelect(item);
      }
      this.hideBottomSheet();
    },
  },
});
