import { createSelector } from '@ngrx/store';
import { AppStore } from './interface';

const selectHeader = createSelector(
  (state: AppStore) => state,
  (state: any) => state.app.header
);
export { selectHeader };
