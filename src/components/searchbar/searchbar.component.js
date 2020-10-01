import React from "react";

import { SearchbarContainer, SearchInput } from "./searchbar.styles";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchInput name="search" placeholder="Buscar" />
      <i className="fas fa-search"></i>
    </SearchbarContainer>
  );
};

export default Searchbar;
