import { createSelector } from '@ngrx/store';

const selectProfile = createSelector(
  (state: any) => state.profile,
  (state: any) => state
);

export { selectProfile };
