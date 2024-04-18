import { match } from "assert";

const DayCard = ({ weather }: { weather: furtureItem }) => {
  const k = 273.15; //use for counting K to T

  const dayOfWeek = (year: any, month: any, day: any) => {
    const date = new Date(year, month - 1, day);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[date.getDay()];
  };

  const day = weather.dt_txt.split(" ")[0].split("-");
  // console.log(weather);
  return (
    <div className="collapse collapse-plus bg-base-200 my-2">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium flex">
        <div className="flex flex-col items-center w-2/8">
          <p>{dayOfWeek(day[0], day[1], day[2])}</p>
          <p>
            {day.length > 0 ? day[1] : 0}/{day.length > 0 ? day[2] : 0}
          </p>
        </div>
        <div className="flex ml-6 w-5/8 flex-1">
          <p className="text-5xl">
            {weather ? Math.round(weather.main.temp_max - k) : 0}°
          </p>
          <p>/{weather ? Math.round(weather.main.temp_min - k) : 0}°</p>
          <p className="ml-4">
            {weather ? weather.weather[0].description : "unknown"}
          </p>
        </div>
      </div>
      <div className="collapse-content">
        <div className="flex">
          <p className="flex-1 w-1/2">
            RealFeel: {weather ? Math.round(weather.main.feels_like - k) : 0}°
          </p>
          <p className="flex-1 w-1/2">
            WindSpeed: {weather ? weather.wind.speed : 0} km/h
          </p>
        </div>
        <div className="flex">
          <p className="flex-1 w-1/2">
            Visibility: {weather ? weather.visibility : 0} m
          </p>
          <p className="flex-1 w-1/2">
            CloudCover: {weather ? weather.clouds.all : 0} %
          </p>
        </div>
        <div className="flex">
          <p className="flex-1 w-1/2">
            Humidity: {weather ? weather.main.humidity : 0} %
          </p>
          <p className="flex-1 w-1/2">
            Pressure: {weather ? weather.main.pressure : 0} hPa
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
