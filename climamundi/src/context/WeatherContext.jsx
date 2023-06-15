import { createContext, useState } from 'react'


export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [cities, setCities] = useState([]);
    
    
   
   
   
    return (
        <WeatherContext.Provider
          value={{
            search,
            setSearch,
            cities,
            setCities,
            
          }}
        >
          {children}
        </WeatherContext.Provider>
      );
    };