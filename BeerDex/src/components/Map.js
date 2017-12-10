import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class Map extends Component {
  render() {
    const { region } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 51.053641,
            longitude: 3.723632,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A374A",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    right : 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});
