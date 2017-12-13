import React , {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';
import BeerItem from './BeerItem.js';
import Map from './Map.js';
import {Button} from './common';
import {sendData, completed, updateData} from './../actions';



class Beers extends Component {
  onButtonPress () {
    const {levels, selectedBeer, selectedLevel} = this.props;
    selectedBeer.completed = true;
    selectedLevel.complete ++;
    if (selectedLevel.complete>=6) {
      levels.levels[selectedLevel.number + 1].free = true;
    }

    console.log(selectedBeer);
    console.log(selectedLevel);
    this.props.completed({selectedBeer, selectedLevel});
    this.props.updateData(levels);
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
      <Button onPress={this.onButtonPress.bind(this)}>Drink</Button>
    );
  }

  render () {
    const {name, percentage, description, image, brewery} = this.props.selectedBeer;
    return (
      <View style = {{paddingTop: 50, flex:1}}>

        <View>
          <Text style = {styles.titleStyle}>
            {name}
          </Text>

          <Image
            style = {styles.imageStyle}
            source = {{uri : image}}
          />
        </View>

        <View style = {{flex:1}}>
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
  const {levels, selectedLevel, selectedBeer} = beer;
  return {levels, selectedLevel, selectedBeer};
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

export default connect(mapStateToProps, {sendData, completed, updateData})(Beers);
