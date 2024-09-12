import { ActionReducer, Action } from '@ngrx/store';
import { TodoState, todoReducer } from './reducers';

// interface for store, to store all states
export interface AppState {
  todo: TodoState;
}

// interface for store, to store all reducers
export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
}

// store, to store all reducers
export const appStore: AppStore = {
  todo: todoReducer,
};
