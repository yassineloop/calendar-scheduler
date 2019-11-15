import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { store } from '../../redux/store';
import ReminderForm from "./form-components/ReminderForm";

const styles =  ({
  typography: {
    padding: "20px",
  },
});



class ReminderPopOverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose= () => {
    this.props.closePopOver();
  }


  render() {
    const { classes, openPopOver } = this.props;
    const id = openPopOver ? 'simple-popover' : undefined;

    return (
      <div>
        <Popover
          id={id}
          open={openPopOver}
          anchorEl={store.getState().anchorEl}
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
            Reminder
          </Typography>
          <ReminderForm className={classes.typography}/>
        </Popover>
      </div>
    );
  }
}

ReminderPopOverComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReminderPopOverComponent);

