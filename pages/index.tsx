import Head from "next/head";
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import AlbumThumbnail from "../components/AlbumThumbnail";

import { useTop100Chart } from "../api/album";

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
  const { chart, isLoading, isError } = useTop100Chart();

  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState([]);

  if (isLoading || isError) return null;

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
