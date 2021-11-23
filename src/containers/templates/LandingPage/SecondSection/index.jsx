import React from 'react'
import ButtonLink from '../../../../components/atoms/Button/ButtonLink'
import CardOffer from '../../../organism/CardOffer'

const SecondSection = () => (
  <div className="flex flex-wrap flex-col items-center text-center justify-center mb-24 space-x-0 space-y-16 lg:flex-row lg:space-x-16 lg:space-y-0">
    <CardOffer sourceImage="https://source.unsplash.com/iKYMiczb5uk/1600x900">
      <p className="font-semibold antialiased text-2xl mb-2">More Apartement</p>
      <p className="antialiased font-medium mb-2">Special Offer for all Apartement.</p>
      <ButtonLink>View More</ButtonLink>
    </CardOffer>
    <CardOffer sourceImage="https://source.unsplash.com/CDgwSKg4Ues/1600x900">
      <p className="font-semibold antialiased text-2xl mb-2">Dont Miss</p>
      <p className="antialiased font-medium mb-2">40 % Discount all Apartement </p>
      <ButtonLink>Learn More</ButtonLink>
    </CardOffer>
  </div>
)

export default SecondSection
