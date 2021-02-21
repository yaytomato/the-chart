import React from "react";

import SearchBar from "./SearchBar";
import SortOption from "./SortOption";

import { Album } from "../types";

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  chart: Album[];
  setSortedChart: (chart: Album[]) => void;
}

export const Utils: React.FC<Props> = ({
  keyword,
  setKeyword,
  chart,
  setSortedChart,
}) => (
  <div className="mt-4 flex justify-between">
    <SearchBar keyword={keyword} setKeyword={setKeyword} />
    {keyword.length ? null : (
      <SortOption chart={chart} setSortedChart={setSortedChart} />
    )}
  </div>
);

export default Utils;
