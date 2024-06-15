"use client";
import DaysList from "@/components/further/dayslist";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";
import { useSession } from "next-auth/react";
import Ad from "@/components/ad";

const Further = () => {
  const cityName = useAppSelector((state) => state.location_slice.city);
  const lat = useAppSelector((state) => state.location_slice.lat);
  const lon = useAppSelector((state) => state.location_slice.lon);
  const [weather, setWeather] = useState<furtureData | null>(null);
  const { data: session } = useSession();

  // const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [cityName]);

  return (
    <>
      {session ? (
        <div className="flex mt-5">
          <div className="flex-1 w-2/3">
            <p>
              City: <span className="text-4xl ml-3">{cityName}</span>
            </p>
            <DaysList weather={weather} />
          </div>
          <div className="w-1/3">
            <Ad />
          </div>
        </div>
      ) : (
        <div className="my-20 text-red-400 text-center">
          log in to check more detail
        </div>
      )}
    </>
  );
};

export default Further;
