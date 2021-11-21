import React from 'react'
import PropTypes from 'prop-types'
import {
  Helmet,
} from 'react-helmet'

const Header = ({
  title, children,
}) => (
  <>
    <Helmet>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Helmet>
    <div>
      {children}
    </div>
  </>
)

export default Header
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
