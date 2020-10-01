import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import RecentlyPlayed from "../../components/recently-played/recently-played.component";
import Header from "../../components/header/header.component";

import { HomeContainer, SidebarContainer } from "./home.styles";

const HomePage = () => {
  return (
    <HomeContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <div className="container">
        <Header />
        <RecentlyPlayed />
      </div>
    </HomeContainer>
  );
};

export default HomePage;
