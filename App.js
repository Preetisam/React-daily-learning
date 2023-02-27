import React, { useState } from "react";
//UseEffect

import "./App.css";
function App() {
  const [data, setData] = useState("Preeti");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("Kamilla")}>Update Data</button>
    </div>
  );
}
export default App;

//component will unmount will be called just before remove from the Dom
//CAn we use the hooks are used in the class components
