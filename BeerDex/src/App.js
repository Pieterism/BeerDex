// this is not used anymore! 

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import { Router, Scene } from "react-native-router-flux";
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './components/RouterComponent.js';


class App extends React.Component {
  //initialize firebase before rendering the view
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

  render() {
    //createing store for redux
    const store =createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store = {store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
