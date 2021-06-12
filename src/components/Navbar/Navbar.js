import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='lg'
      className={sticky || expand ? "shadow-sm bg-white py-2 nav" : "py-4"}>
      <Navbar.Brand
        as={Link}
        to='/'
        className='ml-md-5'
        style={{ color: "#188de9", fontSize: "1.55rem" }}>
        <strong>Nasib</strong>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls='navbar-nav'
        onClick={() => {
          setExpand(expand ? false : "expanded");
        }}
      />
      <Navbar.Collapse id='navbar-nav'>
        <Nav className='ml-auto' defaultActiveKey='#home'>
          <Nav.Link
            href='#home'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            Home
          </Nav.Link>

          <Nav.Link
            href='#about'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            About
          </Nav.Link>

          <Nav.Link
            href='#services'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            Services
          </Nav.Link>

          <Nav.Link
            href='#skills'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            Skills
          </Nav.Link>

          <Nav.Link
            href='#projects'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            Projects
          </Nav.Link>

          <Nav.Link
            href='#contact'
            className='mr-md-5'
            active
            onClick={() => setExpand(false)}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
