import React , {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';
import BeerItem from './BeerItem.js';
import Map from './Map.js';



class Beers extends Component {
  renderBeerDetails () {

  }

  render () {
    const {name, percentage, description, image} = this.props.selectedBeer;
    return (
      <View style = {{paddingTop : 50}}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            style = {styles.imageStyle}
            source = {{uri : image}}
          />

          <Text style = {styles.titleStyle}>
            {name}
          </Text>
        </View>

        <View>
          <Text>
            {description}
          </Text>
        </View>

      </View>
    );
  }
}

const mapStateToProps = ({beer}) => {
  const {selectedLevel, selectedBeer} = beer;
  return {selectedLevel, selectedBeer};
};

const styles = {
  container: {
    paddingTop: 50,
    backgroundColor: "#2A374A"
  },
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  titleStyle: {
    fontSize: 24,
    paddingLeft: 15
  }
}

export default connect(mapStateToProps)(Beers);
