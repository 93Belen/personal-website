import { Container, Dropdown, Nav, Link, Navbar, Col } from "react-bootstrap";
import "./nav.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

export const NavElement = () => {
    return (
      <Navbar fixed='top' collapseOnSelect id='navbar' expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <GiHamburgerMenu id='icon' />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='nav-card' className="me-auto">
          <Col md={{order: '5'}}><Nav.Link eventKey='1'><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/"
          >
            Home
          </NavLink></Nav.Link></Col>
          <Col md={{order: '4'}}><Nav.Link eventKey='2'><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/about"
          >
            About
          </NavLink></Nav.Link></Col> 
          <Col md={{order: '3'}}><Nav.Link eventKey='3'><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/work"
          >
            Work
          </NavLink></Nav.Link></Col>
          <Col md={{order: '2'}}><Nav.Link eventKey='4'><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/cv"
          >
            Cv
          </NavLink></Nav.Link></Col>            
             <Nav.Link eventKey='5'><NavLink
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