import React from "react";
import "./App.css";

// Life cycle components Component Did Mount

class App extends React.Component() {
  constructor() {
    super();
    this.state = {
      name: "preeti",
    };
    // console.warn("constructor");
  }

  componentDidMount() {
    console.warn("componentDidount");
  }
  render() {
    console.warn("render");
    return (
      <div className="App">
        <h1>Component DidMount{this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "kamilla" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
export default App;
