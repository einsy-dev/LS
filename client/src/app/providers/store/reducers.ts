import { createReducer, on } from '@ngrx/store';
import { AppState } from './interface';
import { toggleSidebar, setHeader } from './actions';

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
