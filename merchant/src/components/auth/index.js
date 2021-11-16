import { getAuth } from '../../utils/auth';

Component({
  props: {
    className: '',
    isLoginRequired: false,
    fallbackAction: () => {},
  },

  // Life cycle
  onInit() {
    getAuth({
      isLoginRequired: this.props.isLoginRequired,
      fallbackAction: this.props.fallbackAction,
    });
  },
});
