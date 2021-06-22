import React from 'react';
import './App.css';
import Sidebar from './features/Sidebar';
import {useSelector} from 'react-redux'
import DisplayInterface from './features/DisplayInterface';
import {selectUser} from "./features/userSlice"
import CreateRoom from './features/CreateRoom'
import Room from './features/Room'

import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {

  const user = useSelector(selectUser);
  return (
    <div className="App">
    {/* {user ? (
      <div>
        
      </div>
    ) : (
      <h2>You need to login </h2>
    )} */}

    {/* <Sidebar />
    <DisplayInterface /> */}

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateRoom}/>
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </BrowserRouter>

      
     
    </div>
  );
}

export default App;
