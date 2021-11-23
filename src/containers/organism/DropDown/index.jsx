import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const DropDown = ({
  open,
}) => (
  <>
    {
      open ? (<Menu translate />) : (<Menu translate={false} />)
    }
  </>
)

export default DropDown

DropDown.propTypes = {
  open: PropTypes.bool.isRequired,
}
