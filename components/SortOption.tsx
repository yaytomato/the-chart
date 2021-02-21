import React, { useState, useEffect } from "react";

import { Album } from "../types";

interface Props {
  chart: Album[];
  setSortedChart: (chart: Album[]) => void;
}

export const SortOption: React.FC<Props> = ({ chart, setSortedChart }) => {
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
    <select onChange={(e) => setSelected(e.target.value)} className="sort-option-btn">
      <option value="rank ASC">랭킹순 (오름차순)</option>
      <option value="rank DESC">랭킹순 (내림차순)</option>
      <option value="title ASC">앨범명순 (오름차순)</option>
      <option value="title DESC">앨범명순 (내림차순)</option>
      <option value="releaseDate ASC">발매일순 (오름차순)</option>
      <option value="releaseDate DESC">발매일순 (내림차순)</option>
    </select>
  );
};

export default SortOption;
