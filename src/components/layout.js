/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navigationMenu {
              name
              link
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `}
    render={data => {
      const edges = data.allMarkdownRemark.edges;

      const navigationLinks = edges.map(edge => {
        return {
          ...edge.node
        };
      });

      return (
        <>
          <Container fluid className="px-0 main">
            <Navbar pageInfo={pageInfo} navigationMenu={navigationLinks} />
            <Row noGutters>
              <Col>
                <Container className="mt-5">
                  <main>{children}</main>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container fluid className="px-0">
            <Row noGutters>
              <Col className="footer-col">
                <footer>
                  <span>
                    © {new Date().getFullYear()}, Built with
                  {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </span>
                </footer>
              </Col>
            </Row>
          </Container>
        </>
      )
    }}
  />
)

export default Layout
