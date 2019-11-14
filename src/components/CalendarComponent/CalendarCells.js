import React from "react";
import * as dateFns from "date-fns";

const CalendarCells = (props) => {
  const { currentMonth, selectedDate, onDateClick } = props;

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
          onClick={() => onDateClick(dateFns.toDate(cloneDay))}
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


export default CalendarCells;
