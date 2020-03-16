import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav>
    <div>
      <h3>{siteTitle}</h3>
        <ul>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/day-zero/">Day Zero</Link>
            </li>
            <li>
                <Link to="/books/">Books</Link>
            </li>
        </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `itsacoleworld.com`,
}

export default Header
