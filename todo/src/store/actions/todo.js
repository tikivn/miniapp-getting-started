import { getTodosApi } from '@/apis';
import { GET_TODOS, COMPLETE_TODO, ADD_TODO } from '../actionTypes';

export const getTodos = () => async (dispatch) => {
  const data = await getTodosApi();

  dispatch({
    type: GET_TODOS,
    data,
  });
};

export const completeTodo = (data) => ({
  type: COMPLETE_TODO,
  data,
});

export const addTodo = (data) => ({
  type: ADD_TODO,
  data,
});
