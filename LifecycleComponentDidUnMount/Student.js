import React from "react";
import "./App.css";
class Student extends React.Component {
  componentWillUnmount() {
    // alert("componetWillUnmount called");
    console.warn("ComponentWillUnMount called");
  }
  render() {
    return (
      <div className="App">
        <h1>Component will Unmount</h1>
        <button>Toogle child Component</button>
      </div>
    );
  }
}
export default Student;
//when we are calling api and we want to remove the component then this method is used
//data Loding can be cancelled here
//function can be called
//set time out and set interval can be manged when itis continously is calling
//Should component update and component did update which one is called first.
//Should compoent is updated first then the component did update is run when the condition is return true when written false the component will not updated

//if Parent component is a function and child component  student is class component will the compentunMount will work ?
//yes it will work even the parent of the component is differen when we have Component didunMount the compoenet will work
