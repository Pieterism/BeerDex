import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import BeerReducer from './BeerReducer';

export default combineReducers({
  auth: AuthReducer,
  beer: BeerReducer
});
