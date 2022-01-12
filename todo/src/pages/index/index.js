import { $page } from '@tiki.vn/redux-miniprogram-bindings';

import { getTodos, completeTodo } from '@/store/actions/todo';

$page({
  mapState: ['todo'],
  mapDispatch: (dispatch) => ({
    getTodos() {
      dispatch(getTodos());
    },
    completeTodo(data) {
      dispatch(completeTodo(data));
    },
  }),
})({
  onReady() {
    this.getTodos();
  },
  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    const todos = this.data.todo.todos.map((todo) => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.completeTodo(todos);
  },
  onAddTodo() {
    my.navigateTo({ url: 'pages/add-todo/index' });
  },
});
