import React, {Component} from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class LevelListItem extends Component {
  render () {

    return (
      <CardSection>
        <Text style = {styles.titleStyle}>
          Beer!
        </Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default LevelListItem;
