import { BEERLEVELS_FETCH, SELECT_LEVEL, SELECT_BEER} from './../actions/types.js';
import data from './../data/data.json'

const INITIAL_STATE = {
  levels: data,
  selectedLevel: null,
  selectedBeer: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEERLEVELS_FETCH:
      return INITIAL_STATE;
    case SELECT_LEVEL:
      return {...state, selectedLevel: action.payload}
    case SELECT_BEER:
      return {...state, selectedBeer: action.payload}
    default:
      return state;

  }
}
