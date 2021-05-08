import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'

import Nav from './Nav'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Nav menu={data} />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper


export const query = graphql`
  query LayoutQuery {
        allWordpressWpApiMenusMenusItems{
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
                        object_slug
                    }
                }
            }
        }
  }
`