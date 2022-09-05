import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";

const Navigate = () => {
  return (
    <div className="containerNav">
      <Navbar expand="md" className="mb-3">
        <Container fluid>
          <NavLink className="pe-3" exact={true} to="/">
            Budget App
          </NavLink>{" "}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Budget app
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end pl-5 flex-grow-1 pe-3 navOffCanvas">
                <NavLink className="pe-3" exact={true} to="/">
                  Home
                </NavLink>{" "}
                <NavLink to="/operations">Operations</NavLink>{" "}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigate;
