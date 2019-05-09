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
        <Link to="/signup" component={Signup} />
        <Link to="/signin" component={Signin} />
        <Link to="/users" component={Users} />
        <Route exact path="/signup" />
        <Route exact path="/signin" />
        <Route exact path="/users" />
      </BrowserRouter>
    </div>
  );
}

export default App;
