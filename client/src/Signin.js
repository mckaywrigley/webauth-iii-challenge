import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: "",
      password: ""
    };
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: true
        });
      })
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <p>Logged in!</p>
        </div>
      );
    }
    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
