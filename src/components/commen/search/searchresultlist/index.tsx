import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { setLocation } from "@/app/redux/feathers/location_slice";

//define a type item
type ResultItem = {
  id: string;
  city: string;
  lat: number;
  lon: number;
};
//define a type array
type ResultData = ResultItem[];

//receive 2 args as resultData and isDisplay  from the searchBar
const SearchResultList = ({
  results,
  isDisplay,
}: {
  results: ResultData;
  isDisplay: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>(); // create a dispatch to invoke reducer
  if (!isDisplay) {
    return;
  }

  return (
    //list the data as city names on page with response,if result is null, return the "no results"
    <div className="result-list ">
      {results.length > 0 ? (
        results.map((result) => (
          <div
            key={result.id}
            className="result-item"
            onClick={() =>
              dispatch(
                setLocation({
                  city: result.city,
                  lat: result.lat,
                  lon: result.lon,
                })
              )
            }
          >
            {result.city}
          </div>
        ))
      ) : (
        <div className="ml-6">.....</div>
      )}
    </div>
  );
};

export default SearchResultList;
