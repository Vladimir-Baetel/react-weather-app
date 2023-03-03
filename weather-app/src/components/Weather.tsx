import WeatherApi from "../api/WeatherApi";
import LocationApi from "../api/LocationApi";
const Weather = () => {
  const weather = WeatherApi();
  const location = LocationApi();
  const optionsDate: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const optionsTime: any = {
    hour: "numeric",
    minute: "numeric",
  };

  if (!location)
    return (
      <div className="w-full h-full flex items-center justify-center rounded-xl bg-slate-800/25">
        <p className="text-4xl">Loading...</p>
      </div>
    );

  return (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center rounded-xl bg-slate-800/25">
      <p className="text-6xl font-bold">{weather?.location.name}</p>
      <p className="text-lg">
        {new Date(weather?.location.localtime!).toLocaleString(
          "en-US",
          optionsDate
        )}
      </p>
      <p className="text-sm">
        Local time:{" "}
        {new Date(weather?.location.localtime!).toLocaleString(
          "en-US",
          optionsTime
        )}
      </p>
      <div className="flex items-end">
        <p className="text-9xl font-bold relative">
          {weather?.current.temp_c}{" "}
          <sup className="absolute top-0 text-4xl">o</sup>
        </p>
        <span className="text-8xl mb-1">c</span>
      </div>
    </div>
  );
};

export default Weather;
