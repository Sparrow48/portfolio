import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [sticky, setSticky] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={sticky || expand ? "shadow-sm bg-white py-2" : "py-4"}>
      <Container>
        <Navbar.Brand
          as={Link}
          to='/'
          className='ml-md-5'
          style={{ color: "#3a4256", fontSize: "1.55rem" }}>
          <strong>Nasib</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link
                href='#home'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#about'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#services'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#projects'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#contact'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#services'
                className='mr-md-4'
                active
                onClick={() => setExpand(false)}>
                Services
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
