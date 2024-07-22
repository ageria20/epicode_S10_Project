import { useState } from "react";

import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const geoFetch = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=265b8837f7efbcc2d9a5014615a0eca9`
      );
      if (resp.ok) {
        const result = await resp.json();
        if (result.length > 0) {
          navigate(`/details/lat=${result[0].lat}&lon=${result[0].lon}`);
          //
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <Container className="my-4 rounded p-3 welcomeContainer">
        <h1>Welcome</h1>
        <Form
          onSubmit={e => {
            e.preventDefault();
            geoFetch();
          }}
        >
          <Form.Control size="lg" type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
          <Button className="mt-3 searchBtn rounded">Search</Button>
        </Form>
      </Container>
    </main>
  );
};
export default Welcome;
