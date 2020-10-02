import styled from "styled-components";

export const CoverContainer = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: #fff;
      font-size: 24px;
    }
  }

  &:hover .overlay {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
`;
