import React, { Component } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";

import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  onLibrarySelect = libraryId => {
    this.props.selectLibrary(libraryId);
  };

  render() {
    const { id, title, description } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.onLibrarySelect(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default connect(null, actions)(ListItem);
