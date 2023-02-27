// When we use Render method?
//how to make a class component
// how can we use state and props in the render method
import React from "react";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "preeti@test.com",
    };
  }
  render() {
    console.warn("Render method", this.state.email);
    return (
      <div>
        <h1>User Compoenet</h1>
        {/* <h1>User Component {this.props.name}</h1> */}
        {/* <button
          onClick={() => this.setState({ email: "kamill@test.com" })}
        ></button> */}
        <button
          onClick={() => this.setState({ email: "elenagrace@test.com" })}
        ></button>
      </div>
    );
  }
}

export default User;
//state or props or updated
