import { BEERLEVELS_FETCH, SELECT_LEVEL, SELECT_BEER, SEND_DATA, COMPLETED, UPDATE_DATA} from './../actions/types.js';
import data from './../data/data.json'

const INITIAL_STATE = {
  levels: data,
  selectedLevel: null,
  selectedBeer: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEERLEVELS_FETCH: {
      console.log(action.payload)
      if (action.payload ===null) return INITIAL_STATE;
      return {...state, levels: action.payload}
    }
    case SELECT_LEVEL:
      return {...state, selectedLevel: action.payload}
    case SELECT_BEER:
      return {...state, selectedBeer: action.payload}
    case SEND_DATA:
      return state;
    case UPDATE_DATA:
      return state;
    case COMPLETED:
      const {selectedBeer, selectedLevel} = action.payload
      return {...state, selectedBeer: selectedBeer, selectedLevel: selectedLevel}
    default:
      return state;

  }
}
