import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {BEERLEVELS_FETCH, SELECT_LEVEL, SELECT_BEER, SEND_DATA} from './types.js';
import data from './../data/data.json';


export const levelsFetch = (state) => {
  // return ({
  //   type: BEERLEVELS_FETCH,
  //   payload: data
  // });
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/levels`)
      .on('value', snapshot => {
        dispatch({type: BEERLEVELS_FETCH, payload: snapshot.val()});
      });
  };
};

export const levelSelected = (selectedLevel) => {
  return {
    type: SELECT_LEVEL,
    payload: selectedLevel
  };
}

export const beerSelected = (selectedBeer) => {
  return {
    type: SELECT_BEER,
    payload: selectedBeer
  };
}

export const sendData = (levels) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/levelProgress`)
      .push(levels)
      .then( () => {
        dispatch({ type: SEND_DATA});
        Actions.Beers({ type: 'reset'});
      });
  };
};
