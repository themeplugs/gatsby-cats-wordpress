import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import { getImage } from "gatsby-plugin-image"

const image = getImage(data.avatar)

// This is the same as:

const image = data?.avatar?.childImageSharp?.gatsbyImageData

class Thumbnail extends Component{
    
}