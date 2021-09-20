import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Thumbnail } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import Logo from '../Logo/Logo';

class CustomNavbar extends Component {
     render() {
          return (
               <div>
                    <Navbar inverse>
                         <Navbar.Header>
                              <Navbar.Brand>
                                   <Link to="/"> <img src={logo} width={40} height={40} alt="thumbnail" style={{margin: -10}} />  </Link>
                              </Navbar.Brand>
                         </Navbar.Header>
                         <Nav pullRight>
                              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                   Home
                              </NavItem>
                              <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                                   About
                              </NavItem>
                         </Nav>
                    </Navbar>
               </div>
          );
     }
}

export default CustomNavbar;