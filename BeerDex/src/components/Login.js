import React, { Component } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SafariView from "react-native-safari-view";
import FBSDK, { FBLoginManager } from "react-native-fbsdk";
import firebase from "firebase";



class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
        {/* Login buttons <Icon name="user-circle" size={100} color="#546176" /> */}
        <View style={styles.buttons}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this._fbAuth}
            {...iconStyles}
          >
            Login with Facebook
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={this.loginWithGoogle}
            {...iconStyles}
          >
            Or with Google
          </Icon.Button>
        </View>
      </View>

    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A374A",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    margin: 20
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100
  },
  header: {
    color: "#E28830",
    fontFamily: "Andy Bold",
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  text: {
    textAlign: "center",
    color: "#fafafa",
    marginBottom: 5
  },
  buttons: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 30,
    marginBottom: 40
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default Login;
