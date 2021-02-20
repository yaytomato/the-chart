import React from "react";
import Link from "next/link";

import { Album } from "../types";

interface Props {
  album: Album;
}

export const AlbumThumbnail: React.FC<Props> = ({
  album: { coverArt, title, rank, artist },
}) => {
  return (
    <Link href={`/albums/${rank}`}>
      <a className="relative bg-red-100 text-right">
        <img src={coverArt} alt={title} />
        <p className="absolute top-0 text-3xl">{rank}</p>

        <p>{title}</p>
        <p>{artist.name}</p>
      </a>
    </Link>
  );
};

export default AlbumThumbnail;
