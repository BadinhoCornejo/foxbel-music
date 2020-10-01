import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 330px auto;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
