import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {BEERLEVELS_FETCH} from './types.js';
import data from './../data/data.json';

const INITIAL_STATE = data;

export const levelsFetch = (state = INITIAL_STATE) => {
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
