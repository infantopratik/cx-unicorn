import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const { idea, index, handleUpVote, handleDownVote } = this.props;
    return (
      <li>
        <span>{idea.name}</span> - <span>{idea.votes > 0 ? "votes" : "vote"}: {idea.votes}</span>{" "}
        <button onClick={() => handleUpVote(index)}>+</button>{" "}
        <button onClick={() => handleDownVote(index)}>-</button>
      </li>
    );
  }
}
