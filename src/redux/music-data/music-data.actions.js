import MusicDataActionTypes from "./music-data.types";

export const fetchMusicDataStart = (searchQuery) => ({
  type: MusicDataActionTypes.FETCH_MUSIC_DATA_START,
  payload: searchQuery,
});

export const fetchMusicDataSuccess = (data) => ({
  type: MusicDataActionTypes.FETCH_MUSIC_DATA_SUCCESS,
  payload: data,
});

export const fetchMusicDataFailure = (errorMessage) => ({
  type: MusicDataActionTypes.FETCH_MUSIC_DATA_FAILURE,
  payload: errorMessage,
});
