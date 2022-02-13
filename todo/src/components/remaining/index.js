import { $component } from '@tiki.vn/redux-miniprogram-bindings';

$component({
  mapState: ['todo'],
})({
  data: {
    remainingTodo: 0,
  },
  didUpdate() {
    const todos = this.data.todo.todos;
    const remainingTodo = todos.reduce((total, item) => (total -= +item.completed), todos.length);
    this.setData({ remainingTodo });
  },
});
