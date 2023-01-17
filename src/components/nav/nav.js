import { Container, Dropdown } from "react-bootstrap";
import "./nav.css";
import "../../index.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <Container id='nav'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/"
          >
            Home
          </NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/about"
          >
            About
          </NavLink></Dropdown.Item>
            <Dropdown.Item>
            <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/work"
          >
            Work
          </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
            <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/cv"
          >
            Cv
          </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
            <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/contact"
          >
            Contact
          </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Container>
      );
}