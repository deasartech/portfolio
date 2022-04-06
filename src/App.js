import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portoflio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1 className="sub-title " style={{ color: "white" }}>
                A
              </h1>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              bg="dark"
              className="justify-content-end"
            > */}
            <Nav className="justify-content-end text-end  ">
              <HashLink to="#about" smooth className="nav-link">
                01. About
              </HashLink>

              <HashLink to="#portfolio" smooth className="nav-link">
                02. Portfolio
              </HashLink>

              <HashLink to="#resume" smooth className="nav-link">
                03. Resume
              </HashLink>
            </Nav>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;