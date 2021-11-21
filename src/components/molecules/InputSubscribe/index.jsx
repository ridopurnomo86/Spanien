import React from 'react'

const InputSubscribe = () => (
  <div className="w-full flex justify-center">
    <input type="text" className="shadow appearance-none block outline-none border-2 rounded py-3 px-8 mt-4 w-6/12 text-md focus:border-blue-500" placeholder="Enter your address" />
    <span className="relative z-10 top-7 right-10 text-xl text-gray-900">
      <i className="fas fa-search" />
    </span>
  </div>
)

export default InputSubscribe
