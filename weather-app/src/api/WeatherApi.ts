import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "./WeatherData";
import useLocationApi from "./LocationApi";

const WeatherApi = () => {
  const [isLocationAvailable, setIsLocationAvailable] = useState(false);
  const [weather, setWeather] = useState<WeatherData>();
  const location = useLocationApi();

  useEffect(() => {
    if (!location) {
      setIsLocationAvailable(false);
      return; // return early if location data is invalid
    }

    setIsLocationAvailable(true);
  }, [location]);

  useEffect(() => {
    if (!isLocationAvailable) {
      return; // return early if location data is not available
    }

    const url: string = `https://api.weatherapi.com/v1/current.json?key=d7db22f333fc4e6aaf3110311222601&q=${location?.city}&aqi=no`;

    const getWeather = async () => {
      try {
        const res = await axios.get<WeatherData>(url);
        setWeather(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getWeather();
  }, [isLocationAvailable, location]);

  return weather ?? null;
};

export default WeatherApi;
