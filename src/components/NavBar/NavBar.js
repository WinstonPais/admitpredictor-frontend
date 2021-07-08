import React from 'react';
import {
    Navbar,
    Nav
  } from 'react-bootstrap';
import doggoLogo from './assets/uniDoggo.png';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
      <Navbar fixed="top" variant="dark" className={classes.navbar} expand="lg">
        <Navbar.Brand className={classes.position} href="/admitpredictor-frontend">
          <img src={doggoLogo} alt="Dog" width="50" height="50" className="d-inline-block align-top"/>
          </Navbar.Brand>
        <Navbar.Brand className={classes.position} href="/admitpredictor-frontend">
          <h4>Admit Predictor</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link className="mr-5" href="/admitpredictor-frontend"><h4>Home</h4></Nav.Link>
          <Nav.Link className="mr-5" href="/admitpredictor-frontend/formpage"><h4>Predict</h4></Nav.Link>
          <Nav.Link className="mr-5" href="/admitpredictor-frontend/contact"><h4>Contact</h4></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
