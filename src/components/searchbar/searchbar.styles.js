import styled from "styled-components";

export const SearchbarContainer = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  align-items: center;

  width: 524px;
  height: 36px;
  border-radius: 100px;
  border: solid 1px #828282;

  @media (max-width: 1040px) {
    width: auto;
  }

  i {
    margin-right: 9px;
    color: #bdbdbd;
  }
`;

export const SearchInput = styled.input`
  -webkit-appearance: none;

  flex: 1;

  border: 0;
  margin-left: 7.8px;
  &:focus {
    outline: none;
  }
`;
