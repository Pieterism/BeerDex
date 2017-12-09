// all possible screens in the app

import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./LoginForm.js";
import Login from "./Login.js";
import Splash from "./Splash.js";
import BeerList from "./BeerList.js";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar={true}>
        <Scene
          key="login"
          component={LoginForm}
          backgroundColor="#2A374A"
          hideNavBar={true}
          initial
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="Levels"
          component={BeerList}
          title="Levels"
          initial
        />
        <Scene
          key="employeeCreate"
          component={BeerList}
          hideNavBar={true}
          title="Create Employee"
        />
      </Scene>
    </Router>
  );
};

const styles = {
    navBarStyle : {
      backgroundColor: "#2A374A"
    }
}

export default RouterComponent;
