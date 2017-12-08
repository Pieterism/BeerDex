import React, {Component} from 'react';
import {Text, View} from 'react-native';

const CardSection = (props) => {
  return (
    <View style = {styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    padding : 10,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderColor: 'transparent',
    //position: 'relative'
  }
}
export {CardSection};
