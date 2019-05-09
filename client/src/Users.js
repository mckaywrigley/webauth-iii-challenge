import React, { Component } from "react";
import axios from "axios";
import requiresAuth from "./requiresAuth";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/users`)
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.users.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <h2>Users</h2>
        {this.state.users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.username}</p>
              <p>{user.department}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default requiresAuth(Users);
