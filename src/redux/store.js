import calendarReducer from './reducers/calendarReducer';

import { createStore } from "redux";
export const store = createStore(calendarReducer);

