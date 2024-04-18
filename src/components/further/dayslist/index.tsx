import React, { useEffect, useState } from "react";
import DayCard from "../daycard";

const DaysList = ({ weather }: { weather: furtureData | null }) => {
  const [data, setData] = useState<furtureItem[]>([]);

  useEffect(() => {
    //if weather is valid,ther do this
    if (weather) {
      const _array = weather.list.filter((_, index) => index % 8 === 4); //filter to select valid data
      setData(_array); // pass results to list
      // console.log(_array);
    }
  }, [weather]); //will update when first and weather changed

  //if weather is invalid, return the loading
  if (!weather) {
    return <div>Loading</div>;
  }

  //loop to value the children components
  return (
    <div>
      {data.map((item, index) => (
        <DayCard key={index} weather={item} />
      ))}
    </div>
  );
};

export default DaysList;
