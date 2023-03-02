import { useState, useEffect } from 'react'
import axios from 'axios'
import { WeatherData } from './WeatherData';

const useWeatherApi = () => {
  const [weather, setWeather] = useState<WeatherData>()
  
  useEffect(() => {
    const getWeatherData = async () => {
      const url:string = 'https://api.weatherapi.com/v1/current.json?key=d7db22f333fc4e6aaf3110311222601&q=London&aqi=no';
      
      await axios
      .get<WeatherData>(url)
      .then(res => {
        setWeather(res.data) }
        )
      .catch(err => {
        console.log(err)
      })
    }
    getWeatherData()
  },[])

  
  return weather ? weather : null
}

export default useWeatherApi