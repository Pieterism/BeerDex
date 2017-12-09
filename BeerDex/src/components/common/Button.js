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
    backgroundColor: '#E28830',
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#E28830',
     marginLeft: 90,
     marginRight: 90
     },

  textStyle: {
    fontFamily: "Andy Bold",
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}
export {Button};
