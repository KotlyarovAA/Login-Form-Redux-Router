import './App.css';
import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Components/Login';
import Profile from './Components/Profile';


function App() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/> 
        <Route path="/profile" component={Profile}/>      
      </Switch>
    </Router>
  );
}

export default App;
