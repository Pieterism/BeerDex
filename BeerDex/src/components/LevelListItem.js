import React, {Component} from 'react';
import { Text , TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {levelSelected} from './../actions';


class LevelListItem extends Component {

renderDescription() {
  if (this.props.level.free){
    return (
      <Text style={styles.descriptionStyle}>
        {this.props.level.description}
      </Text>
    );
  }

  return (
    <Text style={styles.descriptionStyle}>
      You still have lots to learn young padawan!
    </Text>
  )
}

onButtonPress () {
  if (this.props.level.free){
    const {level} = this.props
    this.props.levelSelected(level);
    Actions.Beers();
  }
}

render () {

  return (
    <TouchableWithoutFeedback
      onPress = {this.onButtonPress.bind(this)}
    >
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {this.props.level.title}
          </Text>
        </CardSection>

        <CardSection>
          {this.renderDescription()}
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    fontSize: 12,
    paddingLeft: 35
  }
};

const  mapStateToProps = ({beer}) => {
  const {levels} = beer;
  return levels;
};

export default connect(mapStateToProps, {levelSelected})(LevelListItem);
