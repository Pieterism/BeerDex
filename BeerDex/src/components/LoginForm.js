/*
  nen goeien dag, om de buttons enzo te veranderen moet je de common component veranderen
  das nog handig want dan zijn de knoppen doorheen de hele app gelijk en dan moet je da maar 1 keer aanpassen kejet

  omdat Login andere knoppen gebruikt heb ik die laten staan gelijk dat em is dus dan kan ik achteraf de logica er ook nog in duwen

  om in te loggen staat er momenteel nog maar 1 account geregistreerd dat is het volgende account:
      test@test.comm
      password = password
*/

import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "./../actions";
import { Text, View } from "react-native";
import Login from "./Login.js";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          <CardSection>{this.renderButton()}</CardSection>
          <CardSection>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this._fbAuth}
              {...iconStyles}
            >
              Login with Facebook
            </Icon.Button>
          </CardSection>
          <CardSection>
            <Icon.Button
              name="google"
              backgroundColor="#DD4B39"
              onPress={this.loginWithGoogle}

              {...iconStyles}
            >
              Login with Google
            </Icon.Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
const iconStyles = {
  borderRadius: 5,
  borderWidth: 1,
  iconStyle: { paddingVertical: 6 },
  alignSelf: "stretch",
  justifyContent: "center"
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },

  containerStyle: {
    flex: 1,
    backgroundColor: "#2A374A",
    justifyContent: "center"
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
