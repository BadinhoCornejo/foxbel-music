import React from "react";
import Skeleton from "react-loading-skeleton";

import {
  SpinnerContainer,
  ResultsContainer,
} from "./recently-played-spinner.styles";

const resultsCount = ["", "", "", "", "", "", "", "", "", ""];

const RecentlyPlayedSpinner = (WrappedComponent) => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerContainer>
      <Skeleton width={890} height={250} />
      <ResultsContainer>
        {resultsCount.map((i) => (
          <ResultsContainer>
            <Skeleton width={180} height={180} />
            <Skeleton count={2} />
          </ResultsContainer>
        ))}
      </ResultsContainer>
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default RecentlyPlayedSpinner;
