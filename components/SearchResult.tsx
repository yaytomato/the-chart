import React from "react";

import AlbumThumbnailList from "./AlbumThumbnailList";

import { Album } from "../types";

interface Props {
  searched: Album[];
}

export const SearchResult: React.FC<Props> = ({ searched }) => {
  if (searched.length) {
    return <AlbumThumbnailList list={searched} />;
  }

  return <div>일치하는 앨범이 없습니다. 오타는 없었나요?</div>;
};

export default SearchResult;
