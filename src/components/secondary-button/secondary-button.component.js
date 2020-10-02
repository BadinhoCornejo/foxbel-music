import React from "react";

import { ButtonContainer } from "./secondary-button.styles";

const SecondayButton = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default SecondayButton;
