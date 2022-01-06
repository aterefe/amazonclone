import React from 'react'
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <Router>  
      <div className="app">
            <Switch>
              <Route path="/checkout">
                <h1>I am a checkout page!</h1>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}


export default App;
