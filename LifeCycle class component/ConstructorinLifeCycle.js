import React from "react";
import "./App.css";
// Life cycle components
class App extends React.Component {
  //constructor is the first printed before all the elements
  //super is called for the parent component in the constructor call so we will use super as th
  // in constructor function we will call the state of the component
  //the api fecthig is not render in the constructor as it create first before the html component and render method is called so will will ot call api fecth methods in the constructor
  constructor() {
    super();
    this.state = {
      data: "Preeti",
    };

    console.warn("constructor");
  }
  //compoenet did mount their the api
  render() {
    return (
      <div className="App">
        <h1>Hello react {this.state.data}</h1>
      </div>
    );
  }
}
export default App;

//call the function from the parent to child this case is done when the childe is in  the loop component were we are calling the child contiously

//Can we inside constructor can we inculde the props?

//when component is lodeded page in the toggle method weather the life get start or created once again?
// no its goes not start but ir recreate the whole life cylce method once agian the old one is destroyed. new life cycle is made.
