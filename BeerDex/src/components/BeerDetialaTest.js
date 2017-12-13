import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { levelSelected } from "./../actions";
import BeerItem from "./BeerItem.js";
import Map from "./Map.js";
import { Button } from "./common";
import { sendData, completed, updateData } from "./../actions";

class Beers extends Component {
  onButtonPress() {
    const { levels, selectedBeer, selectedLevel } = this.props;
    selectedBeer.completed = true;
    selectedLevel.complete++;
    if (selectedLevel.complete >= 6) {
      levels.levels[selectedLevel.number + 1].free = true;
    }

    console.log(selectedBeer);
    console.log(selectedLevel);
    this.props.completed({ selectedBeer, selectedLevel });
    this.props.updateData(levels);
  }

  renderButton() {
    const { completed } = this.props.selectedBeer;

    if (completed) {
      return (
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View justifyContent="center" alignItems="center">
              <Text style={styles.infoTitle}>MAP</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View justifyContent="center" alignItems="center">
              <Text style={styles.infoTitle}>PICTURE</Text>
            </View>
          </View>
        </View>
      );
    }
    return (
      <TouchableOpacity
        justifyContent="center"
        alignItems="center"
        onPress={this.onButtonPress.bind(this)}
      >
        <Text style={styles.buttonTitle}>Drink this beer!</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      name,
      percentage,
      description,
      image,
      brewery
    } = this.props.selectedBeer;
    return (
      <View style={{ paddingTop: 50, flex: 1 }}>
        <View>
          <Text style={styles.titleStyle}>{name}</Text>

          <Image style={styles.imageStyle} source={{ uri: image }} />
        </View>

        <View style={{ flex: 1 }}>
          <Text>{brewery}</Text>
          <Text>{percentage}</Text>
          <Text>{description}</Text>
          {this.renderButton()}
        </View>
      </View>
    );
  }

  render() {
    const {
      name,
      completed,
      percentage,
      description,
      image,
      brewery
    } = this.props.selectedBeer;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.titleText}>{name}</Text>
            <Image style={styles.imageStyle} source={{ uri: image }} />
          </View>

          <View style={styles.infoContainer}>
            <View justifyContent="center" alignItems="center">
              <Text style={styles.infoTitle}>Algemene Info</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.labelText}>Brouwerij:</Text>
              <Text style={styles.infoText}>{brewery}</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.labelText}>Alcohol %:</Text>
              <Text style={styles.infoText}>{percentage}%</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.labelText}>Extra: </Text>
              <Text style={styles.infoText}>{description}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View justifyContent="center" alignItems="center">
              <Text style={styles.infoTitle}>MAP</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View justifyContent="center" alignItems="center">
              <Text style={styles.infoTitle}>PICTURE</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity justifyContent="center" alignItems="center">
              <Text style={styles.buttonTitle}>Drink this beer!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ beer }) => {
  const { levels, selectedLevel, selectedBeer } = beer;
  return { levels, selectedLevel, selectedBeer };
};

const styles = {
  container: {
    backgroundColor: "#2A374A",
    flex: 1,
    paddingTop: 15
  },
  header: {
    backgroundColor: "#2A374A",
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    color: "#E28830",
    fontSize: 40,
    fontFamily: "Root Beer"
  },
  imageStyle: {
    flex: 1,
    height: 150,
    width: 150,
    resizeMode: "contain",
    backgroundColor: "#fafafa",
    marginTop: 5,
    borderRadius: 20,
    borderWidth: 3
  },
  infoContainer: {
    backgroundColor: "#2A374A",
    justifyContent: "flex-start",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#E28830",
    paddingBottom: 5
  },
  buttonContainer: {
    backgroundColor: "#E28830",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20
  },
  rowView: {
    flexDirection: "row"
  },
  infoTitle: {
    color: "#E28830",
    fontSize: 25,
    marginTop: 5,
    fontFamily: "TheLightFont",
    textDecorationLine: "underline",
    paddingBottom: 5
  },
  buttonTitle: {
    color: "#2A374A",
    fontSize: 32,
    fontFamily: "Andy Bold",
    marginLeft: 112
  },
  labelText: {
    color: "#E28830",
    fontSize: 20,
    marginLeft: 15,
    fontFamily: "typewcond_regular"
  },
  infoText: {
    flex: 2,
    color: "#E28830",
    fontSize: 20,
    marginLeft: 15,
    fontFamily: "typewcond_regular",
    flexWrap: "wrap"
  }
};

export default connect(mapStateToProps, { sendData, completed, updateData })(
  Beers
);
