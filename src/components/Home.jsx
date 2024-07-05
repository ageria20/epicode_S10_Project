import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";

const Home = props => {
  const navigate = useNavigate;

  //   const params = useParams();
  //   const city = params.name;
  //   console.log("UsePARAMS: ", props.);

  return (
    <Container>
      <h2 className="text-center text-light mb-4 mt-4">{props.cityName}</h2>
      <h3 className="text-center text-light mb-4 mt-4">({props.region})</h3>
      <div className="d-flex justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          fill="currentColor"
          className="mx-auto bi bi-brightness-high-fill "
          viewBox="0 0 16 16"
        >
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>
      </div>
      <Container className="mt-4 mb-4 align-items-end px-3 text-center">
        <h1 className="degrees">{props.degrees}° C</h1>
        <h5 className="mb-0">{props.weatherCondition.toUpperCase()}</h5>
        <p style={{ fontSize: "0.8rem" }}>
          <span>
            L:{props.lower}° C | H:{props.higher}° C
          </span>
        </p>
      </Container>

      <div className="d-flex justify-content-center">
        <h3>
          Next Days{" "}
          <svg
            onClick={() => navigate("/forecast")}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </h3>
      </div>
      <Container>
        <Row className="px-0 mt-5 justify-content-between">
          <Col xs={6}>
            <Container className="d-flex ">
              <h5>TODAY</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="mx-3 bi bi-brightness-high-fill "
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            </Container>
          </Col>

          <Col xs={6}>
            <h5 className="mb-0" style={{ fontSize: "1.2rem" }}>
              {props.lower} °C / {props.higher}° C
            </h5>
            <p className="mb-0">{props.weatherCondition.toUpperCase()}</p>
          </Col>
        </Row>
        <Row className="px-0 mt-5 justify-content-center">
          <Col xs={6}>
            <Container>
              <h5>HUMIDITY</h5>
              <h4>{props.humidity}%</h4>
            </Container>
          </Col>

          <Col xs={6}>
            <h5 className="ms-auto">WIND</h5>
            <h4 className="mb-0">{props.windSpeed} Km/h</h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
