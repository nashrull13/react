import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

import Userprofile from "./component/userprofile";
function App() {
  return (
    //<center>
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Userprofile />
        </Col>
        <Col></Col>
      </Row>
    </Container>
    /* //{" "}
      <Container>
        // <Row>// </Row>
        //{" "}
      </Container> */
    //</center>
  );
}

export default App;
