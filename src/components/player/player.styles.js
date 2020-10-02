import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  align-content: center;
  overflow: hidden;
  transition: all 500ms;
  left: 0;
  width: 100%;
  height: 100px;
  background: #eb5757;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
`;

export const ControlsContainer = styled.div`
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .play {
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7676;
    border-radius: 50%;

    &:hover {
      width: 60px;
      height: 60px;
      i {
        font-size: 20.5px;
      }
    }
  }

  i {
    font-size: 20px;
    color: white;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }

  .hide {
    display: none;
  }
`;

export const NoSong = styled.div`
  width: 180px;
`;

export const Song = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
`;

export const CoverSong = styled.img`
  width: 100px;
  height: 100%;
`;

export const SongInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  width: auto;
  padding-left: 16px;

  font-family: Quicksand;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #fff;

  span {
    margin-top: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
  }
`;
