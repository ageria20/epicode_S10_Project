import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Container className="text-center rounded welcomeContainer">
        <h1 className="text-center">404 NOT FOUND</h1>
        <p>Can&apos;t find what you are looking for, try to go home</p>
        <Button className="mb-3 rounded homeBtn " onClick={() => navigate("/")}>
          HOME
        </Button>
      </Container>
    </main>
  );
};
export default NotFound;
