import { BEERLEVELS_FETCH } from './../actions';
import data from './../data/data.json'

const INITIAL_STATE = {
  levels: data
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEERLEVELS_FETCH:
      return state;
    default:
      return state;

  }
}
