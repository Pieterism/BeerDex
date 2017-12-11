import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensons, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapStyle from './common/MapStyle.json';

const {width, height}= Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Map extends Component {
  constructor() {
    super();

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      // Huidige locatie tonen! 
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapview}
          customMapStyle={MapStyle}
          showsUserLocation = {true}
          onRegionChange={region => this.setState({region})}
          onRegonChangeComplete={ region => this.setState({region})}>

          <MapView.Marker
            coordinate ={this.state.region}
            //Naam van bier inzetten op vaste coordinaten. 
            //title = {"My Position"}
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
  mapview: {
    height: '100%',
    width: '100%'
  },
  map: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  }/* 
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
  //uitzicht van marker kunnen we bijwerken naar pinpoint ofzo
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    overflow : 'hidden',
    borderWidth: 3,
    backgroundColor: '#007AFF' ,
    borderColor: 'white'
  }*/
});
