import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMusicDataCollections } from "../../redux/music-data/music-data.selector";

import VideoDetail from "../video-detail/video-detail.component";
import NotFound from "../not-found/not-found.component";

import { Container, CollectionContainer } from "./recently-played.styles";

const RecentlyPlayed = ({ collections }) => {
  const [dataExists, setDataExists] = useState(false);
  const [videoDetailProps, setVideoDetailProps] = useState({});

  useEffect(() => {
    if (collections && collections.data.length) {
      setDataExists(true);
      const {
        album,
        artist: { name },
        preview,
        rank,
        title,
      } = collections.data[0];

      setVideoDetailProps({ album, name, preview, rank, title });
    } else {
      setDataExists(false);
    }
  }, [collections]);

  return dataExists ? (
    <Container>
      <VideoDetail
        album={videoDetailProps.album}
        artistName={videoDetailProps.name}
        preview={videoDetailProps.preview}
        rank={videoDetailProps.rank}
        songTitle={videoDetailProps.title}
      />
      <h2>Resultados</h2>
      <CollectionContainer collection={collections.data} />
    </Container>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectMusicDataCollections,
});

export default connect(mapStateToProps)(RecentlyPlayed);
