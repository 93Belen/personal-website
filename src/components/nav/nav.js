import { Container, Dropdown, Nav, Link, Navbar } from "react-bootstrap";
import "./nav.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

export const NavElement = () => {
    return (
      <Navbar id='navbar' expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <GiHamburgerMenu id='icon' />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='nav-card' className="me-auto">
             <Nav.Link><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/"
          >
            Home
          </NavLink></Nav.Link>
             <Nav.Link><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/about"
          >
            About
          </NavLink></Nav.Link>
             <Nav.Link><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/work"
          >
            Work
          </NavLink></Nav.Link>
             <Nav.Link><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/cv"
          >
            Cv
          </NavLink></Nav.Link>
             <Nav.Link><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/contact"
          >
            Contact
          </NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}