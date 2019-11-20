import React, { Component } from 'react';
import Popover from "@material-ui/core/Popover";
import { withStyles } from '@material-ui/styles';

import Typography from "@material-ui/core/Typography";
import * as dateFns from "date-fns";
import {MonthDayYearFormat} from "../../utils/date-formats";
import {closePopOverAction, closeReminderListAction, selectDateAction} from "../../redux/actions/calendarActions";
import {addReminderAction} from "../../redux/actions/reminderActions";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import ReminderList from "./reminder-list/ReminderList";

const styles =  ({
  typography: {
    padding: "10px",
  },
});


class ReminderListComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose= () => {
    this.props.closeReminderList();
  }

  render() {
    const { classes,
      openedReminderList,
      anchorEl,
      selectedDate,
    } = this.props;

    const id = openedReminderList ? 'simple-popover' : undefined;

    return (
      <div>
        <Popover
          id={id}
          open={openedReminderList}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            Add Reminder for
            <br/><b>{dateFns.format(selectedDate, MonthDayYearFormat)}</b>
          </Typography>

          <ReminderList/>

        </Popover>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const {
    selectedDate,
    currentMonth,
    openedReminderList,
    anchorEl,
  } = state.calendar;



  return {
    selectedDate: selectedDate,
    currentMonth: currentMonth,
    openedReminderList: openedReminderList,
    anchorEl: anchorEl,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDateAction(date)),
  closeReminderList: () => dispatch(closeReminderListAction()),
  addReminder: (reminder) => dispatch(addReminderAction(reminder))
});



ReminderListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReminderListComponent));



