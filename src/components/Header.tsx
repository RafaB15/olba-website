import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/olba_logo.png';

const Header: React.FC = () => {
    return (
        <Navbar className="bg-black text-white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top" // Bootstrap classes for alignment
                        alt="OLBA Logo" // Alt text for the logo
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#services" className="text-white">Services</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;