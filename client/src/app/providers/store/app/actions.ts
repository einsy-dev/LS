import { createAction, props } from "@ngrx/store";

const toggleSidebar = createAction('[App] Toggle Sidebar');
const setHeader = createAction('[App] Set Header', props<{ header: string }>());

export { toggleSidebar, setHeader };