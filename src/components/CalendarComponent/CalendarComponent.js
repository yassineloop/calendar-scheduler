import React from "react";
import * as dateFns from 'date-fns';
import './CalendarComponent.css';

import {getCurrentMonthAction, selectDateAction} from "../../redux/actions/calendarActions";

import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';
import {applyMiddleware as dispatch} from "redux";
import connect from "react-redux/es/connect/connect";

class CalendarComponent extends React.Component {

  onDateClick = day => {
    console.log(day);
    dispatch(selectDateAction(day));
  };

  nextMonth = () => {
    let nextMonth = dateFns.addMonths(this.props.currentMonth, 1);
    dispatch(getCurrentMonthAction(nextMonth));
  };

  prevMonth = () => {
    let prevMonth = dateFns.subMonths(this.props.currentMonth, 1);
    dispatch(getCurrentMonthAction(prevMonth));
  };

  render() {
    const { selectedDate, currentMonth } = this.props;

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
          onDateClick={this.onDateClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDate, currentMonth } = state;
  return { selectedDate, currentMonth };
};

const mapDispatchToProps = {
  selectDateAction,
  getCurrentMonthAction
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarComponent);


