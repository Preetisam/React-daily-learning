import React from "react";

function User(props) {
  return (
    <div>
      <h1>User Component</h1>
      {/* //two ways to call a function */}
      {/* <button onClick={() => props.data()}>function calling data</button> */}
      <button onClick={props.data}>function calling data</button>
    </div>
  );
}
export default User;
