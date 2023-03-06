import WeatherApi from "../api/WeatherApi";

const Weather = () => {
  const weather = WeatherApi();
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

  if (!weather)
    return (
      <div className="w-full h-full flex items-center justify-center rounded-xl bg-sky-800/25">
        <p className="text-4xl">Loading...</p>
      </div>
    );
  return (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center rounded-xl bg-sky-900/75 backdrop-blur-sm shadow-xl">
      <p className="text-6xl font-bold">{weather.location.name}</p>
      <p className="text-lg">
        {new Date(weather.location.localtime).toLocaleString(
          "en-US",
          optionsDate
        )}
      </p>
      <p className="text-sm">
        Local time:{" "}
        {new Date(weather.location.localtime).toLocaleString(
          "en-US",
          optionsTime
        )}
      </p>
      <div className="mt-8 flex items-end">
        <p className="text-9xl font-bold relative">
          {Math.round(weather.current.temp_c)}{" "}
          <sup className="absolute top-0 text-4xl">o</sup>
        </p>
        <span className="text-7xl mb-2">c</span>
      </div>
      <div className="flex items-center">
        <img
          src={weather.current.condition.icon}
          alt="Condition icon"
          className="w-10 h-10"
        />
        <p className="text-2xl">{weather.current.condition.text}</p>
      </div>
    </div>
  );
};

export default Weather;
