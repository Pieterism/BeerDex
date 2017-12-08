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
    backgroundColor: '#2A374A',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderColor: '#2A374A',
    //position: 'relative'
  }
}
export {CardSection};
