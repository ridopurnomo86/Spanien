import React from 'react'

import Logo from '../../../components/atoms/Logo'
import Contact from './Contact'
import UsefullLinks from './UsefullLinks'

const Footer = () => (
  <footer className="w-full bg-primary">
    <div className="flex flex-col py-12 container space-x-0 md:flex-row md:space-x-12 space-y-12 md:space-y-0">
      <div className="w-64">
        <div>
          <Logo />
          <p className="antialiased mt-2 font-semi text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Contact />
      </div>
      <div>
        <UsefullLinks />
      </div>
      <div>
        <p className="font-bold text-2xl mb-4">In Partnership with</p>
        <div className="flex space-x-6">
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" width="200" height="200" className="block object-fill filter grayscale " />
          <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" width="150" height="150" className="block object-fill filter grayscale " />
        </div>
      </div>
    </div>
    <div className="container flex items-center justify-between pb-8">
      <p className="antialiased text-sm">2021 Spanien - All rights reserved</p>
      <div className="flex items-center">
        <i className="fab fa-facebook mr-10" />
        <i className="fab fa-twitter mr-10" />
        <i className="fab fa-linkedin-in mr-10" />
      </div>
    </div>
  </footer>
)

export default Footer
