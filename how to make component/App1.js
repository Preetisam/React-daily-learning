//what is component?

import React from "react";
import { ReactDOM } from "react-dom";

class App1 extends Component {
  render() {
    return <div>Hello React!</div>;
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));

import React from "react";
import "./App.css";
import Data from "./Component/Data";
const App = () => {
  return (
    <div className="container">
      <h1>Counter:</h1>
      <Data count={0} />
    </div>
  );
};

export default App;
