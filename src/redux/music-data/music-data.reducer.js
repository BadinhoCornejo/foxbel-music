import MusicDataActionTypes from "./music-data.types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
};

const musicDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MusicDataActionTypes.FETCH_MUSIC_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      };

    case MusicDataActionTypes.FETCH_MUSIC_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default musicDataReducer;
