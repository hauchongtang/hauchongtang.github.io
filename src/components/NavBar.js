import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import DarkModeToggle from './DarkModeToggle'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className='container'>
          <NavbarBrand href="#/">H.C</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/hauchongtang">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        <DarkModeToggle />
      </Navbar>
    </div>
  );
}

export default Example;