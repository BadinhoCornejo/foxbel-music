import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentSong } from "../../redux/song/song.selectors";

import {
  PlayerContainer,
  ControlsContainer,
  NoSong,
  Song,
  CoverSong,
  SongInfo,
} from "./player.styles";
import { VolumeContainer } from "./volume.styles";

const Player = ({ currentSong }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audio = useRef("audio_tag");

  const renderSong = () =>
    currentSong ? (
      <Song>
        <CoverSong src={currentSong.cover} alt="song" />
        <SongInfo>
          {currentSong.songTitle}
          <span>{`${currentSong.artistName} - ${currentSong.title}`}</span>
        </SongInfo>
      </Song>
    ) : (
      <NoSong />
    );

  const toggleAudio = () => {
    if (currentSong && audio.current.paused) {
      setPlaying(true);
      audio.current.play();
    } else {
      setPlaying(false);
      audio.current.pause();
    }
  };

  const handleVolume = (vol) => {
    setVolume(vol);
    audio.current.volume = vol;
  };

  useEffect(() => {
    if (currentSong && playing) toggleAudio();
  }, [currentSong]);

  return (
    <PlayerContainer>
      {renderSong()}
      <audio
        ref={audio}
        onEnded={() => {
          setPlaying(false);
        }}
        src={currentSong ? currentSong.preview : ""}
      />
      <ControlsContainer>
        <span className="prev">
          <i className="fas fa-step-backward"></i>
        </span>

        <span
          className="play"
          onClick={() => {
            toggleAudio();
          }}
        >
          <span className={!playing ? "" : "hide"}>
            <i className="fas fa-play"></i>
          </span>
          <span className={!playing ? "hide" : ""}>
            <i className="fas fa-pause"></i>
          </span>
        </span>

        <span className="next">
          <i className="fas fa-step-forward"></i>
        </span>
      </ControlsContainer>

      <VolumeContainer>
        <input
          value={Math.round(volume * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(event) => handleVolume(event.target.value / 100)}
        />

        <i className="fas fa-volume-down"></i>
      </VolumeContainer>
    </PlayerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentSong: selectCurrentSong,
});

export default connect(mapStateToProps)(Player);
