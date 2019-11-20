import React from "react";
import * as dateFns from 'date-fns';
import './CalendarComponent.css';
import connect from "react-redux/es/connect/connect";
import { store } from '../../redux/store';

import ReminderPopOverComponent from "../ReminderPopOverComponent/ReminderPopOverComponent";
import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';

import {
  closePopOverAction, closeReminderListAction,
  getCurrentMonthAction,
  openPopOverAction, openReminderListAction,
  selectDateAction,
  setAnchorElAction
} from "../../redux/actions/calendarActions";
import ReminderList from "../ReminderListComponent/reminder-list/ReminderList";
import ReminderListComponent from "../ReminderListComponent";

class CalendarComponent extends React.Component {

  onDateClick = day => {
    this.props.selectDate(day);
  };

  onClickPopOver = event => {
    this.props.setAnchorEl(event.currentTarget);
    this.props.openPopOver();
  }

  onClickReminderList = event => {
    console.log("REM");
    this.props.setAnchorEl(event.currentTarget);
    this.props.closePopOver();
    this.props.openReminderList();
  }


  nextMonth = () => {
    let nextMonth = dateFns.addMonths(this.props.currentMonth, 1);
    this.props.getCurrentMonth(nextMonth);
  };

  prevMonth = () => {
    let prevMonth = dateFns.subMonths(this.props.currentMonth, 1);
    this.props.getCurrentMonth(prevMonth);
  };

  render() {
    const { selectedDate, currentMonth, reminders } = this.props;
    console.log(reminders);

    return (
      <div className="calendar">
        <CalendarHeader
          currentMonth={currentMonth}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <CalendarWeekDays
          currentMonth={currentMonth}
        />

        <CalendarCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          reminders={reminders}
          onDateClick={this.onDateClick}
          onClickPopOver={this.onClickPopOver}
          onClickReminderList={this.onClickReminderList}
        />

        <ReminderPopOverComponent
          openPopOver={this.props.openedPopOver}
          closePopOver={this.props.closePopOver}
          anchorEl={this.props.anchorEl}
        />

        <ReminderListComponent
          openReminderList={this.props.openedReminderList}
          closePopOver={this.props.closeReminderList}
          anchorEl={this.props.anchorEl}
        />

        
      </div>
    );
  }
}



const mapStateToProps = state => {
  const {
    selectedDate,
    currentMonth,
    openedPopOver,
    openedReminderList,
    anchorEl
  } = state.calendar;

  const {
    reminders
  } = state.reminder;

  return {
    selectedDate: selectedDate,
    currentMonth: currentMonth,
    openedPopOver: openedPopOver,
    openedReminderList: openedReminderList,
    anchorEl: anchorEl,
    reminders: reminders
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDateAction(date)),
  getCurrentMonth: (date) => dispatch(getCurrentMonthAction(date)),
  openPopOver: () => dispatch(openPopOverAction()),
  closePopOver: () => dispatch(closePopOverAction()),
  openReminderList: () => dispatch(openReminderListAction()),
  closeReminderList: () => dispatch(closeReminderListAction()),
  setAnchorEl: (e) => dispatch(setAnchorElAction(e))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarComponent);


