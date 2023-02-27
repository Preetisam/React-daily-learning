import React from "react";
import "./App.css";
//Lifecycle  componentDidUpdate
class App extends React.Component() {
  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      // name: "preeti",
      count: 0,
    };
  }
  //this will update the pervious and persent state

  componentDidUpdate(perProps, perState, snapShot) {
    //sanpashot gives us undefined when it is executed
    console.warn("ComponentDidUpdate", perState.count, this.state.count);
    // if (perState.count === this.state.count) {
    //   alert("data is already same");
    // }
    //infinte loop and send us the max depth achived
    //this.setState({ count: this.state.count + 1 });
    //instead we can make a condition for this to stop going it into infinite loop
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  render() {
    console.warn("render");

    return (
      <div className="App">
        <h1>Component Did Update{this.state.count}</h1>
        {/* <button
          onClick={() => {
            this.setState({ name: "Kamilla" });
          }}
        ></button> */}
        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Name
        </button> */}
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
export default App;

//can  we make conditions in render or update state in render method?
//no we should not update the state in the render method because it update automaically so when we want to update the state we should do it in the component
//can we stopt the component did mount method?
// yes we can stop the component didmount method to stop shouldComponentUpdate() return false
