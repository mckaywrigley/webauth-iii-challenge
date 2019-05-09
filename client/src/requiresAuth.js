import React, { Component } from "react";
import axios from "axios";

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };
}
