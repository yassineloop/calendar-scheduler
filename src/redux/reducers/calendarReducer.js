
import {
  GET_CURRENT_MONTH,
  OPEN_POP_OVER,
  CLOSE_POP_OVER,
  SELECT_DATE,
  SET_ANCHOR_EL
} from "../actions/actionTypes";

let initialState = {
  selectedDate: new Date(),
  currentMonth: new Date(),
  openedPopOver: false,
  anchorEl: null
};


const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return Object.assign({}, state, { selectedDate: action.payload });
    case GET_CURRENT_MONTH:
      return  Object.assign({}, state, { currentMonth: action.payload });
    case OPEN_POP_OVER:
      return Object.assign({}, state, { openedPopOver: action.payload });
    case CLOSE_POP_OVER:
      return Object.assign({}, state, { openedPopOver: action.payload });
    case SET_ANCHOR_EL:
      return Object.assign({}, state, { anchorEl: action.payload });
    default:
      return state;
  }
};

export default calendarReducer;
