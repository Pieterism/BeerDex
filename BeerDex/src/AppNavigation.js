import React from "react";
import { StackNavigator } from "react-navigation";
import Splash from "./components/Splash";
import Login from "./components/Login";

const AppNavigation = StackNavigator({
  First: {
    screen: Splash,
    navigationOptions: {
      header: null,
      title: "Splash"
    }
  },
  Second: {
    screen: Login,
    navigationOptions: {
      header: null,
      title: "Login"
    }
  }
});

export default AppNavigation;
