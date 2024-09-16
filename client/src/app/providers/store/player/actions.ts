import { createAction, props } from '@ngrx/store';

const toggleAudio = createAction('[Player] Toggle Audio');
const setAudio = createAction(
  '[Player] Set Audio',
  props<{ audioSrc: string }>()
);

export { toggleAudio, setAudio };
