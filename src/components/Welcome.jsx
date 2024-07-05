import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = props => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <main>
      <Container className="bg-transparent my-4 rounded p-3">
        <h1>Welcome</h1>
        <Form.Control size="lg" type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
        <Button
          className="mt-3"
          variant="primary"
          onClick={() => {
            props.fetchCity(city);
            navigate("/:" + city);
          }}
        >
          Search
        </Button>
      </Container>
    </main>
  );
};
export default Welcome;
