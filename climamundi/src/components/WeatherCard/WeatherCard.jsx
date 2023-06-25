import "../WeatherCard/WeatherCard.scss"

const WeatherCard = ({ data }) => {

    let image =
        data.temp <= 3 ? "cloud-snow.svg" :
        data.temp >= 4 && data.temp <= 15 ? "cloud.svg" :
        data.temp >= 16 && data.temp <= 25 ? "cloud.svg" :
        data.temp > 25 ? "sun.svg" : ""

    return (
        <div className="weather_card" >
            <div className="weatherData">
                <h2> {data.city}, {data.country}</h2>
                <h4> Temp actual: {data.temp} °C</h4>
                <h4> Temp máxima : {data.temp_max} °C</h4>
                <h4> Temp mínima : {data.temp_min} °C</h4>
                
            </div>
            <div className="imgData" >
                <img src={`../public/img/${image}`} 
                     className="weatherImage" 
                      alt="weather-image" />
                      
            </div>
            <div className="footerData" >
                <h4>Humedad: {data.humidity} %</h4>
                <h4> Sensación térmica {data.feels_like} °C</h4>
                <h4>Velocidad del viento {data.wind_speed} m/s</h4>
                <h4> {data.weather_mode} </h4>
            </div>
        </div>
    )
}

export default WeatherCard