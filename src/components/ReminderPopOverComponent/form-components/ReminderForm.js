import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { store } from '../../../redux/store';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';
import FormControl from "@material-ui/core/FormControl";
import {getPrettyTime} from "../../../utils/date-functions";

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

const ReminderForm = (props) => {
  const classes = useStyles();

  const [reminderText, setReminderText] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState(new Date());

  const handleTextChange = event => {
    let text = event.target.value;
    setReminderText(text);
  }

  const handleTimeChange = date => {
    setSelectedTime(date);
    console.log(date);
    getPrettyTime(date);
  }

  const submitReminder = (e) => {
    e.preventDefault();

    let reminder = {
      date: props.selectedDate,
      text: reminderText,
      time: selectedTime
    };

    props.addReminder(reminder);
    props.closePopOver();
    console.log(reminder);
  }

  return (
    <form onSubmit={submitReminder} className={classes.container} noValidate autoComplete="off">
      <FormControl required={true}>
        <div className="row">
          <TextField
            required
            type="text"
            id="standard-basic"
            className={classes.textField}
            margin="normal"
            onChange={handleTextChange}
          />
        </div>
        <div className="row">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
            type="submit"
            color="primary"
            className={classes.button}
          >
            Add
          </Button>
        </div>
      </FormControl>
    </form>
  );
}

export default ReminderForm;
