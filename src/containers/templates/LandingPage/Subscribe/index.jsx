import React from 'react'
import InputSubscribe from '../../../../components/molecules/InputSubscribe'

const Subscribe = () => (
  <div className="flex items-center justify-center">
    <div
      className="w-11/12 h-72 bg-no-repeat bg-cover bg-center mb-24 rounded-lg"
      style={{
        background: 'linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url("https://source.unsplash.com/zAjdgNXsMeg/2054x1072")',
      }}
    >
      <div className="flex flex-col w-full h-full items-center justify-center">
        <p className="text-white font-semibold text-2xl md:text-4xl">
          What are you waiting for?
          <br />
          {' '}
          Explore your home value.
        </p>
        <p className="text-gray-400 font-semi text-base w-6/12 text-center mt-2 md:text-xl">Enter your address for more Info.</p>
        <InputSubscribe />
      </div>
    </div>
  </div>
)

export default Subscribe
