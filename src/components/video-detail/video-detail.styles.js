import styled from "styled-components";

export const VideoDetailContainer = styled.div`
  width: 1120px;
  height: 280px;
  display: grid;
  grid-template-columns: 250px auto;
  color: #fff;
`;

export const AlbumCover = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
  position: relative;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand";
  padding: 4rem 4rem 2rem 2rem;

  background: linear-gradient(rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)),
    url(${(props) => props.cover_big});
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: 0.5;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 27.5px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white !important;
`;

export const RankContainer = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.5px;
  padding-top: 4px;
  padding-bottom: 4px;
  span {
    font-size: 12px;
    font-weight: 500;
    margin-left: 16px;
  }
`;

export const Story = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
