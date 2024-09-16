import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import LogoImage from '../../personal_files/my_photos/MyLogo.png';
import './Header.css';
const Header = () => {
  return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color":"grid"}}>
                    
                </Navbar.Brand>
                <Navbar.Toggle arial-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                    >      
                        <NavLink className="nav-link" to="/"> <img className="logo-image" to="/" src={LogoImage}/> </NavLink>
                        
                       
                    </Nav>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                    >      
                    
                        <NavLink className="nav-link" to="/"> Home </NavLink>
                        <NavLink className="nav-link" to="/"> About Me </NavLink>
                        <NavLink className="nav-link" to="/projects"> Projects </NavLink>
                    </Nav>
                    
                    {/* <Button variant="outline-info" className="me-2"> Home </Button>
                    <Button variant="outline-info" className="me-2"> About Me </Button>
                    <Button variant="outline-info" className="me-2"> Projects </Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Header