import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Select from '@material-ui/core/Select';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';

import './SignupDialogue.css'
import SimpleSelect from '.././SharedComponents/SimpleSelect'


let cpin = 0;

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  let crole = localStorage.getItem('UserRole');
  const [bopen, setBopen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email_id,Setemailid] = React.useState({emailid : "" , FullName : "" ,
  UserName : "", Password : "" ,usertype:"", pin : cpin});
  const {emailid,FullName,UserName,Password,usertype,pin} = email_id;

  const createPin = () => {
    cpin = Math.floor(Math.random() * (9999-1000)) + 1000;
  }


  const handleChange = (e) => {
    Setemailid({
      ...email_id,
      [
        e.target.name
      ]:e.target.value

    })

    if(crole == "Admin"){
      createPin()
    }else{
      cpin = 0;
    }
  }

  const handleMain = (e) => {
    handleClick(e);
  }

  const handleClick = (e) => {
    e.preventDefault();

    const data = {FullName,UserName,emailid,Password,usertype,pin}

    axios.post('http://localhost:4000/app/signup',data)
      .then(response => console.log(response.data))

    console.log(crole);

    handleClose()
  } 

  const handalClose = () => {
    setBopen(false);
  };

  const handleOpen = () => {
    setBopen(true);
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
            onChange={handleChange}
            name="emailid"
            value= {emailid}
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="Your name"
            onChange={handleChange}
            name="FullName"
            value= {FullName}
            type="text"
            fullWidth
        />

        <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="Username"
            onChange={handleChange}
            name="UserName"
            value= {UserName}
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            onChange={handleChange}
            name="Password"
            value= {Password}
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

        <InputLabel id="demo-controlled-open-select-label">User Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={bopen}
          onClose={handalClose}
          onOpen={handleOpen}
          name="usertype"
          value={usertype}
          onChange={handleChange}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Participant"}>Participant</MenuItem>
        </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMain} onClose={handleClose} color="primary">
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
