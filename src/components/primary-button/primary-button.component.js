import React from "react";

import { ButtonContainer } from "./primary-button.styles";

const PrimaryButton = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default PrimaryButton;
