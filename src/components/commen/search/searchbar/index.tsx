"use client";
import React from "react";

const SearchBar = ({
  setResults,
  setIsDisplay,
}: {
  setResults: any;
  setIsDisplay: any;
}) => {
  async function FetchData(value: string) {
    //if the keyword is false, skip to fetch db
    if (!value) {
      return null;
    }
    // fetch db with keywords as "city"
    const dataByResponse = await fetch(`http://localhost:3000/api/db/${value}`);
    if (!dataByResponse.ok) {
      throw new Error(`faild to fetch city with name${value}`);
    }

    //format the results to json and pass value to resultsList by setResults
    const text = dataByResponse.json().then((data) => {
      // console.log(data);
      setResults(data);
    });
  }

  //check the input value,if equal null,skip fetch to set results as null
  const HandleChange = (value: string) => {
    //if value is null,return and set shut down the resultlist
    if (value === "") {
      setIsDisplay(false);
      return;
    }
    // if value is letter, will show the results list and fetchdata ,or will dishow the resultlist
    if (/^[a-zA-Z]*$/.test(value)) {
      FetchData(value);
      setIsDisplay(true);
    } else setIsDisplay(false);
  };

  // to check the keydown , only receive the letters and backspace, others will be prevent
  const HandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key.toLowerCase(); // format input to lowercase
    const isLetter = /^[a-z]$/i.test(key); //check input whether is letter
    const isBackspace = key === "backspace"; //keep the "Backspace" input
    if (!isLetter && !isBackspace) {
      e.preventDefault();
    }
  };

  const HandleBlur = () => {
    setTimeout(() => {
      setIsDisplay(false);
    }, 200);
  };

  return (
    <label className="input input-bordered flex items-center gap-2 w-96 h-8">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        onKeyDown={HandleKeyDown}
        onBlur={HandleBlur}
        onChange={(e) => HandleChange(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

export default SearchBar;
