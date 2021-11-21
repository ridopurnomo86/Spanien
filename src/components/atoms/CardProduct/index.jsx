import React from 'react'
import PropTypes from 'prop-types'
import {
  LazyLoadImage,
} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const CardProduct = ({
  src, title, address, price, bedroom, bathroom,
}) => (
  <div className="bg-white rounded overflow-hidden shadow-md w-max inline-block text-justify">
    <LazyLoadImage
      effect="blur"
      width="320px"
      height="180px"
      loading="eager"
      src={`${src}`}
      alt=""
      style={{
        display: 'block',
      }}
    />
    <div className="px-4 py-4 w-full">
      <p className="antialiased text-xl font-black">
        {Intl.NumberFormat('en-US', {
          style: 'currency', currency: 'USD',
        }).format(price)}
      </p>
      <p className="antialiased text-lg font-black">{title}</p>
      <p className="antialiased block text-gray-500 text-sm">{address}</p>
      <div className="flex items-center">
        <div className="flex items-center mr-12">
          <i className="fas fa-bed text-2xl text-gray-700 mr-2" />
          <p className="text-lg antialiased font-semibold">{bedroom}</p>
        </div>
        <div className="flex items-center">
          <i className="fas fa-shower text-2xl text-gray-700 mr-2" />
          <p className="text-lg antialiased font-semibold">{bathroom}</p>
        </div>
      </div>
    </div>
  </div>
)

export default CardProduct

CardProduct.propTypes = {
  price: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  bedroom: PropTypes.number,
  bathroom: PropTypes.number,
}

CardProduct.defaultProps = {
  price: undefined,
  src: undefined,
  title: undefined,
  bathroom: undefined,
  address: undefined,
  bedroom: undefined,
}
