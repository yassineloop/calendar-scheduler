import {
  GET_CURRENT_MONTH,
  OPEN_POP_OVER,
  CLOSE_POP_OVER,
  SET_ANCHOR_EL,
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

export function openPopOverAction() {
  return {
    type: OPEN_POP_OVER,
    payload: true
  }
}

export function closePopOverAction() {
  return {
    type: CLOSE_POP_OVER,
    payload: false
  }
}

export function setAnchorElAction(el) {
  return {
    type: SET_ANCHOR_EL,
    payload: el
  }
}
