import React from "react";
import Link from "next/link";

import { Album } from "../types";

interface Props {
  album: Album;
}

export const AlbumThumbnail: React.FC<Props> = ({
  album: { coverArt, title, rank, artist },
}) => {
  const shorten = (value) => {
    if (value.length > 20) {
      return `${value.substring(0, 20)}...`;
    }
    return value;
  };

  return (
    <Link href={`/albums/${rank}`}>
      <a className="album-thumbnail">
        <img src={coverArt} alt={title} className="w-full rounded-b-full md:h-42.5" />
        <p className="rank">{rank}</p>

        <div className="mt-2 mb-4 mx-3">
          <p className="text-xl">{shorten(title)}</p>
          <p className="artist-name">{shorten(artist.name)}</p>
        </div>
      </a>
    </Link>
  );
};

export default AlbumThumbnail;
