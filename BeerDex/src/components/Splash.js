import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{ width: 70, height: 100 }}
            source={require("../images/logo.png")}
          />
          <Text style={styles.logoText}>Welcome to your BeerDex!</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>DRINK EM ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A374A",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    marginVertical: 15,
    fontSize: 20,
    color: "#E28830"
  },
  button: {
    backgroundColor: "#E28830",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  buttonText: {
    fontFamily: "BoldDrink",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 45,
    color: "#2A374A"
  },
  containerButton:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60
  }

});
