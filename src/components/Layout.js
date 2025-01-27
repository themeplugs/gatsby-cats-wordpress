import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './style.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
