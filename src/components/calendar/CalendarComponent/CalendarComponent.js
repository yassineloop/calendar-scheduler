import React, { Component } from 'react';
import moment from 'moment';



let weekdayshort = moment.weekdaysShort();


let weekdayshortname = weekdayshort.map(day => {
  return (
    <th key={day} className="week-day">
      {day}
    </th>
  );
});
class CalendarComponent extends Component {



  render() {
    return <div>{ weekdayshortname }</div>;
  }
}

export default CalendarComponent;
