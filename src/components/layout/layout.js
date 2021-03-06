/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Normalizer } from "../styles/Normalize"
import { GlobalStyle } from "../styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
      <Normalizer />
      <GlobalStyle />
      <main>{children}</main>
       
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
