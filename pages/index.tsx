import Head from "next/head";
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import Utils from "../components/Utils";
import Top100Chart from "../components/Top100Chart";
import SearchResult from "../components/SearchResult";

import { getTop100Chart } from "../api/album";

export const Home = ({ chart }) => {
  const [sortedChart, setSortedChart] = useState(chart);
  const [keyword, setKeyword] = useState("");

  return (
    <div className="responsive-container">
      <NavBar />

      <p className="heading">Top 100 Chart</p>

      <Utils
        keyword={keyword}
        setKeyword={setKeyword}
        chart={chart}
        setSortedChart={setSortedChart}
      />

      {keyword.length ? (
        <SearchResult
          searched={sortedChart.filter((album) =>
            album.title.toLowerCase().includes(keyword.toLowerCase())
          )}
        />
      ) : (
        <Top100Chart chart={sortedChart} />
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const chart = await getTop100Chart();
  return { props: { chart } };
}

export default Home;
