import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      department: ""
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
    axios
      .post(`http://localhost:5000/api/register`, this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: "",
      department: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
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
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            placeholder="department"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
