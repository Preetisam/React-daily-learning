function Student(props) {
  //propreties

  //props are passed inside the function
  //   console.log(props.name);
  console.log(props);
  return (
    <div style={{ backgroundColor: "chartreuse", margin: 10 }}>
      {/* props is declared here for access */}
      {/* Change the props */}
      <h1>Hello: {props.name}</h1>
      {/* <h2>Email : {props.email}</h2>
      <h4>Address: {props.other.address}</h4>
      <h4>Address: {props.other.mobile}</h4> */}
    </div>
  );
}
export default Student;

//can use use state in class componement? no
