import React from "react";

const Data = (props) => {
  // console.log(props);
  return (
    <div>
      console.log(props);
      <h1> This is React class.{props.count}</h1>
    </div>
  );
};

export default Data;
