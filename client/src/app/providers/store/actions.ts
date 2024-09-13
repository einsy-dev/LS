import { createAction, props } from '@ngrx/store';

const setSidebar = createAction(
  '[Sidebar] Set Sidebar',
  props<{ sidebar: boolean }>()
);
const setHeader = createAction(
  '[Header] Set Header',
  props<{ header: string }>()
);

export { setSidebar, setHeader };
