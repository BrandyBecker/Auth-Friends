
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADDING_FRIEND_START = "ADDING_FRIEND_SUCCESS"
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS"
export const ADDING_FRIENDF_FAILURE = "ADDING_FRIEND_FAILURE"

export const DELETE_SUCCESS = "DELETE_SUCCESS"


export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axiosWithAuth()
    .get(
      "/api/friends"
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addFriend = (friend) => dispatch => {
    //dispatch({type: ADDING_FRIEND_START})
    axiosWithAuth()
        .post("/api/friends", friend)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADDING_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))

}


export const deleteFriend = (friend) => dispatch => {
  return axiosWithAuth()
    .delete(`/api/friends/${friend}`)
    .then(res => dispatch({
      type: DELETE_SUCCESS,
      payload: res.data
    }))
}