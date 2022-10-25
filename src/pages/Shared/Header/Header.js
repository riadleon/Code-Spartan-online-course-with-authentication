import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">CODE-Spartans</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/home'>Home</Nav.Link>
                        <Nav.Link  to='/courses'>Courses</Nav.Link>
                        <Nav.Link  to='/faq'>FAQ</Nav.Link>
                        <Nav.Link  to='/blog'>Blog</Nav.Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;