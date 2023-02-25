import React, { Component } from "react";
import "./App.css";
//line no 3&4
//state define ? create a constructor and write super is js finctionlity
//we use to call parent function
class App extends Component {
  //line no7 comment
  //if we comment the super we will reference error :Must call super constructor in dervied class before accesing "this" or returning for x dervied constructor
  constructor() {
    //line no 9
    // data: "preeti",
    super();
    // line no 12 and 13
    // alert("apple");
    // this.setState=({ date: "elena" });
    //line no 15-to 17
    //if we paste line number 5 in 12
    // Error: `super()` is only valid inside a class constructor of a subclass.
    // Maybe a typo in the method name('constructor') or not extending another class?
    this.state = {
      data: 1,
    };
  }
  apple() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div className="App">
        {/* state is the acts the container to store the element.
        state is used to rerender the coponet and update the new data  */}

        <h1>{this.state.data}</h1>
        {/* <h1>Class component</h1> */}

        {/* if we do not use arrow function it will automatically alter when we refersh the page */}

        <button onClick={() => this.apple()}>update</button>
        {/* line number 20 comment */}
        {/* when u create fuction in the component we use arrow function to create it this.function name */}
      </div>
    );
  }
}
export default App;

// this belongs to line no 25,26
