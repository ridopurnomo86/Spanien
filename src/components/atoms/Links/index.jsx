import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'

const Linked = ({
  children, direction,
}) => (
  <Link className="no-underline text-gray-600 text-lg font-semibold mr-5 focus:outline-none focus:text-secondary" to={`/${direction}`}>
    {children}
  </Link>
)

export default Linked

Linked.propTypes = {
  children: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}
