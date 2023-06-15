const API_key = "6e7b69a8b01bc45d3628405dffc36d42"

const getApiInfo = async (city) => {
    
      const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city || "Canelones"}&appid=${API_key}`)).json()

      return data

    }

export default getApiInfo