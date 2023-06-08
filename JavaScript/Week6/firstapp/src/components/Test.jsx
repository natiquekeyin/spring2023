import React, { Component } from "react";
// extends means.. child of...
class Test extends Component {
  constructor() {
    super();
    this.state = { id: 1, text: "Something", day: "Some day" };
  }
  render() {
    return (
      <div>
        <h2>State data</h2>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default Test;
