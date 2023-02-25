import React, { useState } from "react";
import "./App.css";
// import { useState } from "react";

// function App() {
//   let data = "Preeti";
//   function updateData() {
//     data = "samuel";
//     alter(data);
//   }
//   console.warn("__________");
//   return (
//     <div className="App">
//       {/* <h1>State in react</h1> */}
//       <h1>{data}</h1>
//       <button onclick={updateData}>Upadte DAte</button>
//     </div>
//   );
// }

// state method
function App() {
  // we are using set method to sey the data and use useState to import for the execution in the first line with {useState}
  //here in line no 25 we are set the data and setData(the one should be updated ) to useState("current var");
  //const [data, setData] = useState("preeti");
  const [data, setData] = useState(0);
  function updateData() {
    //here in linr number 27 we are creating the function upadate data to setData to be updated setData("update var")
    //setData("Elena");
    //data ="Elena"
    setData(data + 1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* here in the button onClick we are using the event onClick is set or decleared to updateData (function is call) */}
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
export default App;

//why we use state in react?
//In React, state is used to store and manage data that can change over time within a component. It allows components to update their own data and re-render in response to user interactions or other events, without requiring a full page reload. State helps to make React applications more dynamic and interactive, and is an important part of building scalable and maintainable user interfaces.
