import axios from "axios";
import useSWR from "swr";

import { Album } from "../types";

const get = (url) => axios.get(url).then((res) => res.data);

const formatRawAlbumData = (rawData, rank): Album => {
  return {
    rank,
    title: rawData["im:name"].label,
    artist: {
      name: rawData["im:artist"].label,
      link: rawData["im:artist"].attributes?.href,
    },
    trackCount: rawData["im:itemCount"].label,
    genre: rawData.category.attributes.label,
    releaseDate: rawData["im:releaseDate"].label,
    publisher: rawData.rights.label,
    price: rawData["im:price"].label,
    coverArt: rawData["im:image"][2].label,
  };
};

export const useTop100Chart = (): {
  chart: Album[];
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, error } = useSWR(
    `https://itunes.apple.com/us/rss/topalbums/limit=100/json`,
    get
  );

  const chart = [];
  let rawAlbum;
  let formattedAlbum;

  if (data) {
    for (let rank = 1; rank <= data.feed.entry.length; rank++) {
      rawAlbum = data.feed.entry[rank - 1];
      formattedAlbum = formatRawAlbumData(rawAlbum, rank);
      chart.push(formattedAlbum);
    }
  }

  return {
    chart,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useAlbum = (
  rank
): { album: Album; isLoading: boolean; isError: boolean } => {
  const { data, error } = useSWR(
    `https://itunes.apple.com/us/rss/topalbums/limit=100/json`,
    get
  );

  let formattedAlbum;
  if (data) {
    const rawAlbum = data.feed.entry[rank - 1];
    formattedAlbum = formatRawAlbumData(rawAlbum, rank);
  }

  return {
    album: formattedAlbum,
    isLoading: !error && !data,
    isError: error,
  };
};
