import {
  ADD_REMINDER
} from "./actionTypes";

export function addReminderAction(reminder) {
  return {
    type: ADD_REMINDER,
    payload: reminder
  }
}
