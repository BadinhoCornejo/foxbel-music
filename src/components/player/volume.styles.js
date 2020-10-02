import styled from "styled-components";

export const VolumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  margin-right: 40px;

  i {
    color: #fff;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100px;
    margin-right: 10px;
    margin-left: 10px;
    i {
      font-size: 16px;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100px;
    background: inherit;
    @media (max-width: 768px) {
      width: 70px;
    }
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100px;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #662323;
    background: #fff;
    border-radius: 5px;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px #662323;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #662323;
  }

  input[type="range"]::-moz-range-track {
    width: 100px;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #662323;
    background: #fff;
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 1px #662323;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    width: 100px;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 0px 0px 1px #662323;
    height: 13px;
    width: 4px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;
