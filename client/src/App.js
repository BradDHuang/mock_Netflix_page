import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, removeItem, addItem } from "./actions/itemActions";
import Row from "./components/Row";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.item;
    // console.log(items.mylist, items.recommendations);
    // Rows are returned when there is No err. and loading is finished.
    if (!this.props.item.err && items.mylist !== undefined) {
      return (
        <div>
          <h1 style={{ color: "red", paddingLeft: "10px" }}>{"Mock Netflix Page"}</h1>
          <div className="rows">
          <div className="row_name">{"MY LIST"}</div>
          <Row list={items.mylist} 
            add={false}
            removeFromMylist={this.props.removeItem}
          />
          </div>
          <div className="rows">
          <div className="row_name">{"RECOMMENDATIONS"}</div>
          <Row list={items.recommendations} 
            add={true}
            // removeFromRecommendations={this.props.removeItem}
            addToMylist={this.props.addItem}
          />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems, removeItem, addItem })(App);

