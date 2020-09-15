import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import Scrollspy from 'react-scrollspy'

export class SiteNav extends Component {
    render() {
        return (
            <div>
                <Scrollspy items={ ['home', 'reviews', 'portfolio', 'contact'] } currentClassName="is-current">
                    <Navbar id="siteNav" collapseOnSelect varient="dark" expand="lg" fixed="top">
                        <Navbar.Brand href="#home">Cameron Whyte</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Nav>
                                <Nav.Link href="#reviews">Reviews</Nav.Link>
                                <Nav.Link href="#portfolio">Pricing</Nav.Link>
                                <Nav.Link href="#contact">Pricing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Scrollspy>
            </div>
        )
    }
}

export default SiteNav
