import React from "react";
import { Jumbotron, Button } from "reactstrap";
import UserProfile from "./UserProfile";

const Home = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to My Page</h1>
        <p className="lead">The simple page with much effort</p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">See My Profile</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
