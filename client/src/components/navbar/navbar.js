import { useContext } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

const Navbar = () => {
    const { authState } = useContext(AuthContext);

    return (
        <NavbarBootstrap bg="dark" variant="dark" expand="lg">
        <Container>
            <NavbarBootstrap.Brand>
                <Link to="/" className="navbar-brand">React-Bootstrap</Link>
            </NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBootstrap.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/dashboard" className="nav-link"> Dashboard</Link>
                    {authState.status ? 
                        <>
                        <Link to="/log" className="nav-link">Log</Link>
                        <Link to="/profile" className="nav-link">Profile</Link>
                        <Link to="/logout" className="nav-link">Logout</Link>
                        </>
                        :
                        <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                        </>
                    }
                </Nav>
                <Nav>
                    <Link to="/deets" className="nav-link">More deets</Link>
                </Nav>
            </NavbarBootstrap.Collapse>
        </Container>
    </NavbarBootstrap>
    )
};

export default Navbar;