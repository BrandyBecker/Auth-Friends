import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADDING_SMURF_START = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"


export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      "http://localhost:3000/api/friends"
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.friends }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addFriend = (friend) => dispatch => {
    //dispatch({type: ADDING_SMURF_START})
    axios
        .post("http://localhost:3000/friends", friend)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: res
            })
        })
        .catch(err => console.log(err))

}