import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/shop" className="navigation-links-text">
        {props.text111}
      </Link>
      <Link to="/sell" className="navigation-links-text1">
        {props.text11}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text11: 'Sell',
  text3: 'Team',
  text2: 'Pricing',
  text4: 'Blog',
  text: 'Philosophy',
  text1: 'Artisans',
  text111: 'Shop',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text111: PropTypes.string,
}

export default NavigationLinks
