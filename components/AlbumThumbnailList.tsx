import React from "react";

import AlbumThumbnail from "./AlbumThumbnail";

import { Album } from "../types";

interface Props {
  list: Album[];
}

export const AlbumThumbnailList: React.FC<Props> = ({ list }) => (
  <div className="album-thumbnail-list">
    {list.map((album) => (
      <AlbumThumbnail key={album.rank} album={album} />
    ))}
  </div>
);

export default AlbumThumbnailList;
