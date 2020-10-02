import SongActionTypes from "./song.types";

const INITIAL_STATE = {
  currentSong: null,
};

const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SongActionTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
