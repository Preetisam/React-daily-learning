import React, { useState } from "react";
import "./App.css";
//Form Handler
function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interst, setInterval] = useState("");
  function getFormData(e) {
    console.log(name, tnc, interst);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle Form in react</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterval(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>Dc</option>
        </select>{" "}
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.value)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button type="Submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}
export default App;
