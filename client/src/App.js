import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Link, Route } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import Users from "./Users";

class App extends Component {
  logout() {
    axios
      .get(`http://localhost:5000/api/logout`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <BrowserRouter>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/users">Users</Link>
          <button onClick={this.logout}>Logout</button>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/users" component={Users} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
