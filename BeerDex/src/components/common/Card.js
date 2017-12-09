import React, { Component } from "react";
import { Text, View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    elevation: 0,
    backgroundColor: 'transparent',
    alignItems: "center"
  }
};

export { Card };
