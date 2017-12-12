//Meer info omtrent mapview en aanmaken van markers op:
//https://github.com/react-community/react-native-maps

//Meer info over de geolocatie en locatie opvragen op:
//https://facebook.github.io/react-native/docs/geolocation.html

//nog nice voorbeeld voor gebruik van markers
//http://www.abeanderson.me/React-Native-Maps/
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensons,
  Dimensions,
  Image
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapStyle from "./common/MapStyle.json";

const { width, height } = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 51.060317,
        longitude: 3.708432,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      markerPosition: {
        latitude: 51.060317,
        longitude: 3.708432,
      }
    };
  }

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };

        this.setState({ initialPosition: initialRegion });
        this.setState({ markerPosition: initialRegion });
      },
      error => alert(JSON.stringify(error)),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 100 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };

      this.setState({ initialPosition: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
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
          style={styles.map}
          customMapStyle={MapStyle}
          region={this.state.initialPosition}
        >
          <MapView.Marker
            coordinate={this.state.markerPosition}
            //Naam van bier inzetten
            title = {"KU LEUVEN"}
            description = {"Technologiecampus Gent"}
          >
            <View>
              <Image
                style={styles.imageMarker}
                source={require('../images/mapMarker.png')}
              />
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
  //AANPASSEN OM KLEINERE KAART TE KRIJGEN
  map: {
    right: 50,
    left: 50,
    top: 50,
    bottom: 50,
    position: "absolute"
  },
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "rgba(0,122,255,0.1)",
    borderColor: "rgba(0,122,255,0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: "hidden",
    borderWidth: 3,
    backgroundColor: "#007AFF",
    borderColor: "white"
  },
  imageMarker: {
    width: 25,
    height: 25 * 1.2583
  }
});
