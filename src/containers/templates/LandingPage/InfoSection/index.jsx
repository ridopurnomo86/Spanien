import React from 'react'

import ArticelInfo from './ArticelInfo'
import SectionImage from './SectionImage'

const InfoSection = () => (
  <div className="flex justify-center w-full h-full container mb-28 px-12 py-2 flex-col lg:flex-row">
    <SectionImage />
    <ArticelInfo />
  </div>
)

export default InfoSection
