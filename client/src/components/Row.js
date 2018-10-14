import React, {Component} from "react";
import Film from "./Film";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = { imagesToHover: [] };
  }
  hoveringOver(filmId) {
    console.log(`now you are hovering over the film with id: ${filmId}`);
    let imagesHovering = [...this.state.imagesToHover];
    imagesHovering[filmId] = true;
    this.setState({ imagesToHover: imagesHovering });
  }
  onRemove(filmId) {
    if (this.state.imagesToHover[filmId]) {
      this.props.removeFromMylist(filmId);
      this.hideBtn(filmId);
    }
  }
  onAdd(filmId) {
    if (this.state.imagesToHover[filmId]) {
      this.props.addToMylist(filmId);
      // this.props.removeFromRecommendations(filmId);
      this.hideBtn(filmId);
    }
  }
  hideBtn(filmId) {
    let imagesHovering = [...this.state.imagesToHover];
    imagesHovering[filmId] = false;
    this.setState({ imagesToHover: imagesHovering });
  }
  render() {
    return (
     <div className="films">
      {this.props.list.map(({ id, title, img}) => (
        <Film key={id} 
          title={title} img={img} 
          onMouseOver={() => this.hoveringOver(id)} 
          onMouseLeave={() => this.hideBtn(id)}
          isHovering={this.state.imagesToHover[id]}
          onRemove={() => this.onRemove(id)}
          onAdd={() => this.onAdd(id)}
          add={this.props.add}
        />
      ))}
     </div>
    );
  }
}

export default Row;