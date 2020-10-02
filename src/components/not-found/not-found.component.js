import React from "react";

import { NotFoundContainer, TextContainer } from "./not-found.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <i className="fas fa-search"></i>
      <TextContainer>No se encontraron resultados</TextContainer>
    </NotFoundContainer>
  );
};

export default NotFound;
