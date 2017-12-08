import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import RouterComponent from './RouterComponent.js';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './../reducers';
import firebase from 'firebase';

export default class Logo extends Component {
  componentWillMount () {
    const config = {
      apiKey: "AIzaSyCb0oTczXHUmbVW8tDQ1ZigYb-N_YYvcnw",
      authDomain: "manager-2405b.firebaseapp.com",
      databaseURL: "https://manager-2405b.firebaseio.com",
      projectId: "manager-2405b",
      storageBucket: "manager-2405b.appspot.com",
      messagingSenderId: "528377064997"
    };

  firebase.initializeApp(config);
  }


  state = {login:false};
  onButtonPress () {
    this.setState({login:true})
  }

  renderContent() {
    if (this.state.login) {
      return (

        <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <RouterComponent />
        </Provider>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{ width: 70, height: 100 }}
            source={require("../images/logo.png")}
          />
          <Text style={styles.logoText}>Welcome to your BeerDex</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={this.onButtonPress.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Drink 'em all! </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {

    return (
      <View style = {{flex: 1}}>
        {this.renderContent()}
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
  logoText: {
    marginVertical: 20,
    fontSize: 12.5,
    fontFamily: "Pokemon GB",
    color: "#E28830"
  },
  button: {
    backgroundColor: "#E28830",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  buttonText: {
    fontFamily: "Andy Bold",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 40,
    color: "#2A374A"
  },
  containerButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 60
  }
});
