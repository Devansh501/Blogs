import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./NavBar.css"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar ps-4 pe-3">
      <Navbar  dark expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler onClick={toggle} className="toggle_bar" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="link me-3">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="link me-3">
              <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem className="link me-3">
              <NavLink href="#">Paid Content</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;