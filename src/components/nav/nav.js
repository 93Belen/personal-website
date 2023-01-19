import { Container, Dropdown, Navbar } from "react-bootstrap";
import "./nav.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

export const Nav = () => {
    return (
        <Navbar id='navbar'>
        <Container id='nav'>
        <Dropdown drop='start'>
          <Navb.Toggle id="dropdown-basic">
          <GiHamburgerMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu id='dropdown-card'>
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
        </Navbar>
      );
}