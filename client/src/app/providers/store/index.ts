import { AppStore } from './interface';
import { appReducer } from './app';
import { playerReducer } from './player';
import { profileReducer } from './profile';

const appStore: AppStore = {
  app: appReducer,
  player: playerReducer,
};

export { appStore, type AppStore };
