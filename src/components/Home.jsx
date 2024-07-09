import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const country = params.country;
  console.log(country);

  const [weather, setWeather] = useState(null);

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

  const degreesConversion = degreesValue => (degreesValue / 10).toFixed(0);
  const speedinKm = speedValue => (speedValue * 3.6).toFixed(2);

  useEffect(() => {
    currentDataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    weather && (
      <Container className="border shadow rounded meteoContainer">
        <h2 className="text-center text-light mb-4 mt-4">{weather.name.toUpperCase()}</h2>
        <div className="mt-4 mb-4 align-items-end px-3 text-center">
          <h1 className="degrees">{degreesConversion(weather.main.feels_like)}° C</h1>
        </div>
        <Container className="details d-flex justify-content-center mt-4 mb-4 align-middle px-3 text-center">
          <div>
            <h5 className="mb-0">{weather.weather[0].description.toUpperCase()}</h5>
            <p style={{ fontSize: "0.8rem" }}>
              <span>
                L:{degreesConversion(weather.main.temp_min)}° C | H:{degreesConversion(weather.main.temp_max)}° C
              </span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="ps-2 bi bi-brightness-high-fill "
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
        </Container>

        <div className="d-flex justify-content-center" data-bs-theme="light">
          <h2>WEATHER INFO </h2>
        </div>
        <Container className="bg-light text-secondary p-4 rounded mb-5 details shadow">
          <Row className="px-2 mt-5  mb-2 justify-content-between text-center">
            <Col xs={12} md={5}>
              <Container className="d-flex flex-column align-items-center text-center border rounded-2 py-3">
                <h5>TODAY</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mb-3 bi bi-brightness-high-fill "
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </Container>
            </Col>

            <Col xs={12} md={5}>
              <Container className="d-flex flex-column align-items-center justidy-content-center text-center border rounded-2 py-4">
                <h5 className="mb-3">
                  Low {degreesConversion(weather.main.temp_min)} °C / High {degreesConversion(weather.main.temp_max)}° C
                </h5>
                <p className="mb-0">{degreesConversion(weather.main.feels_like).toUpperCase()}</p>
              </Container>
            </Col>
          </Row>
          <Row className="px-0 mt-3 justify-content-between">
            <Col xs={12} md={5}>
              <Container className=" d-flex flex-column text-center border rounded-2 py-3">
                <h5>HUMIDITY</h5>
                <Container>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-droplet-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                  </svg>
                  <h4> {degreesConversion(weather.main.humidity)}%</h4>
                </Container>
              </Container>
            </Col>

            <Col xs={12} md={5}>
              <Container className="text-center border rounded-2 py-3">
                <h5>WIND</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-wind"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                </svg>
                <h4 className="mb-0">{speedinKm(weather.wind.speed)} Km/h</h4>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  );
};

export default Home;
