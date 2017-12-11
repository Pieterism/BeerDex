import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class Map extends Component {
  constructor(props){
    super(props)

    this.state={
      initialPosition: {
        latitude: 0,
        longtitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        longtitude:0,
        latitude: 0
      }
    }
  }

  render() {
    const { region } = this.props;

    return (
      // Huidige locatie tonen! 
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 51.053641,
            longitude: 3.723632,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015
          }}
        >
          <MapView.Marker
            coordinate =
            {{
              latitude: 51.053641,
              longitude: 3.723632,
            }}
            //Naam van bier inzetten
            title = {"Marker"}
            description = {"Description"}
            >
            <View style = {styles.radius}>
              <View style = {styles.marker}/>
            </View>
          </MapView.Marker>
        </MapView>
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
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow : 'hidden',
    borderWidth: 1,
    backgroundColor: 'rgba(0,122,255,0.1)' ,
    borderColor: 'rgba(0,122,255,0.3)' ,    
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    overflow : 'hidden',
    borderWidth: 3,
    backgroundColor: '#007AFF' ,
    borderColor: 'white'
  }
});
