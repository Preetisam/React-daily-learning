// import React, { useEffect, useState } from "react";
// import "./App.css";
// //import Data from "./Component/Data";

// const App = () => {
//   const [count, setCount] = useState(0); //use state is use to store the current value of the intial variable

//   // useEffect (didMount and didUpdate or render)
//   // useEffect used state is render update and delete
//   //fectch method is used we can use outside fuction for api calling
//   //array is used when we for actions perfomed in the method specifilly
//   //
//   useEffect(() => {
//     //console.log("useEffect");
//     //document.title = useEffect;
//     //if (count === 0) return;

//     if (count > 0) console.log("increment");

//     if (count < 0) console.log("decrement");
//   }, [count]);

//   const decresing = () => {
//     if (count <= 0) {
//       setCount(0);
//     } else {
//       setCount(count - 1); //setcount is used to modify the elements with we can to change it
//     }
//   };
//   const increasing = () => {
//     if (count >= 25) {
//       setCount(count); //when we delcare the value to its lmit point(25)
//       //setCount(0)   when we want to set counter to inital state which is zero
//     } else {
//       setCount(count + 1);
//     }
//   };
//   return (
//     <div>
//       {/* state variable where we use to declare the value */}
//       <h1>Count:{count}</h1>
//       <button onClick={increasing}>INC</button>
//       <button onClick={decresing}>DEC</button>
//       {/* <Data name={"props class"} /> */}
//     </div>
//   );
// };
// export default App;
