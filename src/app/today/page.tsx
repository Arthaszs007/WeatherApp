"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";
import MainDashboard from "@/components/today/main";
import Ad from "@/components/ad";

const Today = () => {
  const cityName = useAppSelector((state) => state.location_slice.city); // get city name  from the reducer of location
  const lat = useAppSelector((state) => state.location_slice.lat); // get current city's lat from reducer of location
  const lon = useAppSelector((state) => state.location_slice.lon); //get current city's lon from reducer of location
  const [weather, setWeather] = useState<weatherState | null>(null); //get and set the weatherData to display on page
  const [air, setAir] = useState<airQuality | null>(null);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [airDesc, setAirDesc] = useState<any>();

  const k = 273.15; //use for counting K to T

  //get weather data
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setWeather(data);
        // console.log(weather);
        if (data.sys) {
          setStart(data.sys.sunrise);
          setEnd(data.sys.sunset);
          // console.log(data);
        }
      });
  }, [cityName, lat, lon]);

  // get airQulity data, data will be refreshed when weather is changed
  useEffect(() => {
    if (weather && weather.sys) {
      fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${process.env.WEATHER_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAir(data); // set airquality data
          setAirDesc(airValue(data.list[0].main.aqi)); // conpute the air quality description by airquality data
        });
    }
  }, [weather]);

  //compute the air to return the quality description
  const airValue = (value: number): string => {
    if (value >= 0 && value <= 50) {
      return "Good";
    } else if (value > 50 && value <= 100) {
      return "Moderate";
    } else if (value > 100 && value <= 150) {
      return "Unhealthy for Sensitive Groups";
    } else if (value > 150 && value <= 200) {
      return "Unhealthy";
    } else if (value > 200 && value <= 300) {
      return "Very Unhealthy";
    } else {
      return "Hazardous";
    }
  };
  if (!weather || !air) {
    return <div>loading</div>;
  }

  return (
    <div className="flex mt-5">
      <div className="flex-1 w-2/3">
        <p>
          City: <span className="text-4xl ml-3">{cityName}</span>{" "}
        </p>
        <MainDashboard weather={weather} air={air} airDesc={airDesc} />
      </div>
      <div className=" w-1/3">
        <Ad />
      </div>
    </div>
  );
};

export default Today;
