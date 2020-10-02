import SongActionTypes from "./song.types";

export const setCurrentSong = (song) => ({
  type: SongActionTypes.SET_CURRENT_SONG,
  payload: song,
});
