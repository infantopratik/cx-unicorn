import react from "react";
import Counter from "./Components/Counter";
import "./App.css";

class IdeationApp extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "ModernOffice",
          votes: 0,
        },
        {
          name: "Offsite",
          votes: 0,
        },
      ],
    };
  }

  handleUpVote = (index) => {
    const { data } = this.state;
    data[index].votes = data[index].votes + 1;
    this.setState({
      data,
    });
  };

  handleDownVote = (index) => {
    const { data } = this.state;
    data[index].votes = data[index].votes - 1;
    this.setState({
      data,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.map((item, index) => (
            <Counter
              key={index}
              item={item}
              index={index}
              handleUpVote={this.handleUpVote}
              handleDownVote={this.handleDownVote}
            ></Counter>
          ))}
        </ul>
      </div>
    );
  }
}

export default IdeationApp;
