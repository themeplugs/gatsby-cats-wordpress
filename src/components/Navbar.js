import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/Cute-Animal-Planet-Logo.jpg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
    query {
      allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `}
    render={data => (
      <nav className="navbar is-transparent">
        
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Link to="/" className="logo">
                    <figure className="image">
                        <img src={logo} alt="Kaldi" style={{ height: '140px' }} />
                    </figure>
                </Link>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="main-menu">
                        {data.allWordpressPage.edges.map(edge => (
                            <Link
                                className="navbar-item"
                                to={edge.node.slug}
                                key={edge.node.slug}
                            >
                                {edge.node.title}
                            </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
