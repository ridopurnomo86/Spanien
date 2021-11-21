import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CardBlog = ({
  children, imageEndpoint, classStyle,
}) => (
  <div
    className={classnames(`h-96 max-h-full w-full rounded-lg shadow-md ${classStyle}`)}
    style={{
      background: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url(${imageEndpoint}) no-repeat center center / cover`,
    }}
  >
    <div className="flex flex-col justify-end w-full h-full px-6 py-12">
      {children}
    </div>
  </div>
)
export default CardBlog

CardBlog.propTypes = {
  children: PropTypes.node.isRequired,
  imageEndpoint: PropTypes.string,
  classStyle: PropTypes.string,
}
CardBlog.defaultProps = {
  imageEndpoint: '',
  classStyle: '',
}
