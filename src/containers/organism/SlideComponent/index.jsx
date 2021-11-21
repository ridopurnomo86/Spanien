import React from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

const SlideComponent = ({
  children,
}) => (
  <div
    style={{
      display: 'block',
      width: '100%',
      margin: '0 10px',
    }}
  >
    <Slider
      slidesToShow={4}
      slidesToScroll={1}
      accessibility
      dots
      infinite
      className="center"
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 1533,
          settings: {
            slidesToShow: 3,
            arrows: false,

          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            accessibility: true,
          },
        },
      ]}
      style={{
        margin: '0 auto',
        padding: '10px',
        textAlign: 'center',

      }}
    >
      {children}
    </Slider>
  </div>
)

export default SlideComponent

SlideComponent.propTypes = {
  children: PropTypes.node.isRequired,
}
