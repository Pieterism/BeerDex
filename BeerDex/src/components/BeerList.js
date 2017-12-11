import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import {levelsFetch} from '../actions';
import LevelListItem from './LevelListItem.js';
import data from './../data/data.json';

class BeerList extends Component {

  renderLevels() {
    return this.props.levels.map( level =>
      <LevelListItem key={level.number} level = {level} />
    )
  }

  render () {
    return (
      <View style = {styles.container}>
        <ScrollView style = {{flex:1}}>
          {this.renderLevels()}
        </ScrollView>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A374A",
    flex: 1,
    paddingTop: 50
  },

  text: {
    color: "#fff",
    fontSize:18,
    fontFamily: 'Andy Bold'
  }

});

const mapStateToProps = ({beer}) => {
  const {levels} = beer;
  return levels;
};

export default connect (mapStateToProps, {levelsFetch} )(BeerList);
