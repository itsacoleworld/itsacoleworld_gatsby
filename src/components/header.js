import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
        <ul>
            <li>
                <Link to="/day-zero/">Day Zero</Link>
            </li>
            <li>
                <Link to="/books/">Books</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/projects/">Projects</Link>
            </li>
            <li>
                <Link to="/writing/">Writing</Link>
            </li>
        </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
