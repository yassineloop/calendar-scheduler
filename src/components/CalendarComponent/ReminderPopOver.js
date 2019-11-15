import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { store } from '../../redux/store';
import connect from "react-redux/es/connect/connect";

import {
  closePopOverAction
} from "../../redux/actions/calendarActions";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const ReminderPopOver = () => {
  const classes = useStyles();

  const opened = this.props.openedPopOver;
  const id = opened ? 'simple-popover' : undefined;

  const handleClose = () => {
    this.props.closePopOver()
  }

  return (

    <div>
      <Popover
        id={id}
        open={opened}
        anchorEl={store.getState().anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

ReminderPopOver.propTypes = {
  onClosePopOver: PropTypes.func.isRequired
}


const mapStateToProps = state => {
  const { openedPopOver } = state;
  return { openedPopOver };
};
const mapDispatchToProps = (dispatch) => ({
  closePopOver: () => dispatch(closePopOverAction()),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderPopOver);

