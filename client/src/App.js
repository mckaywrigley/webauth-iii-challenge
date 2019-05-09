import React from "react";
import "./App.css";

import { BrowserRouter, Link, Route } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <BrowserRouter>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/users" component={Users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
