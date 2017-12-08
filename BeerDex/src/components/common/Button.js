import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

//making the button reusable by passing the function that needs to be  executed when pressed!
const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress = {onPress} style = {styles.buttonStyle}>
      <Text style = {styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle : {
    flex : 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#007aff',
     marginLeft: 5,
     marginRight: 5
     },

  textStyle: {
    alignSelf: 'center',
    color: '#077aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}
export {Button};