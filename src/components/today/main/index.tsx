import React from "react";

const MainDashboard = ({
  // received 3 arguments
  weather,
  air,
  airDesc,
}: {
  weather: weatherState | null;
  air: airQuality | null;
  airDesc: string;
}) => {
  const k = 273.15; //use for counting K to T
  const currentData = new Date();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="mt-4">
      {/* basic board */}
      <div className="mb-5 border-solid border-2 border-grey-300 rounded-2xl p-2 shadow-xl mt-10">
        <div className="flex ml-4">
          <div className="flex flex-col items-center w-2/8">
            <p className="font-bold">{weekdays[currentData.getDay()]}</p>
            <p>
              {currentData.getMonth() + 1}/{currentData.getDate()}
            </p>
          </div>
          <div className="flex ml-6 w-5/8 flex-1 ">
            <p className="text-5xl">
              {weather ? Math.round(weather.main.temp_max - k) : 0}°
            </p>
            <p>/{weather ? Math.round(weather.main.temp_min - k) : 0}°</p>
            <p className="ml-4">
              {weather ? weather.weather[0].description : "unknown"}
            </p>
          </div>
          <div className="w-1/8">
            <p>AirQuality {airDesc}</p>
          </div>
        </div>
        <div className="mt-4 ml-4">
          <div className="flex mt-3">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> RealFeel</span>:{" "}
              {weather ? Math.round(weather.main.feels_like - k) : 0}°
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold"> WindSpeed</span>:{" "}
              {weather ? weather.wind.speed : 0} km/h
            </p>
          </div>
          <div className="flex mt-3">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> Visibility</span>:{" "}
              {weather ? weather.visibility : 0} m
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold"> CloudCover</span>:{" "}
              {weather ? weather.clouds.all : 0} %
            </p>
          </div>
          <div className="flex mt-3">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> Humidity</span>:{" "}
              {weather ? weather.main.humidity : 0} %
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold">Pressure</span>:{" "}
              {weather ? weather.main.pressure : 0} hPa
            </p>
          </div>
        </div>
      </div>
      {/* airQuality board */}
      <div className="mb-5 border-solid border-2 border-grey-300 rounded-2xl p-2 shadow-xl mt-10">
        <div className="text-3xl ml-4">Air Pollution</div>
        <div className="mt-2 ml-4">
          <div className="flex mt-5">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> co</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.co : 0} ppm
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold"> no</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.no : 0} ppm
            </p>
          </div>
          <div className="flex mt-3">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> no2</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.no2 : 0} ppm
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold"> 03</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.o3 : 0} ppm
            </p>
          </div>
          <div className="flex mt-3">
            <p className="flex-1 w-1/2">
              <span className="font-bold"> so2</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.so2 : 0} ppm
            </p>
            <p className="flex-1 w-1/2">
              <span className="font-bold"> pm2.5</span>:{" "}
              {air && air.list.length > 0 ? air.list[0].components.pm2_5 : 0}{" "}
              μg/m³
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
