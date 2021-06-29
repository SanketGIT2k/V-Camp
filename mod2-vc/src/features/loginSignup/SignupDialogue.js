import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './SignupDialogue.css'
import SimpleSelect from '.././SharedComponents/SimpleSelect'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='buttons_signup_css' onClick={handleClickOpen}>
        SignUp
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">SignUp</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the details to continue.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="emailAdd"
            label="Email Address"
            type="email"
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="Your name"
            type="text"
            fullWidth
        />

        <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="Username"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
          />

          <SimpleSelect />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
