import React from "react";
import "./App.css";
import Userfun from "./Userfun";
import Members from "./Membersfun";
//function as props
function App() {
  function getData() {
    alert("hello from app");
  }
  return (
    <div className="App">
      <Userfun data={getData} />
      <Userfun data={getData} />
      <Userfun data={getData} />
      <Userfun data={getData} />
      <div style={{ float: "right" }}>
        <Members data={getData} />
      </div>
    </div>
  );
}
export default App;

//call the function from the parent to child this case is done when the childe is in  the loop component were we are calling the child contiously
