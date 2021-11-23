import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../../../components/atoms/Logo'
import ButtonLink from '../../../../components/atoms/Button/ButtonLink'
import Links from '../../../../components/atoms/Links'

const Menu = ({
  translate,
}) => (
  <>
    { translate ? (
      <div className="fixed w-80 z-50 h-full bg-gray-900 transform -translate-x-0
    transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col items-center space-y-8 w-full mt-4">
          <Logo size="LogoSecondary" />
          <ButtonLink direction="getstarted">Get Started</ButtonLink>
          <Links direction="product">Product</Links>
          <Links direction="about">About</Links>
        </div>
      </div>
    ) : (
      <div className="fixed w-80 z-50 h-full bg-gray-900 transform -translate-x-full
    transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col items-center space-y-8 w-full mt-4">
          <Logo size="LogoSecondary" />
          <ButtonLink direction="getstarted">Get Started</ButtonLink>
          <Links direction="product">Product</Links>
          <Links direction="about">About</Links>
        </div>
      </div>
    )}

  </>
)

export default Menu

Menu.propTypes = {
  translate: PropTypes.bool,
}
Menu.defaultProps = {
  translate: false,
}
