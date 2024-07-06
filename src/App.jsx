import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";

function App() {
  const [lat, setLat] = useState("");
  const [city, setCity] = useState("");
  const [lon, setLon] = useState("");
  const [weather, setWeather] = useState(null);

  const geoFetch = async () => {
    try {
      const resp = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        const result = await resp.json();
        setLat(result[0].lat);
        setLon(result[0].lon);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const currentDataFetch = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        const result = await resp.json();
        setWeather(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const degreesConversion = degreesValue => (degreesValue / 10).toFixed(0);
  const speedinKm = speedValue => (speedValue * 3.6).toFixed(2);
  const getCity = city => setCity(city);

  useEffect(() => {
    geoFetch();
    currentDataFetch();
    console.log("Render Mounted");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, lon, lat]);

  // console.log("Lat", lat, "Lon", lon);
  // console.log(weather);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome getCity={getCity} />} />
          <Route
            path={"/:" + city}
            element={
              weather && (
                <Home
                  cityName={city}
                  degrees={degreesConversion(weather.main.feels_like)}
                  weatherCondition={weather.weather[0].description}
                  lower={degreesConversion(weather.main.temp_min)}
                  higher={degreesConversion(weather.main.temp_max)}
                  humidity={degreesConversion(weather.main.humidity)}
                  windSpeed={speedinKm(weather.wind.speed)}
                  iconWeather={weather.weather[0].icon}
                />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
