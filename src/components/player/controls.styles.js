import styled from "styled-components";

export const ControlsContainer = styled.div`
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .play {
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7676;
    border-radius: 50%;

    &:hover {
      width: 60px;
      height: 60px;
      i {
        font-size: 20.5px;
      }
    }
  }

  i {
    font-size: 20px;
    color: white;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 80px;
    i {
      font-size: 16px;
    }

    .play {
      width: 30px;
      height: 30px;

      &:hover {
        width: 31px;
        height: 31px;

        i {
          font-size: 17px;
        }
      }
    }
  }

  .hide {
    display: none;
  }
`;
