import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="#eceff1"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    fontFamily: "Pokemon GB",
    color: "#fff",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 12,
    lineHeight: 23,
    backgroundColor: "transparent",
    flex: 2 // 2/3 will be for the input
  },

  labelStyle: {
    fontFamily: "Pokemon GB",
    fontSize: 12,
    paddingLeft: 10,
    flex: 1,
    backgroundColor: "transparent",
    color: "#E28830" // 1/3 will be for the label
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  }
};
export { Input };
