import React from "react";

import {
  SidebarContainer,
  SidebarLogo,
  Subtitle,
  NavItemsContainer,
} from "./sidebar.styles";

import logo from "../../assets/foxbel-music@3x.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogo src={logo} alt="logo" />
      <Subtitle>Mi Librería</Subtitle>
      <NavItemsContainer>
        <li className="active">
          <div></div>Recientes
        </li>
        <li>Artistas</li>
        <li>Álbums</li>
        <li>Canciones</li>
        <li>Estaciones</li>
      </NavItemsContainer>
      <Subtitle>Playlist</Subtitle>
      <NavItemsContainer>
        <li>Metal</li>
        <li>Para bailar</li>
        <li>Rock 90s</li>
        <li>Baladas</li>
      </NavItemsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
