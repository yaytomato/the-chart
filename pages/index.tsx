import Head from "next/head";
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SortOption from "../components/SortOption";
import Top100Chart from "../components/Top100Chart";
import SearchResult from "../components/SearchResult";

import { useTop100Chart } from "../api/album";

export const Home = () => {
  const { chart, isLoading, isError } = useTop100Chart();

  const [sortedChart, setSortedChart] = useState(chart);
  const [keyword, setKeyword] = useState("");

  if (isLoading || isError) return null;

  return (
    <div className="responsive-container">
      <NavBar />
      <div className="flex justify-between">
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <SortOption chart={chart} setSortedChart={setSortedChart} />
      </div>

      {keyword.length ? (
        <SearchResult
          searched={sortedChart.filter((album) =>
            album.title.includes(keyword)
          )}
        />
      ) : (
        <Top100Chart chart={sortedChart} />
      )}
    </div>
  );
};

export default Home;
