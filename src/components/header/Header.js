import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
import { faHeart, faPaperPlane, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/images/logos/logo.png";
import "./Header.css";

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="white" className="header-nav" light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} id="header-image-brand" alt="" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav id="navbar-group-left" className="ml-auto" navbar>
                            <NavItem>
                                <Input type="text" name="navbarSearch" id="navbar-search" placeholder="Search a city..." >
                                </Input>
                            </NavItem>

                        </Nav>

                        <Nav className="ml-auto navbar-upper-right" navbar>
                            <NavItem>
                                <NavLink href="/favorites/">
                                    <FontAwesomeIcon icon={faHeart} color="rgba(0,0,0,.5)" className="navbar-link-icon" />
                                    Favorites
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/trips/">
                                    <FontAwesomeIcon icon={faPaperPlane} color="rgba(0,0,0,.5)" className="navbar-link-icon" />
                                    My trips
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about/">
                                    <FontAwesomeIcon icon={faUserCircle} color="rgba(0,0,0,.5)" className="navbar-link-icon" />
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>


                <Navbar color="white" id="second-header-nav" className="header-nav" light expand="md">
                    <Nav id="lower-navbar-group-left" className="ml-auto" navbar>
                        <NavItem>
                            <Button color="secondary" className="btn-xs btn-white">Dates</Button>
                        </NavItem>
                        <NavItem>
                            <Button color="secondary" className="btn-xs btn-white">Hosts</Button>
                        </NavItem>
                        <NavItem>
                            <Button color="secondary" className="btn-xs btn-white">Price</Button>
                        </NavItem>

                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <span className="switch-label">Disable Map </span>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>

                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        );
    }
}

