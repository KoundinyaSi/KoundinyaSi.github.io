import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarElem = () => {
  return (
    <Navbar
      id="navbar-elem"
      // expand="sm"
      // className="bg-body-tertiary"
      sticky="top"
    >
      <Navbar.Brand href="/">Sitaram Madiraju</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link href="#about">About.js</Nav.Link>
          <Nav.Link href="#timeline">Timeline.js</Nav.Link>
          <Nav.Link href="#projects">Work.js</Nav.Link>
          <Nav.Link href="#contact">Contact.js</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarElem;
