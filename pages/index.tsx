import Head from "next/head";
import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import AlbumThumbnail from "../components/AlbumThumbnail";

import { useTop100Chart } from "../api/album";

const SortOption = ({ chart, setSortedChart }) => {
  const defaultOption = "rank ASC";
  const [selected, setSelected] = useState(defaultOption);

  useEffect(() => {
    let compare;
    switch (selected) {
      case "rank DESC":
        compare = (a, b) => b.rank - a.rank;
        break;
      case "title ASC":
        compare = (a, b) => a.title.localeCompare(b.title);
        break;
      case "title DESC":
        compare = (a, b) => b.title.localeCompare(a.title);
        break;
      case "releaseDate ASC":
        compare = (a, b) => a.releaseDate.localeCompare(b.releaseDate);
        break;
      case "releaseDate DESC":
        compare = (a, b) => b.releaseDate.localeCompare(a.releaseDate);
        break;
      default:
        break;
    }

    if (selected === defaultOption) {
      setSortedChart(chart);
    } else {
      setSortedChart([...chart].sort(compare));
    }
  }, [selected]);

  return (
    <select onChange={(e) => setSelected(e.target.value)}>
      <option value="rank ASC">랭킹순 (오름차순)</option>
      <option value="rank DESC">랭킹순 (내림차순)</option>
      <option value="title ASC">앨범명순 (오름차순)</option>
      <option value="title DESC">앨범명순 (내림차순)</option>
      <option value="releaseDate ASC">발매일순 (오름차순)</option>
      <option value="releaseDate DESC">발매일순 (내림차순)</option>
    </select>
  );
};

const Top100Chart = ({ chart }) => {
  const [sortedChart, setSortedChart] = useState(chart);

  return (
    <React.Fragment>
      <p>Top 100 Chart</p>
      <div className="flex">
        <SortOption chart={chart} setSortedChart={setSortedChart} />
        <div>search bar</div>
      </div>

      <div className="grid grid-cols-4">
        {sortedChart.map((album) => (
          <AlbumThumbnail key={album.rank} album={album} />
        ))}
      </div>
    </React.Fragment>
  );
};

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
