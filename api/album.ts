import axios from "axios";

import { Album } from "../types";

const formatRawAlbumData = (rawData, rank): Album => {
  return {
    rank,
    title: rawData["im:name"].label,
    artist: {
      name: rawData["im:artist"].label,
      link: rawData["im:artist"].attributes?.href || null,
    },
    trackCount: rawData["im:itemCount"].label,
    genre: rawData.category.attributes.label,
    releaseDate: rawData["im:releaseDate"].label,
    publisher: rawData.rights.label,
    price: rawData["im:price"].label,
    coverArt: rawData["im:image"][2].label,
  };
};

export const getTop100Chart = async () => {
  const { data } = await axios.get(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );

  const chart = data.feed.entry.map((rawAlbum, i) => {
    return formatRawAlbumData(rawAlbum, i + 1);
  });
  return chart;
};

export const getAlbum = async (rank: number) => {
  const { data } = await axios.get(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );

  const rawAlbum = data.feed.entry[rank - 1];
  return formatRawAlbumData(rawAlbum, rank);
};
