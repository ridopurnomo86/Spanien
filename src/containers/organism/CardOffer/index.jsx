import React from 'react'
import PropTypes from 'prop-types'

const CardOffer = ({
  children, sourceImage,
}) => (
  <div
    className="w-12/12 h-96 flex items-center justify-center rounded-md shadow-md md:w-96                                                                                                                                                                    "
    style={{
      background: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), 
      url("${sourceImage}")`,
    }}
  >
    <div className="bg-blue-100 bg-opacity-90 p-8">
      {children}
    </div>
  </div>
)

export default CardOffer

CardOffer.propTypes = {
  children: PropTypes.node.isRequired,
  sourceImage: PropTypes.string.isRequired,
}
