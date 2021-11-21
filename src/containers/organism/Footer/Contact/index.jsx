import React from 'react'

const Contact = () => (
  <div className="mt-4">
    <p className="font-bold text-2xl">Contact</p>
    <div className="flex items-center mt-2">
      <i className="fas fa-location-arrow text-base mr-6" />
      <p className="antialiased text-sm">Collins Street West, Victoria 8007, Australia.</p>
    </div>
    <div className="flex items-center mt-2">
      <i className="fas fa-phone text-base mr-6" />
      <p className="antialiased text-sm">+1 246-345-0695</p>
    </div>
    <div className="flex items-center mt-2">
      <i className="fas fa-envelope text-base mr-6" />
      <p className="antialiased text-sm">info@spanien.com</p>
    </div>
  </div>
)

export default Contact
