import { createReducer, on } from '@ngrx/store';
import { AppState } from './interface';
import { setSidebar, setHeader } from './actions';

const initialState: AppState = {
  sidebar: false,
  header: 'Test',
};

const appReducer = createReducer(
  initialState,
  on(setSidebar, (state, { sidebar }) => ({ ...state, sidebar })),
  on(setHeader, (state, { header }) => ({ ...state, header }))
);

export { appReducer };
