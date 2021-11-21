import React from 'react'
import PropTypes from 'prop-types'
import CardProduct from '../../../CardProduct'
import SlideComponent from '../../../../../containers/organism/SlideComponent'

const ListCardProduct = ({
  count = 10,
}) => (
  <SlideComponent>
    {[...Array(count).keys()].map((idx) => (
      <CardProduct key={idx} />
    ))}
  </SlideComponent>
)

export default ListCardProduct

ListCardProduct.propTypes = {
  count: PropTypes.number,
}

ListCardProduct.defaultProps = {
  count: 10,
}
