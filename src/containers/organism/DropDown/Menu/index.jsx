import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../../../components/atoms/Logo'
import ButtonLink from '../../../../components/atoms/Button/ButtonLink'
import Links from '../../../../components/atoms/Links'

const Menu = ({
  translate,
}) => (
  <div className={`fixed w-80 z-50 h-full bg-gray-900 transform -translate-x-${translate} 
  transition-all duration-500 ease-in-out z-50`}
  >
    <div className="flex flex-col items-center space-y-8 w-full mt-4">
      <Logo size="LogoSecondary" />
      <ButtonLink direction="getstarted" size="md" bgColor="secondary">Get Started</ButtonLink>
      <Links direction="product">Product</Links>
      <Links direction="about">About</Links>
    </div>
  </div>
)

export default Menu

Menu.propTypes = {
  translate: PropTypes.string,
}
Menu.defaultProps = {
  translate: 'undefined',
}
