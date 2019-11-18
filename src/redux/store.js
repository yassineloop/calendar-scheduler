import rootReducer from './reducers/rootReducer';
//import calendarReducer from './reducers/calendarReducer';


import { createStore } from "redux";
export const store = createStore(rootReducer);

