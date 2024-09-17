import { createAction, props } from "@ngrx/store";
import { ProfileI } from "../../../../entities/profile/interface";

const setProfile = createAction('[Profile] Set Profile', props<{ profile: ProfileI }>());

export { setProfile }