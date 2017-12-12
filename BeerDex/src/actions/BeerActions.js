import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {BEERLEVELS_FETCH, SELECT_LEVEL, SELECT_BEER, SEND_DATA, COMPLETED, UPDATE_DATA} from './types.js';
import data from './../data/data.json';


export const levelsFetch = (state) => {
  // return ({
  //   type: BEERLEVELS_FETCH,
  //   payload: data
  // });
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/levelProgress`)
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

// export const sendData = (levels) => {
//   const { currentUser } = firebase.auth();
//   const ref = firebase.database().ref(`/users/${currentUser.uid}/levelProgress`);
//   return (dispatch) => {
//
//       ref.push(levels)
//       .then( () => {
//         dispatch({ type: SEND_DATA});
//         Actions.Beers({ type: 'reset'});
//       });
//   };
// };

export const updateData = (levels) => {
  const { currentUser } = firebase.auth();
  const ref = firebase.database().ref(`/users/${currentUser.uid}/levelProgress`);
  return (dispatch) => {

      ref.update(levels)
      .then( () => {
        dispatch({ type: UPDATE_DATA});
        Actions.Levels({ type: 'reset'});
      });
  };
};

export const completed = ({selectedBeer, selectedLevel}) => {
  return {
    type: COMPLETED,
    payload: {selectedBeer, selectedLevel}
  };
}
