import React from "react";

class About extends React.Component {
  render = () => (
    <div className="container mt-2">
      <h1>{this.props.match.params.number}</h1>
      <h1>About</h1>
    </div>
  );
}

export default About;
