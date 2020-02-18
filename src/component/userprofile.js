import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";

import Avatar from "./avatar";
import Name from "./name";
import Bio from "./bio";

// export default class userprofile extends Component {
//   render() {
//     return (
//       <div>
//         <Jumbotron fluid>
//           <Container fluid>
//             <Avatar />
//             <h1 className="display-3">
//               <Name />
//             </h1>
//             <p className="lead">
//               <Bio />
//             </p>
//           </Container>
//         </Jumbotron>
//       </div>
//     );
//   }
// }

const Example = props => {
  return (
    <div>
      <center>
        <Card>
          <Avatar />

          <CardBody>
            <CardTitle>
              <Name />
            </CardTitle>

            <CardText>
              <Bio />
            </CardText>
          </CardBody>
        </Card>
      </center>
    </div>
  );
};

export default Example;
