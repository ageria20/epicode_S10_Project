import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clearSky from "../assets/clear-day.svg";
// import celsius from "../assets/celsius.svg";
import thermometer from "../assets/thermometer-celsius.svg";
import windIcon from "../assets/wind.svg";
import cloudedSky from "../assets/cloudy.svg";

const Home = () => {
  const params = useParams();
  const country = params.country;
  console.log(country);
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "30px",
  //   slidesToShow: 3,
  //   speed: 500,
  // };

  const [weather, setWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);

  const currentDataFetch = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${country}&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        const result = await resp.json();
        setWeather(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const forecastFetch = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${country}&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        const result = await resp.json();
        setForecastWeather(result.list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const degreesConversion = degreesValue => (degreesValue - 273).toFixed(0);
  const speedinKm = speedValue => (speedValue * 3.6).toFixed(2);

  const tomorrow = forecastWeather[8];
  const theDayAfter = forecastWeather[16];
  const twoDaysAfter = forecastWeather[24];

  const getDay = dataTime => {
    const date = new Date(dataTime * 1000);
    const day = date.toLocaleString("it-IT", {
      month: "long",
      day: "numeric",
    });
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    return `${day.toUpperCase()} `;
  };

  const getHours = dateTime => {
    const date = new Date(dateTime * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`;
  };
  //

  useEffect(() => {
    currentDataFetch();
    forecastFetch();
    console.log("FORECAST: ", forecastWeather);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    weather && (
      <Container className="border shadow rounded meteoContainer">
        <h2 className="text-center text-light mb-4 mt-4 cityName">{weather.name.toUpperCase()}</h2>
        <div className="mt-4 mb-4 align-items-end px-3 text-center">
          <h1 className="degrees">{degreesConversion(weather.main.feels_like)} °C</h1>
        </div>
        <Container className="details d-flex justify-content-center mt-4 mb-4 align-items-center px-3 text-center">
          <div>
            <h5 className="mb-0">{weather.weather[0].description.toUpperCase()}</h5>
            <p style={{ fontSize: "0.8rem" }}>
              <span>
                L: {degreesConversion(weather.main.temp_min)} °C | H: {degreesConversion(weather.main.temp_max)}° C
              </span>
            </p>
          </div>
          <Image src={clearSky} width="50" className="mb-3 clearSky" />
        </Container>

        <div className="d-flex justify-content-center" data-bs-theme="light">
          <h2>WEATHER INFO </h2>
        </div>
        <Container className="bg-light text-secondary p-4 rounded mb-5 details shadow">
          <Row className="px-2 mt-2  mb-2 justify-content-between text-center">
            <Col xs={12} md={5}>
              <Container className="d-flex flex-column align-items-center text-center border rounded-2 py-3 info">
                <h5>TODAY</h5>
                <Image src={clearSky} width="50" className="mb-4" />
              </Container>
            </Col>

            <Col xs={12} md={5}>
              <Container className="d-flex flex-column align-items-center justidy-content-center text-center border rounded-2 py-4 info">
                <h5 className="mb-3">
                  Low {degreesConversion(weather.main.temp_min)} °C / High {degreesConversion(weather.main.temp_max)}° C
                </h5>
                <Image src={thermometer} width="50" />
              </Container>
            </Col>
          </Row>
          <Row className="px-0 mt-3 justify-content-between">
            <Col xs={12} md={5}>
              <Container className=" d-flex flex-column text-center border rounded-2 py-3 info">
                <h5>HUMIDITY</h5>
                <Container>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-droplet-fill humidityIcon m-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                  </svg>
                  <h4> {weather.main.humidity}%</h4>
                </Container>
              </Container>
            </Col>

            <Col xs={12} md={5}>
              <Container className="text-center border rounded-2 py-3 info">
                <h5>WIND</h5>
                <Image src={windIcon} width="50" />
                <h4 className="mb-0">{speedinKm(weather.wind.speed)} Km/h</h4>
              </Container>
            </Col>
          </Row>
          {forecastWeather > 0 && (
            <Container className="rounded-2 p-3 info mt-3">
              <h4>Next Hours</h4>
              <Row>
                <Col>
                  <h5>{getHours(forecastWeather[0].dt)}</h5>
                  <Image
                    src={forecastWeather[0].weather[0].description === "clear sky" ? clearSky : cloudedSky}
                    width="30"
                  />
                  <h5>{degreesConversion(forecastWeather[0].main.temp)}</h5>
                </Col>
              </Row>
            </Container>
          )}
        </Container>

        {tomorrow && (
          <Container className="text-start w-75 mb-4">
            <h3>Next Days</h3>
            <Row className="d-flex align-items-center  ">
              <Col className="d-flex flex-column align-items-center border rounded-2 m-2 py-2 hours">
                <h5>{getDay(tomorrow.dt)}</h5>
                <Image src={tomorrow.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                <h5>{degreesConversion(tomorrow.main.temp)}</h5>
                <Row className="mt-3  flex-nowrap overflow-x-auto">
                  {forecastWeather.slice(1, 8).map((hour, index) => {
                    return (
                      <Col className="mx-1 no-shrink " key={index}>
                        <h5>{getHours(hour.dt)}</h5>
                        <Image src={hour.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                        <h5>{degreesConversion(hour.main.temp)}</h5>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <Row className="d-flex align-items-center  ">
              <Col className="d-flex flex-column align-items-center border rounded-2 m-2 py-2 hours">
                <h5>{getDay(theDayAfter.dt)}</h5>
                <Image src={theDayAfter.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                <h5>{degreesConversion(theDayAfter.main.temp)}</h5>
                <Row className="mt-3 flex-nowrap overflow-x-auto">
                  {forecastWeather.slice(9, 16).map((hour, index) => {
                    return (
                      <Col className="mx-1 no-shrink  " key={index}>
                        <h5>{getHours(hour.dt)}</h5>
                        <Image src={hour.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                        <h5>{degreesConversion(hour.main.temp)}</h5>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <Row className="d-flex align-items-center ">
              <Col className="d-flex flex-column align-items-center border rounded-2 m-2 py-2 hours">
                <h5>{getDay(twoDaysAfter.dt)}</h5>
                <Image src={twoDaysAfter.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                <h5>{degreesConversion(twoDaysAfter.main.temp)}</h5>
                <Row className="mt-3 flex-nowrap overflow-x-auto">
                  {forecastWeather.slice(17, 24).map((hour, index) => {
                    return (
                      <Col className="" key={index}>
                        <h5>{getHours(hour.dt)}</h5>
                        <Image src={hour.weather[0].description === "clear sky" ? clearSky : cloudedSky} width="30" />
                        <h5>{degreesConversion(hour.main.temp)}</h5>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    )
  );
};

export default Home;
