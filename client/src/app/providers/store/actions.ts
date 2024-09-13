import { createAction, props } from '@ngrx/store';

const setSidebar = createAction(
  '[App] Set Sidebar',
  props<{ sidebar: boolean }>()
);
const setHeader = createAction('[App] Set Header', props<{ header: string }>());

export { setSidebar, setHeader };
