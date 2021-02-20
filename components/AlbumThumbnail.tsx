import React from "react";

interface Props {
  album: {
    rank: number;
    title: string;
    artist: {
      name: string;
      //   link: string;
    };
    // trackCount: number;
    // genre: string;
    // releaseDate: string;
    // publisher: string;
    // price: string;
    coverArt: string;
  };
}

export const AlbumThumbnail: React.FC<Props> = ({
  album: { coverArt, title, rank, artist },
}) => {
  return (
    <div className="relative bg-red-100 text-right">
      <img src={coverArt} alt={title} />
      <p className="absolute top-0 text-3xl">{rank}</p>

      <p>{title}</p>
      <p>{artist.name}</p>
    </div>
  );
};

export default AlbumThumbnail;
