import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      variant='light'
      fixed='top'
      className={isSticky ? "shadow-sm bg-white py-2" : "py-4"}>
      <Navbar.Brand
        to='#home'
        className='ml-md-5'
        style={{ color: "#3a4256", fontSize: "1.55rem" }}>
        <strong>Nasib</strong>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='navbar-nav' />

      <Navbar.Collapse id='navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link
            to='#home'
            className='mr-md-5'
            onClick={() => window.scrollTo(500, 0)}
            active>
            Home
          </Nav.Link>
          <Nav.Link href='#services' className='mr-md-5' active>
            About Me
          </Nav.Link>
          <Nav.Link href='#skills' className='mr-md-5' active>
            Services
          </Nav.Link>
          <Nav.Link href='#projects' className='mr-md-5' active>
            Projects
          </Nav.Link>
          <Nav.Link href='#contact' className='mr-md-5' active>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
