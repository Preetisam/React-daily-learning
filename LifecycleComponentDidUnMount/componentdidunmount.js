import React from "react";
import "./App.css";
import Student from "./Student";
// Component Did Unmount
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Child Component removed</h1>
        <Student />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}
export default App;
