import React, {Component} from "react";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <div>
      {"Film title: "}{this.props.title}
     </div>
    );
  }
}

export default Film;