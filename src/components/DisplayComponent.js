import React, { Component } from "react";
export default class DisplayComponent extends Component {
  render() {
    return <div>HERE{this.props.sayWhat}</div>;
  }
}
