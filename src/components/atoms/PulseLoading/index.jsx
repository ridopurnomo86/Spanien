import React from 'react'
import {
  PulseLoader,
} from 'react-spinners'

const PulseLoading = () => (
  <div className="w-full h-screen z-50 flex items-center justify-center">
    <PulseLoader color="#3498DB" />
  </div>
)

export default PulseLoading
