import axios from 'axios';

export const FETCH_CHAR_FETCHING = 'FETCH_CHAR_FETCHING';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';

export const getCharacters = date => dispatch => {
  dispatch({type: FETCH_CHAR_FETCHING});
  
  axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      dispatch({
        type: FETCH_CHAR_SUCCESS,
        payload: response.data.results
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_CHAR_FAILURE,
        payload: error
      })
    })
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
