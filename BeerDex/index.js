import { AppRegistry } from "react-native";
import App from "./src/App";
import Splash from "./src/components/Splash";
import Login from "./src/components/Login";
import AppNavigation from "./src/AppNavigation";

AppRegistry.registerComponent("BeerDex", () => AppNavigation);
