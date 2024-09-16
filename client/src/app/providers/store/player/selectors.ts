import { createSelector } from '@ngrx/store';

const selectPlayer = createSelector(
  (state: any) => state.player,
  (state: any) => state
);

const selectAudio = createSelector(selectPlayer, (app: any) => app.audio);
const selectAudioSrc = createSelector(selectPlayer, (app: any) => app.audioSrc);

export { selectAudio, selectAudioSrc };
