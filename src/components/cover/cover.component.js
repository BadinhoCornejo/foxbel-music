import React from "react";

import { CoverContainer } from "./cover.styles";

const Cover = ({ image }) => {
  return (
    <CoverContainer>
      <img src={image} alt="cover"></img>
      <div className="overlay">
        <i className="fas fa-play"></i>
      </div>
    </CoverContainer>
  );
};

export default Cover;
