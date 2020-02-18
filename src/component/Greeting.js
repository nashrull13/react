import React from "react";

export default function Greeting(props) {
  return (
    <div>
      <h3>
        <p>
          Name : {props.name}
          <br></br>
          Age : {props.age}
          <br></br>
          Gender : {props.gender}
        </p>
      </h3>
    </div>
  );
}
