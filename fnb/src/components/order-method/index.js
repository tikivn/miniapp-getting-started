import { navigateTo } from '../../helper';

Component({
  props: {
    image: '',
    title: '',
    subTitle: '',
    status: 'LOADING',
    code: '',
  },
  methods: {
    onSelect() {
      if (this.props.code) navigateTo('delivery', { method: this.props.code });
    },
  },
});
