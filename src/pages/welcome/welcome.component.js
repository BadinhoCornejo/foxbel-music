import React from "react";

import WelcomeForm from "../../components/welcome-form/welcome-form.component";

import { WelcomeContainer, WelcomeHeader } from "./welcome.styles";

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <WelcomeHeader>¡Bienvenido a Foxbel Music!</WelcomeHeader>
      <WelcomeForm />
    </WelcomeContainer>
  );
};

export default WelcomePage;
