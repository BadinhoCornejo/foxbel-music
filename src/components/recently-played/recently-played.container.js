import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import RecentlyPlayedSpinner from "../recently-played-spinner/recently-played-spinner.component";
import RecentlyPlayed from "./recently-played.component";

import { selectIsFetchingMusicData } from "../../redux/music-data/music-data.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingMusicData,
});

const RecentlyPlayedContainer = compose(
  connect(mapStateToProps),
  RecentlyPlayedSpinner
)(RecentlyPlayed);

export default RecentlyPlayedContainer;
