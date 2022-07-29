import { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

const Navbar = () => {
    const { authState } = useContext(AuthContext);

    return (
    <NavbarBootstrap bg="light" expand="lg">
      <Container>
        <NavbarBootstrap.Brand>
            <Link to="/"> React-Bootstrap</Link>
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"> Home</Link>
            <Link to="/dashboard"> Dashboard</Link>
            {authState.status ? 
            <>
                <Link to="/log"> Log</Link>
                <Link to="/profile"> Profile</Link>
                <Link to="/logout"> Logout</Link>
            </>
            :
            <>
                <Link to="/login"> Login</Link>
                <Link to="/register"> Register</Link>
            </>
            }
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
    )
};

export default Navbar;