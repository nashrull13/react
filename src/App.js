import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Greeting from "./component/Greeting";

function App() {
  return (
    <Container>
      <Greeting name="Irfan" age="20" gender="male" />
    </Container>
  );
}

export default App;
