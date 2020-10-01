import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import Searchbar from "../searchbar/searchbar.component";

import { HeaderContainer, UserContainer } from "./header.styles";

const Header = ({ currentUser }) => {


  return (
    <HeaderContainer>
      <Searchbar />
      <UserContainer>
        <i className="fas fa-user"></i>
        {currentUser.displayName}
      </UserContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
