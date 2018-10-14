import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, removeItem } from "./actions/itemActions";
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
          {"Mylist:"}
          <Row list={items.mylist} 
            removeFromMylist={this.props.removeItem}
          />
          <br />
          {"Recommendations: "}
          <Row list={items.recommendations} />
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

export default connect(mapStateToProps, { getItems, removeItem })(App);

