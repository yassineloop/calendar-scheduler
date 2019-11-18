import {
  ADD_REMINDER
} from "../actions/actionTypes";

let initialState = {
  newReminder: null,
  reminders: {}
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return Object.assign({}, state, { newReminder: action.payload });
    default:
      return state;
  }
};

export default reminderReducer;
