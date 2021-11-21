import React from 'react'

const CardProduct = () => (
  <div className="bg-white rounded overflow-hidden shadow-md w-max inline-block text-justify">
    <div
      className="block bg-gray-500 animate-pulse"
      style={{
        width: '320px',
        height: '180px',
      }}
    />
    <div className="px-4 py-4">
      <div className="bg-gray-500 w-52 h-6 rounded-md animate-pulse mb-2" />
      <div className="bg-gray-500 w-52 h-6 rounded-md animate-pulse" />
    </div>
  </div>
)

export default CardProduct
