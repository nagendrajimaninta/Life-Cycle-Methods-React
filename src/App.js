import "./styles.css";
import React from "react";
class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nagendra",
      count: 0,
      color: "red"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: (this.state.name = "Maruthi") });
    }, 5000);
  }
  addClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  clcikColor = () => {
    this.setState({
      color:
        this.state.color != "red"
          ? (this.state.color = "green")
          : (this.state.color = "red")
    });
  };
  render() {
    return (
      <>
        <h1 onClick={this.clcikColor}>Click</h1>
        <h1>My Favorite Color is : {this.state.color}</h1>
        <h4> Count is : {this.state.count}</h4>
        <button onClick={this.addClick}>Inc Count</button>
        <h1>
          Name is : {this.state.name} & Age is :{this.props.age}
        </h1>
        <h2>In constructor : We have props & state</h2>
      </>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <Class age="25" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
