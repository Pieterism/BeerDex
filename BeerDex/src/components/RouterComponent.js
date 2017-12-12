// all possible screens in the app

import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./LoginForm.js";
import Login from "./Login.js";
import Splash from "./Splash.js";
import BeerList from "./BeerList.js";
import Beers from "./Beers.js";
import BeerDetail from "./BeerDetail.js";

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
          title="LEVELS"
          titleStyle={{
            color: "#E28830",
            fontSize: 40,
            fontFamily: "Root Beer",
          }}
          navigationBarStyle={{
            position: "absolute",
            backgroundColor: "#2A374A",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0,
            elevation: 0,
          }}
          initial
        />
        <Scene
          key="Beers"
          component={Beers}
          title="BEERS"
          titleStyle={{
            color: "#E28830",
            fontSize: 40,
            fontFamily: "Root Beer"
          }}
          navigationBarStyle={{
            position: "absolute",
            backgroundColor: "#2A374A",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0,
            elevation: 0
          }}
        />
        <Scene
          key="BeerDetail"
          component={BeerDetail}
          title=""
          titleStyle={{
            color: "#E28830",
            fontSize: 40,
            fontFamily: "Root Beer"
          }}
          navigationBarStyle={{
            position: "absolute",
            backgroundColor: "transparent",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0,
            elevation: 0
          }}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: "#2A374A",
    navBarButtonColor:  "#E28830"

  }
};

export default RouterComponent;
