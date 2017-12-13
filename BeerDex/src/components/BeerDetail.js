import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { levelSelected } from "./../actions";
import BeerItem from "./BeerItem.js";
import Map from "./Map.js";
import { Button } from "./common";
import { sendData, completed, updateData } from "./../actions";
import Camera from "react-native-camera";
import { Actions } from 'react-native-router-flux';

class Beers extends Component {
  onButtonPress() {
    const { levels, selectedBeer, selectedLevel } = this.props;
    selectedBeer.completed = true;
    selectedLevel.complete++;
    if (selectedLevel.complete >= 6) {
      levels.levels[selectedLevel.number + 1].free = true;
    }

    this.props.completed({ selectedBeer, selectedLevel });
    this.props.updateData(levels);
    Actions.Camera();
  }

  mapButtonPressed () {
    Actions.MapView();
  }
  renderButton() {
    const { completed} = this.props.selectedBeer;
    console.log(this.props.picture);

    if (completed) {
      return (
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Button
              style={styles.buttonContainer}
              onPress={this.mapButtonPressed.bind(this)}
            >
              <Text style={styles.infoTitle}>MAP</Text>
            </Button>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: this.props.picture}}
              style={styles.imageStyle}
            />
          </View>


        </View>
      );
    }
    return (
      <View style={styles.infoContainer}>
        <Button
          style={styles.buttonContainer}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.buttonTitle}>Let's Drink!</Text>
        </Button>
      </View>
    );
  }

  onBarCodeRead(e) {
    console.log("Barcode Found!", "Type: " + e.type + "\nData: " + e.data);
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
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
              <Text style={styles.labelText}>Extra:    </Text>
              <Text style={styles.infoText}>{description}</Text>
            </View>
          </View>

          {this.renderButton()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ beer }) => {
  const { levels, selectedLevel, selectedBeer, picture} = beer;
  return { levels, selectedLevel, selectedBeer, picture };
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
    marginLeft: 5,
    marginRight: 5,
    borderColor: "#E28830",
    paddingBottom: 5
  },
  buttonContainer: {
    backgroundColor: "#2A374A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20
  },
  rowView: {
    flexDirection: "row"
  },
  infoTitle: {
    color: "#E28830",
    fontSize: 32,
    marginTop: 5,
    fontFamily: "TheLightFont",
    textDecorationLine: "underline",
    paddingBottom: 5,
    paddingTop: 5
  },
  buttonTitle: {
    color: "#E28830",
    fontSize: 32,
    marginTop: 5,
    fontFamily: "TheLightFont",
    textDecorationLine: "underline",
    paddingBottom: 5,
    paddingTop: 5
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
