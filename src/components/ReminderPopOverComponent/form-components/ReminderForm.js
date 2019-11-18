import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  datePickers: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 150,
  },
  button: {
    marginTop: theme.spacing(2)
  }

}));

function ReminderForm() {
  const classes = useStyles();

  const [reminder, setReminderText] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());

  const handleTextChange = text => {
    setReminderText(text);
    console.log(this.state);
  }

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(this.state);
  };

  const handleTimeChange = time => {
    setSelectedTime(time);
    console.log(this.state);
  }

  const submitReminder = () => {
    console.log(this.state);
    console.log(reminder);
  }


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className="row">
        <TextField
          id="standard-basic"
          className={classes.textField}
          margin="normal"
          onChange={handleTextChange}
        />
      </div>
      <div className="row">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="col-md-6">
            <KeyboardDatePicker
              className={classes.datePickers}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
          <br/>
          <div className="col-md-6">
          <KeyboardTimePicker
              className={classes.datePickers}
              id="time-picker"
              label="Time picker"
              value={selectedTime}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
      <div className="row">
        <Button
          color="primary"
          className={classes.button}
          onClick={submitReminder}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default ReminderForm;
