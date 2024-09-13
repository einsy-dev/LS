export { toggleSidebar, setHeader } from './actions';

import { appReducer } from './reducers';
import { AppStore } from './interface';

const appStore: AppStore = {
  app: appReducer,
};

export { appStore };
