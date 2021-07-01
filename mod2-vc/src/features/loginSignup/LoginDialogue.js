import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {useState,useEffect} from 'react';
import {auth, provider} from "../../Firebase/firebase";

import './LoginDialogue.css'
import SimpleSelect from '.././SharedComponents/SimpleSelect'

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

  const signIn = () => {
      auth.signInWithPopup(provider)
      .catch((error) => alert(error.message));
  }


  const [email_id,Setemailid] = React.useState({emailid : "" ,  Password : "" ,usertype:""});
  const {emailid,Password,usertype} = email_id;
  const [channels, setChannels] = useState([])


  const handleChange = (e) => {
    Setemailid({
      ...email_id,
      [
        e.target.name
      ]:e.target.value

    })
  }

  const handleMain = (e) => {
    handleClick(e);
  }

//   useEffect(() =>{
//     async function fetchData(){
//     const req = await axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`);


//     // console.log("particular data- ",req.data)
//     setChannels(req.data);


// }
// fetchData();
//         },[])

//   const  getChannels = () => {
//     const something = axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`).then(result => result.data)
//     setChannels(something)
//     console.log(channels)

// }




  const handleClick = (e) => {
    e.preventDefault();
    let a = true;
    

    const data = {emailid,Password,usertype}

    // const something = axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`)
    // getChannels();

    async function fetchData(){
      const req = await axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`);
      // req = await axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`);
      // setTimeout(function(){
      //   setChannels(req.data);
      //   console.log(channels[0])
      // }, 15000);  
      
      
        setChannels(req.data);
        console.log(channels[0])
  
      
      
  
      // console.log("particular data- ",req.data)
      
  
  
  }
  fetchData();

  // hendleClick(e);
      

    // console.log(something);
    // console.log(channels[0])
    // console.log(emailid,usertype)
  
  // if(a){
  //   handleClick();
  //   a = false;
  // }
  
    
  } 

  const hendleClick = (e) => {
    e.preventDefault();
    let a = true;
    

    const data = {emailid,Password,usertype}

    // const something = axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`)
    // getChannels();

    async function fetchData(){
      const req = await axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`);
      // req = await axios.get(`http://localhost:4000/app/signup?email=${emailid}&&password=${Password}&&usertype=${usertype}`);
      // setTimeout(function(){
      //   setChannels(req.data);
      //   console.log(channels[0])
      // }, 15000);  
      
      
        setChannels(req.data);
        console.log(channels[0])
  
      
      
  
      // console.log("particular data- ",req.data)
      
  
  
  }
  fetchData();
      
  }

  const handalClose = () => {
    setBopen(false);
  };

  const handleOpen = () => {
    setBopen(true);
  };

  return (
    <div>
      <div className='buttons_css' onClick={handleClickOpen}>
        Login
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your login details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            name="emailid"
            value={emailid}
            onChange={handleChange}
            type="email"
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            name="Password"
            value={Password}
            onChange={handleChange}
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
        <Button onClick={signIn} color="primary">
            Google
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}