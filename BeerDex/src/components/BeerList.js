import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import {levelsFetch} from '../actions';
import LevelListItem from './LevelListItem.js';
import data from './../data/data.json';

class BeerList extends Component {
  componentWillMount () {
    // need action for data retrieval!
    this.props.levelsFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props
    //this.props are the old props
    this.createDataSource(this.props);
  }

  createDataSource({beer}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !==r2
    });
    this.dataSource = ds.cloneWithRows(this.props);
  }

  renderRow(beer) {
    return <LevelListItem employee= {beer} />;
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource= {this.dataSource}
        renderRow= {this.renderRow}
      />
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

const mapStateToProps = state => {
  const levels = _.map(state.levels, (val,uid) => {
    return { ...val, uid}
  });

  return { levels};
};

export default connect (mapStateToProps, {levelsFetch} )(BeerList);
