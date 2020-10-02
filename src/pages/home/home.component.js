import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import Player from "../../components/player/player.component";
import RecentlyPlayedContainer from "../../components/recently-played/recently-played.container";
import Header from "../../components/header/header.component";

import { HomeContainer, SidebarContainer, Container } from "./home.styles";

const HomePage = () => {
  return (
    <HomeContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Container>
        <Header />
        <RecentlyPlayedContainer />
      </Container>
      <Player />
    </HomeContainer>
  );
};

export default HomePage;
