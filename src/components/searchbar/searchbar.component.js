import React from "react";
import { connect } from "react-redux";

import { fetchMusicDataStart } from "../../redux/music-data/music-data.actions";

import { SearchbarContainer, SearchInput } from "./searchbar.styles";

const Searchbar = ({ fetchMusicDataStart }) => {
  const handleChange = (event) => {
    const value = event.target.value;

    fetchMusicDataStart(value);
  };

  return (
    <SearchbarContainer>
      <SearchInput name="search" placeholder="Buscar" onChange={handleChange} />
      <i className="fas fa-search"></i>
    </SearchbarContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMusicDataStart: (searchQuery) =>
    dispatch(fetchMusicDataStart(searchQuery)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
