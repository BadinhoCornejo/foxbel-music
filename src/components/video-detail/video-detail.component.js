import React from "react";
import { connect } from "react-redux";

import { setCurrentSong } from "../../redux/song/song.actions";

import Cover from "../cover/cover.component";

import {
  VideoDetailContainer,
  AlbumCover,
  DetailContainer,
  AboutContainer,
  Title,
  RankContainer,
  Story,
  ActionsContainer,
} from "./video-detail.styles";

const VideoDetail = ({
  songTitle,
  album,
  preview,
  rank,
  artistName,
  setCurrentSong,
}) => {
  const { title, cover, cover_big, cover_medium } = album;

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
    <VideoDetailContainer>
      <AlbumCover onClick={handleSong}>
        <Cover image={cover_medium} />
      </AlbumCover>
      <DetailContainer cover_big={cover_big}>
        <AboutContainer>
          <Title>{`${artistName} ${title}`}</Title>
          <RankContainer>
            Lo mejor de {artistName} <span>{rank} seguidores</span>
          </RankContainer>
        </AboutContainer>
        <Story>
          {artistName} is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Story>
        <ActionsContainer>button button dots</ActionsContainer>
      </DetailContainer>
    </VideoDetailContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
});

export default connect(null, mapDispatchToProps)(VideoDetail);
