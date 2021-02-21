import React from "react";

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const SearchBar: React.FC<Props> = ({ keyword, setKeyword }) => (
  <input
    type="text"
    placeholder="앨범명을 검색하세요"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;
