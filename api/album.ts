import axios from "axios";
import useSWR from "swr";

const get = (url) => axios.get(url).then((res) => res.data);

export const useTop100Chart = () => {
  const { data, error } = useSWR(
    `https://itunes.apple.com/us/rss/topalbums/limit=100/json`,
    get
  );

  // format raw data
  const chart = [];
  let albumRaw;
  let albumProcessed;

  if (data) {
    for (let i = 0; i < data.feed.entry.length; i++) {
      albumRaw = data.feed.entry[i];

      albumProcessed = {
        rank: i + 1,
        title: albumRaw["im:name"].label,
        artist: {
          name: albumRaw["im:artist"].label,
          link: albumRaw["im:artist"].attributes?.href,
        },
        trackCount: albumRaw["im:itemCount"].label,
        genre: albumRaw.category.attributes.label,
        releaseDate: albumRaw["im:releaseDate"].label,
        publisher: albumRaw.rights.label,
        price: albumRaw["im:price"].label,
        coverArt: albumRaw["im:image"][2].label,
      };
      chart.push(albumProcessed);
    }
  }

  return {
    chart,
    isLoading: !error && !data,
    isError: error,
  };
};
