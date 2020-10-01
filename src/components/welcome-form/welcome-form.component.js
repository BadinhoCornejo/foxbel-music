import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setCurrentUser } from "../../redux/user/user.actions";

import {
  FormContainer,
  FormGroup,
  Label,
  FormInput,
  ButtonContainer,
} from "./welcome-form.styles";

const WelcomeForm = ({ setCurrentUser, history }) => {
  const [user, setUser] = useState({
    displayName: "",
    genre: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentUser(user);
    history.push("/home");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Dinos tu nombre</Label>
          <FormInput
            type="text"
            name="displayName"
            value={user.displayName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>¿Cuál es tu género favorito?</Label>
          <FormInput
            type="text"
            name="genre"
            value={user.genre}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <ButtonContainer>¡A rockear!</ButtonContainer>
      </FormContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(WelcomeForm));
