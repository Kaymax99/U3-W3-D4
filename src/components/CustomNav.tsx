import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export const CustomNav = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Doge Articles
        </Link>
      </Container>
    </Navbar>
  );
};
