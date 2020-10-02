import React from "react";
import { connect } from "react-redux";

import { setCurrentSong } from "../../redux/song/song.actions";

import Cover from "../cover/cover.component";

import {
  VideoItemContainer,
  CoverContainer,
  VideoDetail,
} from "./video-item.styles";

const VideoItem = ({
  songTitle,
  album,
  preview,
  artistName,
  setCurrentSong,
}) => {
  const { title, cover } = album;

  const handleSong = () => {
    const song = {
      title,
      cover,
      artistName,
      preview,
      songTitle,
    };

    setCurrentSong(song);
  };

  return (
    <VideoItemContainer>
      <CoverContainer onClick={handleSong}>
        <Cover image={cover} />
      </CoverContainer>

      <VideoDetail>
        {songTitle}
        <span>{artistName}</span>
      </VideoDetail>
    </VideoItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
});

export default connect(null, mapDispatchToProps)(VideoItem);
