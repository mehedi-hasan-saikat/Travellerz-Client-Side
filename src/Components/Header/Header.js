import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from './../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './header.css'

const Header = () => {
    const { allContexts, } = UseAuth()
    const { user, logOut, isAdmin } = allContexts
    const { displayName, } = user;
    // const [isCollapsed, setCollapsed] = useState(null);

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);


    return (
        <div>
            <Navbar  expand="lg" className= "navbar main-navbar navbar-expand-lg navbar-dark color text-white">
                <Container>
                    <Nav.Link as={NavLink} to="/home"><Navbar.Brand href="#home"> <h3>Travellerz</h3></Navbar.Brand></Nav.Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>


                            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>



                            {
                                isAdmin ?

                                    <>
                                        <Nav.Link as={NavLink} to="/customerDashboard">Customer Dashboard</Nav.Link>
                                        <Nav.Link as={NavLink} to="/admin">Admin Dashboard</Nav.Link>
                                    </> :

                                    <Nav.Link as={NavLink} to="/customerDashboard">Customer Dashboard</Nav.Link>
                            }


                            {!displayName ? (<>

                                <Nav.Link as={NavLink} to="/login">Log in</Nav.Link></>) : (
                                <>
                                    {isAdmin ?
                                        <Nav.Link className='text-danger' ><png>{displayName} <i className="fas fa-users-cog"></i></png></Nav.Link>
                                        :
                                        <Nav.Link className='text-danger ' ><p className="pt-3">{displayName}</p></Nav.Link>
                                    }


                                    <button className='btn-warning  text-red   rounded btn-block' onClick={logOut}> log out</button></>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;