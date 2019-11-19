import {
  ADD_REMINDER
} from "../actions/actionTypes";

let initialState = {
  reminders: []
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return Object.assign({}, state, { reminders: [...state.reminders, action.payload] });
    default:
      return state;
  }
};

export default reminderReducer;
