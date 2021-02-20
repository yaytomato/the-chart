import React from "react";

import AlbumThumbnailList from "./AlbumThumbnailList";

import { Album } from "../types";

interface Props {
  chart: Album[];
}

export const Top100Chart: React.FC<Props> = ({ chart }) => {
  return (
    <React.Fragment>
      <p>Top 100 Chart</p>

      <AlbumThumbnailList list={chart} />
    </React.Fragment>
  );
};

export default Top100Chart;
