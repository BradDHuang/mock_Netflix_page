import React, {Component} from "react";
import Film from "./Film";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <div>
      {this.props.list.map((film, index) => (
        <Film key={index} title={film.title} />
      ))}
     </div>
    );
  }
}

export default Row;