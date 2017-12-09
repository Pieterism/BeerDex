import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class EmplyeeList extends Component {
  render () {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        <Text style = {styles.text}>BEEEEER</Text>
        
      </View>
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A374A",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  text: {
    color: "#fff",
    fontSize:18,
    fontFamily: 'Andy Bold'
  }

});

export default EmplyeeList;
