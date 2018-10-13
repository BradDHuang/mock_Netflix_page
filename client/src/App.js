import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from "./actions/itemActions";

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
    console.log(items.mylist, items.recommendations);
    return (
        <div>
          {"items"}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems })(App);

