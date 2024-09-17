import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from './app/interface';
import { PlayerState } from './player/interface';
import { Profile } from '../../../entities/profile';

interface AppStore {
  app: ActionReducer<AppState, Action>;
  player: ActionReducer<PlayerState, Action>;
  profile: ActionReducer<Profile, Action>;
}

export type { AppStore };
