import {
  Navbar,
  Nav,
  Button,
  Container,
  Badge,
  Offcanvas,
} from "react-bootstrap";
import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import Logo from "../assets/NewZealandHoneyCo.png";
import { HiMenuAlt2 } from "react-icons/hi";

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="py-3 bg-white" fixed="top">
      <Container fluid="lg">
        <div className="d-flex align-items-center">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="border-0 d-lg-none p-0"
          >
            <HiMenuAlt2 size={28} />
          </Navbar.Toggle>
          <Button
            variant="outline-dark"
            className="rounded-pill px-4 ms-3 d-none d-lg-block"
          >
            WHICH MANUKA IS FOR ME?
          </Button>
        </div>

        <Nav className="mx-auto d-none d-lg-flex align-items-center gap-5">
          <Nav.Link href="#">Shop</Nav.Link>
          <Nav.Link href="#">Explore</Nav.Link>

          <Navbar.Brand href="#">
            <img src={Logo} alt="NZHC Logo" height="70" />
          </Navbar.Brand>

          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Rewards</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>

        <Nav className="d-flex flex-row align-items-center gap-2">
          <Nav.Link href="#">
            <FaUser size={18} />
          </Nav.Link>
          <Nav.Link href="#">
            <FaSearch size={18} />
          </Nav.Link>
          <Nav.Link href="#" className="position-relative">
            <FaShoppingBag size={18} />
            <Badge
              bg="warning"
              pill
              text="dark"
              className="position-absolute top-10 start-95 translate-middle"
            >
              0
            </Badge>
          </Nav.Link>
        </Nav>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-3">
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Explore</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Rewards</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>

              <Button
                variant="outline-dark"
                className="rounded-pill px-4 mt-3 w-100"
              >
                WHICH MANUKA IS FOR ME?
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
