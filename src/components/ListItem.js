import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";

import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  onLibrarySelect = libraryId => {
    this.props.selectLibrary(libraryId);
  };

  renderDescription = () => {
    const { item, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </CardSection>
      );
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
  },
  descriptionStyle: {
    flex: 1
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.item.id === state.selectedLibraryId;

  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
