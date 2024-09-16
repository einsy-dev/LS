import { createAction, props } from "@ngrx/store";

const setProfile = createAction('[Profile] Set Profile', props<{ profile: any }>());

export { setProfile }