import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from 'react-native-button';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 60 }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}>Welcome to your BeerDex!</Text>
        
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
  buttonText: {}
});
