//import {} from actions
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: ""
};

//reducer takes in :state = initialState, action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        friends: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;