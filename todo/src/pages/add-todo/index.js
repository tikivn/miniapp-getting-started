import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { addTodo } from '@/store/actions/todo';

$page({
  mapState: ['todo'],
  mapDispatch: (dispatch) => ({
    addTodo(data) {
      dispatch(addTodo(data));
    },
  }),
})({
  data: {
    inputValue: '',
  },
  onChange(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  onAddTodo() {
    this.addTodo({ text: this.data.inputValue, completed: false });
    my.navigateBack();
  },
});
