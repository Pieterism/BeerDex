import React , {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';
import BeerItem from './BeerItem.js';
import Map from './Map.js';
import Button from './common';



class Beers extends Component {
  renderBeerDetails () {

  }

  renderButton () {
    const {completed} = this.props.selectedBeer;

    if (completed) {
      return (
        <View>
          <Text>
            Hier Moet een map komen kejet
          </Text>
          <Text>
            Hier moet een foto komen!
          </Text>
        </View>
      );
    }
    return (
      <Text>
        Hier moet een button komen
      </Text>
    );
  }

  render () {
    const {name, percentage, description, image, brewery} = this.props.selectedBeer;
    return (
      <View style = {{paddingTop: 50}}>

        <View>
          <Text style = {styles.titleStyle}>
            {name}
          </Text>

          <Image
            style = {styles.imageStyle}
            source = {{uri : image}}
          />
        </View>

        <View>
          <Text>
            {brewery}
          </Text>
          <Text>
            {percentage}
          </Text>
          <Text>
            {description}
          </Text>
          {this.renderButton()}
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
