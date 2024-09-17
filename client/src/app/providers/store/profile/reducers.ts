import { createReducer, on } from '@ngrx/store';
import { Profile } from '../../../../entities/profile';
import { setProfile } from './actions';
import { Role } from '../../../../entities/interface';

const initialState = new Profile({ role: Role.GUEST });

const profileReducer = createReducer(
  initialState,
  on(setProfile, (_, { profile }) => new Profile(profile))
);

export { profileReducer };
