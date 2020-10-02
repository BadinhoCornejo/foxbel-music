import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ResultItemContainer = styled.div`
  width: auto; 
`;

export const ResultItemImage = styled.div`
  width: 180px;
  height: 180px;
`;

export const ResultItemText = styled.div`
  width: 86px;
  height: 18px;
  margin-top: 8px;
`;
