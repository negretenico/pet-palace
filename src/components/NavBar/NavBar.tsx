import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
function NavBar () {
  return (
    <>
      <Navbar expand="sm" style={{ backgroundColor: '#3E8EF7' }} variant='dark'>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt="logo"
              src={'logo.png'}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="">
              <Nav.Link>Appointments</Nav.Link>
            </LinkContainer>
            <LinkContainer to="pets">
              <Nav.Link>Pets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="account">
              <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavBar;
