import React, { useState } from "react";
import "./App.css";
import Student from "./Student";
function App() {
  const [name, setName] = useState("elena");
  return (
    <div className="App">
      <h1>Props in react</h1>
      {/* passing mutilple data in the name variable */}
      name={"preeti"}
      email="preeti@test.com" other={{ address: "delhi", mobile: "098765" }}
      <Student
        name={"pushparaj"}
        email="pushaparaj@test.com"
        other={{ address: "Hyderbad", mobile: "098765" }}
      />
      <Student
        name={"Elena"}
        email="elena@test.com"
        other={{ address: "TamilNadu", mobile: "098765" }}
      />
      <Student name={name} />
      {/* <button
        onClick={() => {
          setName("preeti");
        }}
      >
        Update Name
      </button> */}
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import Student from "./Student";
function App() {
  const [name, setName] = useState("elena");
  return (
    <div className="App">
      <h1>Props in react</h1>
      <Student name={name} />
      <button
        onClick={() => {
          setName("preeti");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default App;
