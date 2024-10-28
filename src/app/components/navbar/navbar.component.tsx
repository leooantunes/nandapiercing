import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../images/logo.svg";

export function NavbarNanda() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src={Logo}
            alt="logo-nanda-piercing"
            width={100}
            height={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              justifyContent: "flex-end",
              width: "100%",
            }}
            navbarScroll
          >
            <NavDropdown title="Joias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#labrets">
                Labret (Joias retas)
              </NavDropdown.Item>
              <NavDropdown.Item href="#argolas">Argolas</NavDropdown.Item>
              <NavDropdown.Item href="#septos">Septo/Daith</NavDropdown.Item>
              <NavDropdown.Item href="#umbigos">Umbigo</NavDropdown.Item>
              <NavDropdown.Item href="#mamilos">Mamilo</NavDropdown.Item>
              <NavDropdown.Item href="#nostris">Nostril</NavDropdown.Item>
              <NavDropdown.Item href="#lobulos">Lóbulo</NavDropdown.Item>
              <NavDropdown.Item href="#rooks">Rook/Supercílio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#anodização">Anodização</Nav.Link>
            <Nav.Link href="#cuidados">Cuidados</Nav.Link>
            <Nav.Link href="#intimos">Íntimos</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
