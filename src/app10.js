import React from "react";
import "./App.css";

function App() {
  // alert("Hello")
  //comepent should declear  in the another component it's not a best way to do
  //we should react the seperate function or compenent
  //react allow us to use resuablity method  were we use them .
  //NOTE: solve problem small chucks and reuse it and do it with seprater compents or function
  //Gobal fuction
  let data1 = "kamilla preeti";

  function Apple() {
    //block  scope for function
    alert("functions called"); // we should't directly alert  inside the fuction
    // which we want to show to the user we should return the function
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Apple />
      <button onClick={() => alert({ data1 })}>Click Me</button>
      {/* <button onclick={apple()}>ClickMe </button> */}
      {/*prevent thefunction call remove parnthesis when function call or define function we should dirctly call by it its name the alert  */}
      {/* use arrow function is used when we dirctly call the function
      after the click it will be called */}
    </div>
  );
}

export default App;
