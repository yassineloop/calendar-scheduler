import {
  GET_CURRENT_MONTH,
  SELECT_DATE
} from "./actionTypes";


export function getCurrentMonthAction(date) {
  return {
    type: GET_CURRENT_MONTH,
    payload: date
  }
}

export function selectDateAction(date) {
  return {
    type: SELECT_DATE,
    payload: date
  }
}
