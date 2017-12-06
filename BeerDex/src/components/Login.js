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

var config = {
  apiKey: "AIzaSyCvQjT6hl-oW0dNnctXwu-td8M0QkOnASs",
  authDomain: "beerdex-187413.firebaseapp.com/",
  databaseURL: "https://beerdex-187413.firebaseio.com/"
};

const firebaseRef = firebase.initializeApp(config);

export default class Login extends Component {

  _fbAuth() {
    FBLoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
      if (result.isCancelled) {
        alert("Login Cancelled");
      } else {
        AccesToken.getCurrentAccesToken().then(
          AccesToken => {
            const credential = firebase.auth.FacebookAuthProvider.credential(
              AccesTokenData.AccesToken
            );
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(
                result => {
                  //promise was succesfull
                },
                error => {
                  //promise was rejected
                  console.log(error);
                }
              );
          },
          error => {
            console.log("ERROR:" + error);
          }
        );
      }
    }
  );
  }

  state = {
    user: undefined // user has not logged in yet
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener("url", this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then(url => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === "ios") {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL("http://localhost:3000/auth/facebook");

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL("http://localhost:3000/auth/google");

  // Open URL in a browser
  openURL = url => {
    // Use SafariView on iOS
    if (Platform.OS === "ios") {
      SafariView.show({
        url: url,
        fromBottom: true
      });
    } else {
      // Or Linking.openURL on Android
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        {user ? (
          // Show user info if already logged in
          <View style={styles.content}>
            <Text style={styles.header}>Welcome {user.name}!</Text>
            <View style={styles.avatar}>
              <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
            </View>
          </View>
        ) : (
          //Show Please log in message if not
          <View style={styles.content}>
            <Text style={styles.header}>Welcome Stranger!</Text>
            <View style={styles.avatar}>
              <Icon name="user-circle" size={100} color="#546176" />
            </View>
            <Text style={styles.text}>Please log in to continue {"\n"}</Text>
          </View>
        )}
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
    backgroundColor: "#2A374A"
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
  }
});
