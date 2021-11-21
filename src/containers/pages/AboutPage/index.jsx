import React from 'react'

import Header from '../../../components/atoms/Header'

const AboutPage = () => (
  <Header title="About">
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div
        className="w-full h-herosize bg-no-repeat bg-cover bg-center mb-8"
        style={{
          background: 'linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url("https://source.unsplash.com/Q2jaIZoefn4/2054x1072")',
        }}
      />
      <div className="mb-28">
        <div className="border-b-2 mb-8">
          <p className="antialiased font-normal text-4xl text-center mb-4">
            About
            {' '}
            <span className="font-bold text-logo">Spanien®</span>
          </p>
        </div>
        <div className="max-w-2xl flex flex-col items-center justify-center text-justify xs:px-12">
          <p className="antialiased">
            For years, millions of home shoppers have turned to Spanien® to find their dream home.
            Operated by Move, Inc., Spanien® offers a comprehensive list of for-sale
            properties, as well as the
            information and tools to make informed real estate decisions. Today, more than
            ever, Spanien®
            is The Home of Home Search℠.
          </p>
          <p className="antialiased mt-4">
            Spanien® also offers homeowners a bevy of useful tools and resources through the
            My Home℠ dashboard. My Home℠ dashboard allows property owners to manage their
            home like the important investment it is
            by tracking their home’s value over time,
            researching and managing home
            improvements, and scouting
            other similar properties in the neighborhood.
          </p>
        </div>
      </div>
    </div>
  </Header>
)

export default AboutPage
