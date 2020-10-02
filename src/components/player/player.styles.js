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
