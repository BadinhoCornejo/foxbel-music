import { createSelector } from "reselect";

const selectSong = (state) => state.song;

export const selectCurrentSong = createSelector(
  [selectSong],
  (song) => song.currentSong
);
