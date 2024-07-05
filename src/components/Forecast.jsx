import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ForecastDays = () => {
  //   const [day, setDay] = useState([]);
  //   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   const [lat, setLat] = useState("");
  //   const [lon, setLon] = useState("");
  //   const [dayList, setDayList] = useState(null);

  const geoFetch = async () => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Scilla&limit=5&appid=265b8837f7efbcc2d9a5014615a0eca9"
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
  const foreCastDaysFetch = async () => {
    try {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        setDayList(resp.json());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    geoFetch();
    foreCastDaysFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(day);

  return (
    <main>
      <h3>Back</h3>
      <h2>Next Days</h2>
      <Container>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}></Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </main>
  );
};

export default ForecastDays;
