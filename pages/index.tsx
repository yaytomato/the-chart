import Head from "next/head";
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import AlbumThumbnail from "../components/AlbumThumbnail";

const Top100Chart = ({ chart }) => (
  <React.Fragment>
    <div className="flex">
      <div>filter</div>
      <div>search bar</div>
    </div>

    <div className="grid grid-cols-4">
      {chart.map((album) => (
        <AlbumThumbnail album={album} />
      ))}
    </div>
  </React.Fragment>
);

const SearchResult = ({ searched }) => <div>search result</div>;

export const Home = () => {
  // temp with fake data (will be replaced with swr hook)
  const [chart, setChart] = useState([
    {
      rank: 1,
      title: "25",
      artist: {
        name: "Adele",
        link: "https://music.apple.com/us/artist/adele/262836961",
      },
      trackCount: 5,
      genre: "Pop",
      releaseDate: "2021-02-19T00:00:00-07:00",
      publisher: "℗ 2021 Big Machine Label Group, LLC",
      price: "$8.99",
      coverArt:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5b/9b/bf/5b9bbf44-dc8a-9ee2-7e5c-42723a00fd74/21BMR0002226.rgb.jpg/170x170bb.png",
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState([]);

  return (
    <div>
      <NavBar />

      {keyword.length ? (
        <SearchResult searched={searched} />
      ) : (
        <Top100Chart chart={chart} />
      )}
    </div>
  );
};

export default Home;
