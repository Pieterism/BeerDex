import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { CardSection } from './common';

class BeerItem extends Component {
  render () {
    const {name, percentage, description, image} = this.props.beer;
    return (
      <View style={styles.containerStyle}>
        <View style = {styles.imageContainerStyle}>
          <Image
            style = {styles.imageStyle}
            source = {{uri : image}}
          />
          <Text>
            Alcohol percentage: {percentage}
          </Text>
        </View>
        <View style = {styles.textContainerStyle}>
          <CardSection>
            <Text style = {styles.titleStyle}>
              {name}
            </Text>
          </CardSection>

          <CardSection>
            <Text style = {styles.descriptionStyle}>
              {description}
            </Text>
          </CardSection>

        </View>
      </View>
    );
  }
}

const styles = {
  imageContainerStyle: {
    flex : 2,
  },
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  textContainerStyle: {
    flex: 3,
  },
  containerStyle: {
    flex :1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    fontSize: 12,
    paddingLeft: 35
  }
};

export default BeerItem;
