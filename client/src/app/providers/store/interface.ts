import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from './app/interface';
import { PlayerState } from './player/interface';

interface AppStore {
  app: ActionReducer<AppState, Action>;
  player: ActionReducer<PlayerState, Action>;
}

export type { AppStore };
