// import libraries

import React from 'react';
import {Text, View} from 'react-native';

// make Component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style = {viewStyle}>
      <Text style = {textStyle}> {props.headerText} </Text>
    </View>
  );
};

//styling of the Component
const styles = {
  textStyle :{
    fontSize : 24,
    header: 'null'
    
  },
  viewStyle :{
    backgroundColor: '#2A374A',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height :5},
    shadowOpacity: 0.98,
    elevation: 2,
    position: 'relative',
    header: 'null'
  }
};

// make Component available to other parts of the App
 export {Header};
