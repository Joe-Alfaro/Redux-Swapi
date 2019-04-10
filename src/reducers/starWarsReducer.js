import {
  FETCH_CHAR_FETCHING, 
  FETCH_CHAR_SUCCESS, 
  FETCH_CHAR_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  error: null,
  isFetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_FETCHING:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
