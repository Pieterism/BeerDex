import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

//making the button reusable by passing the function that needs to be  executed when pressed!
const Button = ({ onPress, children, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <Text style={[styles.buttonTitle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",

  },

  buttonTitle: {
    justifyContent: "center",
    alignItems: "center"
  }
};
export { Button };
