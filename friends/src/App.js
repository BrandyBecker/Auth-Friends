import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </>
        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
