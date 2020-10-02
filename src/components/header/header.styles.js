import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;

  @media (max-width: 1040px) {
    margin: 8px;
  }
`;

export const UserContainer = styled.div`
  font-family: "Quicksand";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  height: 100%;
  align-self: center;

  i {
    color: #e86060;
    margin-right: 8px;
  }
`;
