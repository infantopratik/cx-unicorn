import react from "react";
import Counter from "./Components/Counter";
import "./App.css";

class IdeationApp extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
    const { products } = this.state;
    products[index].votes = products[index].votes + 1;
    this.setState({
      products,
    });
  };

  handleDownVote = (index) => {
    const { products } = this.state;
    products[index].votes = products[index].votes - 1;
    this.setState({
      products,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <ul>
          {products.map((idea, index) => (
            <Counter
              key={index}
              idea={idea}
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
