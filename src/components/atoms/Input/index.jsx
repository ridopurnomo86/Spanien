/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useState,
} from 'react'
import classNames from 'classnames'

const Input = () => {
  const [active, setActive] = useState(false)

  const actionClick = () => {
    setActive(!active)
  }

  return (
    <div className="w-full flex justify-center" onClick={actionClick}>
      <input type="text" className="block outline-none border-none rounded py-3 px-8 mt-4 w-6/12 text-md" placeholder="Enter your address" />
      <span className={classNames('relative float-right z-10 top-6 right-10 text-xl text-gray-500')}>
        <i className="fas fa-search" />
      </span>
    </div>
  )
}

export default Input
