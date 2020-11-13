import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo, navigationMenu }) => {
  console.log(navigationMenu);
  return (
    <>
      <Navbar bg="light" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand href="/">
            {/* <img src="" /> */}
            {/* <div class="image-header-logo"></div> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-custom justify-content-center" activeKey={pageInfo && pageInfo.pageName}>
            {
              navigationMenu.map(elem => {
                return (
                  <Nav.Item key={elem.fields.slug}>
                    <Link to={elem.fields.slug} className="link-no-style">
                      <Nav.Link as="span" eventKey="page-2">
                        {elem.frontmatter.title}
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                );
              })
            }
          </Nav>

        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
