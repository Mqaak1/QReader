import { userTypes } from "../actions/types";

const INITIAL_STATE = {
    user: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      
    case userTypes.USER_LOADED:
        return { ...state, user: action.payload };  

    case userTypes.USER_UPDATE:
        return { ...state, user: {...state.user, ...action.payload} }; 
        
    default:
      return state;
  }
}