import React from 'react';
import {
    Navbar, NavbarBrand, NavbarToggler, Nav, NavLink, NavItem,
    Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import './Navigation.css';
import logo from '../img/spacestagram_name.png';

const Navigation = () => {
    return (
        <div className="navbar">
            <Navbar
                color="light"
                expand="md"
                fixed="top"
            >
                <NavbarBrand href="/">
                    <img src={logo} alt="Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/favorites">
                                Favorites
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                        className="position-absolute top-0 end-0 p-3"
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Contact
                            </DropdownToggle>
                            <DropdownMenu className="navItem">
                                <DropdownItem href="https://www.linkedin.com/in/hblackmer/" target="_blank"> 
                                    LinkedIn
                                </DropdownItem>
                                <DropdownItem href="https://github.com/hblackmer" target="_blank"> 
                                    GitHub
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;