import { useEffect, useState } from "react"

import getApiInfo from "../apiInfo/ApiInfo.jsx"
import WeatherCard from "../WeatherCard/WeatherCard.jsx"
import SearchCountry from "../SearchCountry/SearchCountry.jsx"

import "./WeatherDetail.scss"

const WeatherDetails = () => {
  const [data, setData] = useState({
    city: "",
    country: "",
    temp: "",
    temp_max: "",
    temp_min: ""
  })

  const [city, setCity] = useState("")
  const [placeNotFound, setPlaceNotFound] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    console.log(e.target[0].value)
    setPlaceNotFound(false)
    e.target.reset()

  }

  useEffect(() => {
    getApiInfo(city)
      .then(data => {
        if (data.cod === "404") {
          setPlaceNotFound(true)
        } else {
          setData(prevState => ({
            ...prevState,
            city: data.name,
            country: data.sys.country,
            temp: Math.floor(data.main.temp - 273.15),
            temp_max: Math.floor(data.main.temp_max - 273.15),
            temp_min: Math.floor(data.main.temp_min - 273.15),
            feels_like: Math.floor(data.main.feels_like - 273.15),
            humidity: (data.main.humidity),
            wind_speed: (data.wind.speed),
            weather_mode:(data.weather.value)
          }));
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => { });
  }, [city]);

  return (
    <>
    <SearchCountry handleSubmit={handleSubmit} />
    {placeNotFound ? (
      <div className="notFound" >
        <p>Place not found</p>
        <button onClick={() => setPlaceNotFound(false)}>
          Go back
        </button>
      </div>
    ) : (
      <WeatherCard data={data} />
    )}
  </>
);

}

export default WeatherDetails