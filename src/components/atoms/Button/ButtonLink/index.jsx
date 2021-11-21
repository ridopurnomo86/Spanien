import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'
import classnames from 'classnames'

const ButtonLink = ({
  children, direction, size, bgColor, textColor, outsideEndPoint, width,
}) => (
  <Link
    to={`/${direction}`}
    href={`${outsideEndPoint}`}
    style={{
      textDecoration: 'none',
    }}
    className={classnames(`bg-${bgColor} text-${textColor} w-${width} inline-block shadow-lg text-center font-semibold border-none outline-none text-lg py-2 
    transition duration-500 ease-in-out hover:bg-opacity-80 hover:transition px-6 rounded-md`, {
      'text-xs': size === 'sm',
      'text-xl': size === 'lg',
    })}
  >
    {children}
  </Link>
)

export default ButtonLink

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  direction: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  outsideEndPoint: PropTypes.string,
  width: PropTypes.string,
}

ButtonLink.defaultProps = {
  textColor: 'white',
  bgColor: 'primary',
  direction: 'undefined',
  size: 'lg',
  outsideEndPoint: '',
  width: '',

}
