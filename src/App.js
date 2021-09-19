import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import NavBar from "./NavBar/NavBar"
import Fetchv from './Practice/Fetch';
import VideoApp from './NavBar/Video';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/SignUp" exact component = {SignUp} />
      <Route path="/Welcome" exact component = {Welcome} />
      <Route path="/NavBar" exact component= {NavBar} />
      <Route path="/Fetch" exact component={Fetchv}></Route>
      <Route path="/Video" exact component={VideoApp} />
    </Switch>
    </>
  );
}

export default App;
