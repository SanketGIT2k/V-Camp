import  React, {useEffect} from 'react';
import './App.css';
import Sidebar from './features/Sidebar';
import {useDispatch , useSelector} from 'react-redux'
import DisplayInterface from './features/DisplayInterface';
import {selectUser} from "./features/userSlice"
import CreateRoom from './features/CreateRoom'
import Room from './features/Room'

import Header from './features/homepage/HomepageHeader';
import Home from './features/homepage/Home'


import UserProfiles from './features/UserProfiles';


import {BrowserRouter, Route, Switch} from "react-router-dom"
import { auth } from './Firebase/firebase';
import {login, logout} from './features/userSlice'


function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser){
        dispatch(login({
          uid:authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else{
          dispatch(logout())
      }
    })
  },[dispatch])

  return (

    <BrowserRouter>

    <switch>
    <div className="App">
    {user ? (
      <div className="App">
        <Sidebar />
        <DisplayInterface />
      </div>
    ) : (
      <div>
        <Header />
        <Home />
      </div>
    )}

    </div>
     
    </switch>

</BrowserRouter>

  );
}

export default App;
