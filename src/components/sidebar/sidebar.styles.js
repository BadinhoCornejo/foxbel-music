import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 100vh;
  position: fixed;

  background-color: #662323;
  color: white;
  font-family: "Quicksand";
`;

export const SidebarLogo = styled.img`
  align-self: center;
  width: 250px;
  height: 59px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Subtitle = styled.span`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  margin-left: 40px;
`;

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding-left: 0px;

  li {
    list-style: none;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 40px;
    cursor: pointer;

    &.active {
      display: flex;
      color: #e86060;
      font-weight: bold;

      div {
        position: absolute;
        width: 5px;
        height: 20px;
        background-color: #e86060;
        left: 0px;
      }
    }
  }
`;
