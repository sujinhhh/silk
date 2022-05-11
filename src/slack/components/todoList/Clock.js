import React, { Component } from "react";
import styled from "styled-components";

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
        <h1>
          {this.state.date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h1>
      </div>
    );
  }
}
