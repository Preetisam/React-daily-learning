import React from "react";
import "./App.css";
import User from "./User";
// Life cycle components Render method

// Render means is execute and repersent it means show .
//Render method is Rerender when we make changes in the Html components.
//When the State and props are updated the render method is automactically called.
function App() {
  const [name, setName] = React.useState("Preeti");
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <User name={name} />
      <button onClick={() => setName("kamilla")}>Update Name</button>
    </div>
  );
}
export default App;
//Questions
// When we use Render method?
//how to make a class component?
// how can we use state and props in the render method?
