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
  // temp (will be replaced with swr hook)
  const [chart, setChart] = useState([]);

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
