import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import { Router, Scene } from "react-native-router-flux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" />
        </Scene>
      </Router>
    );
  }
}

export default App;