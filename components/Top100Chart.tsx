import React from "react";

import AlbumThumbnailList from "./AlbumThumbnailList";

import { Album } from "../types";

interface Props {
  chart: Album[];
}

export const Top100Chart: React.FC<Props> = ({ chart }) => (
  <AlbumThumbnailList list={chart} />
);

export default Top100Chart;
