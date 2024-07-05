import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="mx-auto">
      <h1 className="text-center">404 NOT FOUND</h1>
      <p>Can&apos;t find what you are looking for, try to go home</p>
      <Button className="bg-trasparent border rounded" onClick={() => navigate("/")}>
        HOME
      </Button>
    </main>
  );
};
export default NotFound;
