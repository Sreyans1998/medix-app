import React from 'react';
import web from "./photo/Medix_icon.png";
import cart from "./photo/cart.png";
import Helppic from "./photo/help.png";
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Login from './photo/login.png'
// import Login from './Login';
// import Help from './Help';
// import Cart from './Cart';
const NavBar = () => {
    return (
        <>
           <Navbar expand="lg" style={{backgroundColor:`#abe4f7`}}>
                <Navbar.Brand to="/">
                    <img src={web} alt="Medix" style={{height:`60%`}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 mx-auto" />
                        </Form>
                        <br />
                        <Button variant="outline-success">
                            Search
                        </Button>
                        <Nav.Link className="text-center text-uppercase font-weight-bold">
                            <NavLink exact activeClassName='menu_active' to="/">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="text-center text-uppercase font-weight-bold"> 
                            <NavLink activeClassName='menu_active' to="/Cart">
                                <img src={cart} alt="..." style={{width:`30px`,height:`30px`}}/>
                                Cart
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="text-center text-uppercase font-weight-bold">
                            <NavLink activeClassName='menu_active' to="/Help">
                                <img src={Helppic} alt="..." style={{width:`30px`,height:`30px`}}/>
                                Help
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="text-center text-uppercase font-weight-bold">
                            <NavLink activeClassName='menu_active' to="/Login">
                                <img src={Login} alt="..." style={{width:`30px`,height:`30px`}}/>
                                Login
                            </NavLink>
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;