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


          <View style={styles.imageContainerStyle}>
            <Text style={styles.titleStyle}>{name}</Text>
            <View style={styles.cardView}>
              <Image style={styles.imageStyle} source={{ uri: image }} />
              
            </View>
          </View>
          <View style={styles.textContainerStyle}>
            <CardSection>
              <Text style={styles.descriptionStyle}>{description}</Text>
            </CardSection>
          </View>


        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  imageContainerStyle: {
    flex: 2,
    position: "relative",
    backgroundColor: "transparent",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  cardView: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    flexDirection: "row",
    borderColor: "transparent"
  },
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
  imageStyle: {
    borderRadius: 25,
    height: 100,
    width: 100,
    resizeMode: "contain"
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
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15,
    color: "#E28830",
    fontFamily: "Andy Bold"
  },
  descriptionStyle: {
    fontSize: 12,
    paddingLeft: 35,
    color: "#E28830",
    fontFamily: "Pokemon GB"
  },
  infoText: {
    fontFamily: "atwriter",
    marginLeft: 10,
    color: "#E28830"
  }
};

const mapStateToProps = beer => {};

export default connect(null, { beerSelected })(BeerItem);
