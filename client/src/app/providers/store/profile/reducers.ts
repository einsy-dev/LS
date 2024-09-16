import { createReducer, on } from '@ngrx/store';
import { Profile } from '../../../../entities/profile';
import { setProfile } from './actions';

const initialState = new Profile({});

const profileReducer = createReducer(
  initialState,
  on(setProfile, (state, { profile }) => new Profile(profile))
);

export { profileReducer };
