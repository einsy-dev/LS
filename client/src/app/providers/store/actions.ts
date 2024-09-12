import { createAction, props } from '@ngrx/store';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const loadTodos = createAction('[Todo] Load Todos');
const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);
const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);
const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
const updateTodo = createAction('[Todo] Update Todo', props<{ todo: Todo }>());
const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: string }>());

const getTodo = createAction('[Todo] Get Todo', props<{ id: string }>());

export {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
  addTodo,
  updateTodo,
  deleteTodo,
};
