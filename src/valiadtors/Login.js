import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false); //to vaidate the user input
  const [passErr, setPassErr] = useState(false); //we set the error

  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }

    e.preventDefault();
  }
  // setp 2 for userhandler
  // e value if use name is less the 3 didgit tell user that u cant enter 3 digits
  function userHandler(e) {
    let item = e.target.value;
    //name =item =ram<pr check the lentgh set user error
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  ///async functions are used to  fetch the data
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Login</h1>

      {/* step 1  */}
      {/* create a form and input  we use onchange method, "onclick in button" */}

      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />
        {/* we check thr user error true 3< user not valid .yoy should't use user error */}
        {userErr ? <span>User Not Valid</span> : ""}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter User Password"
          onChange={passwordHandler}
        />
        {passErr ? <span>Password Not Valid</span> : ""}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
