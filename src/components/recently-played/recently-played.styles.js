import styled from "styled-components";

import Collection from "../collection/collection.conponent";

export const Container = styled.div`
  width: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    font-family: 'Quicksand';
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    color: #E86060;

    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const CollectionContainer = styled(Collection)`
  padding-left: 4rem;
`;
