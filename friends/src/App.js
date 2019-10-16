import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <div className="loginCSS">
            <Link to="/login" className="loginLink">Login</Link>
          </div>
        </>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friendlist' component={FriendList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
