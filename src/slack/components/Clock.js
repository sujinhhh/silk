import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }
  componentWillMount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
