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

const SearchBar = ({ keyword, setKeyword }) => (
  <input
    type="text"
    placeholder="앨범명을 검색하세요"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
  />
);

const AlbumThumbnailList = ({ list }) => (
  <div className="grid grid-cols-4">
    {list.map((album) => (
      <AlbumThumbnail key={album.rank} album={album} />
    ))}
  </div>
);

const Top100Chart = ({ chart }) => {
  return (
    <React.Fragment>
      <p>Top 100 Chart</p>

      <AlbumThumbnailList list={chart} />
    </React.Fragment>
  );
};

const SearchResult = ({ searched }) => {
  if (searched.length) {
    return <AlbumThumbnailList list={searched} />;
  }

  return <div>일치하는 앨범이 없습니다. 오타는 없었나요?</div>;
};

export const Home = () => {
  const { chart, isLoading, isError } = useTop100Chart();

  const [sortedChart, setSortedChart] = useState(chart);
  const [keyword, setKeyword] = useState("");

  if (isLoading || isError) return null;

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SortOption chart={chart} setSortedChart={setSortedChart} />
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
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
