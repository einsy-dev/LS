import { createReducer, on } from '@ngrx/store';
import { AppState } from './interface';
import { toggleSidebar, setHeader, toggleAudio } from './actions';

const initialState: AppState = {
  sidebar: false,
  header: 'Test',
  audio: false,
};

const appReducer = createReducer(
  initialState,
  on(toggleSidebar, (state) => ({ ...state, sidebar: !state.sidebar })),
  on(setHeader, (state, { header }) => ({ ...state, header })),
  on(toggleAudio, (state) => ({ ...state, audio: !state.audio }))
);

export { appReducer };
