import React from 'react';
import * as dateFns from "date-fns";
import { parseISO } from 'date-fns'



const CalendarWeekDays = (props) => {
  const dateFormat = "EEEE";
  const days = [];
  let startDate = dateFns.startOfWeek(props.currentMonth);
  
  console.log(props.currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col col-center" key={i}>
        { dateFns.format(dateFns.addDays(startDate, i), dateFormat) }
      </div>
    );
  }

  return <div className="days row">{days}</div>;
}


export default CalendarWeekDays;
