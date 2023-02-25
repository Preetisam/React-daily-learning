import React from "react";
// import React, { useState } from "react";
import "./App.css";
import Classmet from "./Classmet";
//Props with class Component
// function App() {

//   return (
//     <div className="App">
//       <h1>Props !</h1>
//       <Classmet name="preeti" email="sam@test.com"></Classmet>
//       <Classmet name="grace" email="grace@test.com"></Classmet>
//       <button>Update Name</button>
//     </div>
//   );
// }
// export default App;

//can i change the props in the place we recive it
//we can change the props when we send in the parent component.

//we can cant change in the child componet where we are using it either in functional component  or class component

class App extends React.Component {
  //to define the state we use constructor to define inside it
  constructor() {
    super();
    this.state = {
      name: "preeti",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Props !</h1>
        <Classmet name={this.name} email="sam@test.com"></Classmet>
        <Classmet name="grace" email="grace@test.com"></Classmet>
        <button>Update Name</button>
      </div>
    );
  }
}
export default App;
