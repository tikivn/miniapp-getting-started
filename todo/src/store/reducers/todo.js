import { GET_TODOS, ADD_TODO, COMPLETE_TODO } from '../actionTypes';

const initState = {
  todos: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.data) };
    case COMPLETE_TODO:
      return { ...state, todos: action.data };
    default:
      return state;
  }
}
