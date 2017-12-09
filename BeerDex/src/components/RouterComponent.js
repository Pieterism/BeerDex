// all possible screens in the app

import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./LoginForm.js";
import Login from "./Login.js";
import Splash from "./Splash.js";
import BeerList from "./BeerList.js";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 50 }}>
      <Scene key="auth" hideNavBar={true}>
        <Scene
          key="login"
          component={LoginForm}
          backgroundColor="#2A374A"
          initial
        />
      </Scene>

      <Scene key="main" hideNavBar={true}> 
        <Scene
          key="employeeList"
          component={BeerList}
          title="Employees"
          rightTitle="Add"
          onRight={() => console.log("touched!")}
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

export default RouterComponent;
