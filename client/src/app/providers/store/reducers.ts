import { createReducer, on } from '@ngrx/store';
import { AppState } from './interface';
import { setSidebar, setHeader } from './actions';

const initialState: AppState = {
  sidebar: false,
  header: '',
};

const appReducer = createReducer(
  initialState,

  on(setSidebar, (state, { sidebar }) => ({
    ...state,
    app: { ...state, sidebar },
  })),

  on(setHeader, (state, { header }) => ({
    ...state,
    app: { ...state, header },
  }))
);

export { appReducer };
