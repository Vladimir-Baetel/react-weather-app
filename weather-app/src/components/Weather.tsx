import useWeatherApi from '../api/WeatherApi'

const Weather = () => {
    const weatherData = useWeatherApi()
    const optionsDate:any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const optionsTime:any = {
      hour: "numeric",
      minute: "numeric",
    };

  return (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center rounded-xl bg-slate-800/25">
        <h1 className='text-6xl font-bold'>
          {weatherData?.location.name}
        </h1>
        <p className='text-2xl'>
          {new Date(weatherData?.location.localtime!).toLocaleString('en-US', optionsDate)}
        </p>
        <p>Local time: {new Date(weatherData?.location.localtime!).toLocaleString('en-US', optionsTime)}
        </p>
    </div>
  )
}

export default Weather