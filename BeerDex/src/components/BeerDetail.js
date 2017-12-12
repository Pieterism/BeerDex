<<<<<<< HEAD
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView, // Scrollable container
  StyleSheet, // CSS-like styles
  TouchableOpacity // Handles button presses
} from "react-native";
import { connect } from "react-redux";
import { levelSelected } from "./../actions";
import BeerItem from "./BeerItem.js";
import Map from "./Map.js";

class Beers extends Component {
  renderBeerDetails() {}
  rendershizzle() {
    const {
      name,
      completed,
      percentage,
      description,
      image
    } = this.props.selectedBeer;
    return (
      <View style={{ paddingTop: 50 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image style={styles.imageStyle} source={{ uri: image }} />
          <Text style={styles.titleStyle}>{name}</Text>
=======
import React , {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';
import BeerItem from './BeerItem.js';
import Map from './Map.js';
import Button from './common';



class Beers extends Component {
  renderBeerDetails () {

  }

  renderButton () {
    const {completed} = this.props.selectedBeer;

    if (completed) {
      return (
        <View>
          <Text>
            Hier Moet een map komen kejet
          </Text>
          <Text>
            Hier moet een foto komen!
          </Text>
        </View>
      );
    }
    return (
      <Text>
        Hier moet een button komen
      </Text>
    );
  }

  render () {
    const {name, percentage, description, image, brewery} = this.props.selectedBeer;
    return (
      <View style = {{paddingTop: 50}}>

        <View>
          <Text style = {styles.titleStyle}>
            {name}
          </Text>

          <Image
            style = {styles.imageStyle}
            source = {{uri : image}}
          />
>>>>>>> 182f50fad29b2995aea8a730220859a46292c92f
        </View>
        <View>
<<<<<<< HEAD
          <Text>{description}</Text>
=======
          <Text>
            {brewery}
          </Text>
          <Text>
            {percentage}
          </Text>
          <Text>
            {description}
          </Text>
          {this.renderButton()}
>>>>>>> 182f50fad29b2995aea8a730220859a46292c92f
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
      image
    } = this.props.selectedBeer;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.titleText}>{name}</Text>
            <Image
              style={styles.imageStyle}
              source={{ uri: image }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ beer }) => {
  const { selectedLevel, selectedBeer } = beer;
  return { selectedLevel, selectedBeer };
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
    flex:1, 
    height: 150,
    width: 150,
    resizeMode: "cover",
    marginTop: 5,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#E28830"
  }
};

export default connect(mapStateToProps)(Beers);
