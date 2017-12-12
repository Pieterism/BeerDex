import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";
import { beerSelected } from "./../actions";
import { connect } from "react-redux";

class BeerItem extends Component {
  onButtonPress() {
    const { beer } = this.props;
    this.props.beerSelected(beer);
    Actions.BeerDetail();
  }
  render() {
    const { name, brewery, percentage, description, image } = this.props.beer;
    return (
      <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
        <View style={styles.buttonView}>
          <View style={styles.iconTitle}>
            <View style={styles.imageText}>
              <Image style={styles.imageStyle} source={{ uri: image }} />
            </View>
            <View>
              <View style={styles.title}>
                <Text style={styles.titleStyle}>{name}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  buttonView: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#E28830",
    borderRadius: 20,
    borderWidth: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  iconTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  imageText: {},
  imageStyle: {
    borderRadius: 10,
    height: 50,
    width: 50,
    resizeMode: "contain",
    backgroundColor: "white"
  },
  title: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  titleStyle: {
    fontSize: 30,
    color: "#E28830",
    fontFamily: "Andy Bold"
  },

  cardView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    flexDirection: "row",
    borderColor: "transparent"
  },

  textContainerStyle: {
    flex: 3
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#E28830"
  },
  infoText: {
    fontFamily: "atwriter",
    color: "#E28830"
  },

  descriptionStyle: {
    fontSize: 12,
    color: "#E28830",
    fontFamily: "Pokemon GB"
  }
};

const mapStateToProps = beer => {};

export default connect(null, { beerSelected })(BeerItem);
