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
      {this.props.list.map(film => (
        <Film key={film.id} 
          title={film.title} img={film.img} 
          onMouseOver={() => this.hoveringOver(film.id)} 
          isHovering={this.state.imagesToHover[film.id]}
          onRemove={() => this.onRemove(film.id)}
          onAdd={() => this.onAdd(film.id)}
          add={this.props.add}
        />
      ))}
     </div>
    );
  }
}

export default Row;