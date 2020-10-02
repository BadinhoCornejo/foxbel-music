import React from "react";

import VideoItem from "../video-item/video-item.component";

import { CollectionContainer } from "./collection.styles";

const Collection = ({ collection }) => {
  return (
    <CollectionContainer>
      {collection.map((item) => (
        <VideoItem
          key={item.id}
          album={item.album}
          artistName={item.artist.name}
          preview={item.preview}
          songTitle={item.title}
        />
      ))}
    </CollectionContainer>
  );
};

export default Collection;
