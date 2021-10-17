import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class MakeTable extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MakeTable);
