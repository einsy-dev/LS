import { createReducer, on } from '@ngrx/store';
import { setHeader, toggleSidebar } from './actions';
import { AppState } from './interface';

const initialState: AppState = {
  sidebar: false,
  header: 'Test',
};

const appReducer = createReducer(
  initialState,
  on(toggleSidebar, (state) => ({ ...state, sidebar: !state.sidebar })),
  on(setHeader, (state, { header }) => ({ ...state, header }))
);

export { appReducer };
