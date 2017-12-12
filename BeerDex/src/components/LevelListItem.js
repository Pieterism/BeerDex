import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View, Image } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { levelSelected } from "./../actions";

class LevelListItem extends Component {
  renderDescription() {
    if (this.props.level.free) {
      return (
        <Text style={styles.descriptionStyle}>
          {this.props.level.description}
        </Text>
      );
    }

    return (
      <Text style={styles.descriptionStyle}>
        You still have lots to learn young padawan.{"\n"}
        Keep drinkin'...
      </Text>
    );
  }

  onButtonPress() {
    if (this.props.level.free) {
      const { level } = this.props;
      this.props.levelSelected(level);
      Actions.Beers();
    }
  }

  render() {
    var images = [];
    const {number} = this.props.level;

    for (let i = 0 ; i< number; i++){
      images.push(
        <Image
          style={styles.img}
          source={require("../images/levelIconEmpty.png")}
        />
      )
    }

    return (
      <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
        <View style={styles.cardsection}>
          <CardSection>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={styles.titleStyle}>{this.props.level.title}</Text>
              {images}
              <Image
                style={styles.img}
                source={require("../images/levelIcon.png")}
              />
              
            </View>
          </CardSection>

          <CardSection>{this.renderDescription()}</CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 30,
    fontFamily: "Andy Bold",
    color: "#E28830",
    paddingLeft: 15
  },
  descriptionStyle: {
    fontSize: 12,
    fontFamily: "Pokemon GB",
    color: "#E28830",
    paddingLeft: 40
  },
  img: {
    width: 25,
    height: 35
  },
  cardsection: {
    borderColor: "#E28830",
    borderRadius: 25,
    borderWidth: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  }
};

const mapStateToProps = ({ beer }) => {
  const { levels } = beer;
  return levels;
};

export default connect(mapStateToProps, { levelSelected })(LevelListItem);
