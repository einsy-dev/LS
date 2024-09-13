import { createSelector } from '@ngrx/store';
import { AppState, AppStore } from './interface';

const selectApp = createSelector(
  (state: any) => state.app,
  (state: any) => state
);
const selectHeader = createSelector(selectApp, (app: any) => app.header);
const selectSidebar = createSelector(selectApp, (app: any) => app.sidebar);
export { selectHeader, selectSidebar };
