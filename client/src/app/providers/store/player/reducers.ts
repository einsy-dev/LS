import { createReducer, on } from '@ngrx/store';
import { toggleAudio, setAudio } from './actions';
import { PlayerState } from './interface';

const initialState: PlayerState = {
  audioSrc: '',
  audio: false,
};

const playerReducer = createReducer(
  initialState,
  on(toggleAudio, (state) => ({ ...state, audio: !state.audio })),
  on(setAudio, (state, { audioSrc }) => ({ ...state, audioSrc }))
);

export { playerReducer };
