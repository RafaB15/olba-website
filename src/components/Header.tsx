import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/olba_logo.png';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <Navbar className="custom-navbar" expand="lg" >
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="200"
                    height="60"
                    className="d-inline-block align-top" // Bootstrap classes for alignment
                    alt="OLBA Logo" // Alt text for the logo
                    style={{ paddingLeft: '10px' }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto" >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;