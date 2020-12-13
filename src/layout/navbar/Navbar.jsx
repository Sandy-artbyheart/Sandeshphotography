import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Appbar = () => {
    return (
        <div className="appbar">
            <Navbar collapseOnSelect expand="md" variant="dark">
                <Navbar.Brand>
                    <Link to='/'>
                        <h2>Sandesh Photography</h2>

                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/gallery">Gallery</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/services">Services</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About us</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Appbar
