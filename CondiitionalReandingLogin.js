import React, { useState } from "react";
function Profile() {
  //   const [loggedIn, setLoggedIn] = useState(false);  //logged for guest
  //   const [loggedIn, setLoggedIn] = useState(true); //welcome preeti
  const [loggedIn, setLoggedIn] = useState(2); //welcome preeti
  //1,2,3
  return (
    // <div>{loggedIn ? <h1>Welcome Preeti</h1> : <h1>Wecolme Guest</h1>}</div> //two user
    <div>
      {loggedIn === 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn === 2 ? (
        <h1>Wecolme User2</h1>
      ) : (
        <h1>Wecolme Guest</h1>
      )}
    </div>
  );
}
export default Profile;
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Method 2
import React, { useState } from "react";
function Profile() {
  //   const [loggedIn, setLoggedIn] = useState(false);  //logged for guest
  const [loggedIn, setLoggedIn] = useState(true); //welcome preert
  if (loggedIn)
    if (loggedIn)
      return (
        <div>
          <h1>Welcome Kamilla</h1>
        </div>
      );
    else {
      return (
        <div>
          <h1>Welcome guest</h1>
        </div>
      );
    }
}
export default Profile;
