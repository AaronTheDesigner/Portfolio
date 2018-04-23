import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Navigation extends Component {
    render () {
        return (
            
            <Navbar >
                <div className = "container-fluid" id = "nav">
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#home">Aaron Toliver</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey = {1} href = "#about">
                            About
                        </NavItem>
                        <NavItem eventKey = {3} href = "#projects">
                            Projects
                        </NavItem>
                        <NavItem eventKey = {4} href = "#footer">
                            Contact
                        </NavItem>
                    </Nav>     
                </div>
            </Navbar>
        );
    }
}