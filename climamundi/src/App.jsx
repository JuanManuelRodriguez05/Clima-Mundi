import { BrowserRouter, Route, Routes } from "react-router-dom"


import WeatherDetails from './components/WeatherDetails/WeatherDetail'
import NavBar from './components/NavBar/NavBar'


import './App.css'


const App = () => {


  return (
    
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<WeatherDetails  />} />
      </Routes>

    </BrowserRouter>
   

  )
}

export default App
