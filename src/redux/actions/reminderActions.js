import {
  ADD_REMINDER
} from "./actionTypes";

export function addReminderAction(reminder) {
  console.log(reminder);
  return {
    type: ADD_REMINDER,
    payload: reminder
  }
}

export function checkDate(reminder) {
  console.log(reminder.date);
}
