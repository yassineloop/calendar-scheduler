import React from "react";
import * as dateFns from 'date-fns';
import '../../../App.css';

import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';

class CalendarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date()
    };
  }




  onDateClick = day => {
    this.setState({
      selectedDate: day
    }, ()=> console.log(this.state.selectedDate));
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        <CalendarHeader
          currentMonth={this.state.currentMonth}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <CalendarWeekDays
          currentMonth={this.state.currentMonth}
        />

        <CalendarCells
          currentMonth={this.state.currentMonth}
          selectedDate={this.state.selectedDate}
          onDateClick={this.onDateClick}
        />
      </div>
    );
  }
}

export default CalendarComponent;
