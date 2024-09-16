import { Action, ActionReducer } from '@ngrx/store';

// interface for store app
interface AppState {
  sidebar: boolean;
  header: string;
  audio: boolean;
}
// interface for store, to store all reducers
interface AppStore {
  app: ActionReducer<AppState, Action>;
}

export type { AppState, AppStore };
