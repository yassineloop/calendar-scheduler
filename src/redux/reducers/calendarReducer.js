import {GET_CURRENT_MONTH, SELECT_DATE} from "../actions/actionTypes";

let initialState = {
  selectedDate: new Date(),
  currentMonth: new Date(),
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return Object.assign({}, state, { selectedDate: action.payload });
    case GET_CURRENT_MONTH:
      return  Object.assign({}, state, { currentMonth: action.payload });
    default:
      return state;
  }
};

export default calendarReducer;
