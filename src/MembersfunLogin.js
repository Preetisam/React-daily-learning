import React from "react";

function Members(props) {
  return (
    <div>
      <h1>Members Component</h1>
      {/* //two ways to call a function */}
      {/* <button onClick={() => props.data()}>function calling data</button> */}
      <button onClick={props.data}>function calling data</button>
    </div>
  );
}
export default Members;
