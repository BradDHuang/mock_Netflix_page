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
      {this.props.isHovering ?
        (
        this.props.add ?
        <Button color="warning" size="sm"
          onClick={this.props.onAdd}
        >
          Add
        </Button> :
        <Button color="danger" size="sm"
          onClick={this.props.onRemove}
        >
          Remove
        </Button>
        ) : (null)
      }
     </div>
    );
  }
}

export default Film;