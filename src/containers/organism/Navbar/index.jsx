import React, {
  useEffect, useRef, useState,
} from 'react'
import Links from '../../../components/atoms/Links'
import ButtonLink from '../../../components/atoms/Button/ButtonLink'
import Logo from '../../../components/atoms/Logo'
import DropDown from '../DropDown'
import useToggle from '../../../config/hooks/useToggle'
import useClickOutslide from '../../../config/hooks/useClickOutside'

const Navbar = () => {
  const [value, toggleValue] = useToggle(false)
  const [dimensions, setDimensions] = useState(0)

  const ref = useRef()

  useClickOutslide(ref, () => {
    if (value) toggleValue(false)
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(ref.current.offsetWidth)
    }
    if (dimensions > 753) {
      toggleValue(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref, toggleValue])

  useEffect(() => {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [value])

  return (
    <div className="bg-additional z-50 fixed w-full shadow-md" ref={ref}>
      {/* {
        value
      && <div className="fixed z-auto w-full h-full bg-gray-900 opacity-50" />
      } */}
      <DropDown open={value} />
      <div className="container flex flex-row justify-between items-center py-4 px-2">
        <div className="l-side">
          <Logo />
        </div>
        <div
          className="md:hidden"
          onClick={toggleValue}
          onKeyPress={toggleValue}
          role="button"
          tabIndex="0"
        >
          {!value ? (<i className="fas fa-bars text-2xl z-50" />) : (<i className="fas fa-times text-2xl z-50" />) }
        </div>

        <div className="r-side flex-row items-center flex md:flex sm:hidden xs:hidden">
          <Links direction="about">About</Links>
          <Links direction="product">Product</Links>
          <ButtonLink direction="getstarted">Get Started</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
