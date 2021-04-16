import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
   <div className="container">
    © {new Date().getFullYear()} Estate of Stefan Knapp
    </div>
  </footer>
)

export default Footer
