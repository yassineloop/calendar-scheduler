import React from "react";
import * as dateFns from 'date-fns';
import '../../../App.css';

import CalendarHeader from './CalendarHeader';

class CalendarComponent extends React.Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };


  renderCells() {
    const { currentMonth, selectedDate } = this.state;

    //taking month's boundaries
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);

    //taking begin and end of a Week - it can be starting from previous month
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);

        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${
              //disable/selected/nothing ternary operation
              !dateFns.isSameMonth(day, monthStart) ? "disabled" : (dateFns.isSameDay(day, selectedDate) ? "selected" : "") }`
            }
            key={day}
            onClick={() => this.onDateClick(dateFns.toDate(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );

        //next day...
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
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
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default CalendarComponent;
