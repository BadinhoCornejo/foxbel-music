import styled from "styled-components";

export const VideoItemContainer = styled.div`
  width: 160px;
  position: relative;
`;

export const CoverContainer = styled.div`
  width: 100%;
  height: 206px;
  position: relative;
`;

export const VideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding-top: 8px;
  font-family: "Quicksand";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #555555;

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
    padding-top: 4px;
  }
`;
