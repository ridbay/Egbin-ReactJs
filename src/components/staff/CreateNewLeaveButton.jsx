import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  selectField: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const CreateNewLeaveButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    fName: "",
    lName: "",
    email: "",
    acctType: "",
    password: "",
  });
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-01-31T21:11:54")
  );

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Request New Leave
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Request New Leave</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To request for a new leave, please enter the details before.
          </DialogContentText>
          <Select
            native
            value={state.acctType}
            className={classes.selectField}
            // labelWidth={20}
            onChange={handleChange("acctType")}
            inputProps={{
              name: "acctType",
              id: "acctType",
            }}
          >
            <option value="">Leave Type</option>
            <option value={"sick"}>Sick</option>
            <option value={"exam"}>Exam</option>
            <option value={"annual"}>Annual</option>
            <option value={"compassionate"}>Compassionate</option>
          </Select>
          
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
              <Grid item lg={12}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="block"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="leave_start"
                  label="Start Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="block"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="leave_end"
                  label="End Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="block"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="resumption"
                  label="Resumption Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => console.log(state)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CreateNewLeaveButton;
