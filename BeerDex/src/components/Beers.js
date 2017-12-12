import React , {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';
import BeerItem from './BeerItem.js';


class Beers extends Component {
  renderBeers () {
    return this.props.selectedLevel.beers.map( beer =>
      <BeerItem key={beer.name} beer = {beer} style = {{flex:1}}/>
    )
  }

  render () {
    return (
      <ScrollView contentContainerStyle = {styles.container}>
          {this.renderBeers()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({beer}) => {
  const {selectedLevel, levels} = beer;
  return {selectedLevel, levels};
};

const styles = {
  container: {
    paddingTop: 50,
    backgroundColor: "#2A374A"
  }
}

export default connect(mapStateToProps)(Beers);
