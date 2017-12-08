// 1 reducer for all authentication purposes
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCES, LOGIN_USER_FAIL, LOGIN_USER} from './../actions/types.js';
const INITIAL_STATE = {
  email:'',
  password:'',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}; //make a new project, take all properties and give email payload

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case LOGIN_USER:
      return{...state, loading: true, error:''}

    case LOGIN_USER_SUCCES:
      return {...state, ...INITIAL_STATE, user: action.payload,};

    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication failed!', password: '', loading :false}

    default:
      return state;
  }
};
