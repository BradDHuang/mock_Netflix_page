import React, {Component} from "react";
import { Button } from 'reactstrap';

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <div className="film">
      <img src={this.props.img} alt="poster" onMouseOver={this.props.onMouseOver} />
      <div className="title">{this.props.title}</div>
      {this.props.isHovering &&
        <Button color="danger" size="sm"
          onClick={this.props.onRemove}
        >
          Remove
        </Button>
      }
     </div>
    );
  }
}

export default Film;