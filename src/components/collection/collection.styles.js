import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20.9%);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
