import React from 'react';
import './App.css';
import Sidebar from './features/Sidebar';
import {useSelector} from 'react-redux'
import DisplayInterface from './features/DisplayInterface';
import {selectUser} from "./features/userSlice"
import CreateRoom from './features/CreateRoom'
import Room from './features/Room'

import Header from './features/homepage/HomepageHeader';
import Home from './features/homepage/Home'

import SignupForm from './features/loginSignup/SignupForm';

import UserProfiles from './features/UserProfiles';


import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {

  const user = useSelector(selectUser);
  return (

    <BrowserRouter>

    <switch>
    <div className="App">
    {/* {user ? (
      <div>
        
      </div>
    ) : (
      <h2>You need to login </h2>
    )} */}

      <Sidebar />
      <DisplayInterface />

      {/* <SignupForm /> */}

      {/* <Header />
      <Home /> */}

    {/* <UserProfiles /> */}

    {/* <LoginForm /> */}    

    </div>
     

    </switch>

    

</BrowserRouter>

  );
}

export default App;
