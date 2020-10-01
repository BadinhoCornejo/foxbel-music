import styled, { css } from "styled-components";

const controlStyles = css`
  background-color: #eb5757;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ca4b4b;

  padding: 11px 15px 11px 10px;
  border-radius: 12px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 20px;
`;

export const Label = styled.label`
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
`;

export const FormInput = styled.input`
  width: 250px;

  color: white;

  margin-top: 8px;

  outline: none;
  border-style: none;
  appearance: none;

  ${controlStyles};
`;

export const ButtonContainer = styled.button`
  width: 250px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;

  color: white;

  border: none;
  outline: none;
  cursor: pointer;

  ${controlStyles};

  &:hover {
    background-color: rgba(235, 87, 87, 0.73);
  }
`;
