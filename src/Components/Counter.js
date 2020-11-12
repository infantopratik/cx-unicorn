import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { item, index, handleUpVote, handleDownVote } = this.props;
    return (
      <li>
        <span>{item.name}</span> - <span>vote(s): {item.votes}</span>{" "}
        <button onClick={() => handleUpVote(index)}>+</button>{" "}
        <button onClick={() => handleDownVote(index)}>-</button>
      </li>
    );
  }
}