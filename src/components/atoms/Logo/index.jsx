import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  Link,
} from 'react-router-dom'

const LogoVariants = {
  Logo: 'text-4xl text-logo',
  LogoMedium: 'text-2xl text-logo',
  LogoSecondary: 'text-4xl text-primary',
}

const Logo = ({
  size,
}) => (
  <Link to="/" className="flex items-center">
    <p className={classnames('font-bold',
      LogoVariants[size])}
    >
      Spanien
    </p>
    <i className="fas fa-building ml-1 text-2xl text-logo" />
  </Link>
)

export default Logo

Logo.propTypes = {
  size: PropTypes.string,
}
Logo.defaultProps = {
  size: 'Logo',
}
