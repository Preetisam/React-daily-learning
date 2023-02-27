import React from "react";
import "./App.css";
//Should ComponentUpdate
//it is mainly used when the state and Props are get updated
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //this bock the render method itself
  //return true when we do the it updates the render
  //this is used whe the render is update or not the render with the condition by default it is false
  //when the return is true it update the render .this is used to increase the speed of application
  shouldComponentUpdate() {
    console.warn("Should Compoenet Update", this.state.count);
    // return true;
    // return false; this is by default
    if (this.state.count < 5 && this.state.count < 10) {
      return true;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Should Component Update {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Counter
        </button>
      </div>
    );
  }
}
export default App;
