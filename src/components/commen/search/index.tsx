"use client";
import React, { useState } from "react";
import SearchBar from "./searchbar";
import SearchResultList from "./searchresultlist";

const Search = () => {
  const [results, setResults] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <div className="absolute z-50 ml-12 top-1">
      <SearchBar setResults={setResults} setIsDisplay={setIsDisplay} />
      <SearchResultList results={results} isDisplay={isDisplay} />
    </div>
  );
};

export default Search;
