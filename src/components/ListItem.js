import React, { Component } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";

import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  onLibrarySelect = libraryId => {
    this.props.selectLibrary(libraryId);
  };

  renderDescription = () => {
    const { item, expanded } = this.props;

    if (expanded) {
      return <Text>{item.description}</Text>;
    }
  };

  render() {
    const { id, title, description } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.onLibrarySelect(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.item.id === state.selectedLibraryId;

  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
