import React, {
// lazy,
// useRef, useEffect,
} from 'react'
// import loadable from '@loadable/component'

import Header from '../../../components/atoms/Header'
import Hero from '../../templates/LandingPage/Hero'
import RecentProduct from '../../templates/LandingPage/RecentProduct'
import SecondSection from '../../templates/LandingPage/SecondSection'
import Subscribe from '../../templates/LandingPage/Subscribe'
import BlogSection from '../../templates/LandingPage/BlogSection'
import InfoSection from '../../templates/LandingPage/InfoSection'

// Loadable
// const Hero = lazy(() => import('../../templates/LandingPage/Hero'))
// const RecentProduct = lazy(() => import('../../templates/LandingPage/RecentProduct'))
// const SecondSection = lazy(() => import('../../templates/LandingPage/SecondSection'))
// const Subscribe = lazy(() => import('../../templates/LandingPage/Subscribe'))
// const BlogSection = lazy(() => import('../../templates/LandingPage/BlogSection'))
// const InfoSection = lazy(() => import('../../templates/LandingPage/InfoSection'))
// const Footer = lazy(() => import('../../templates/LandingPage/Footer'))

const LandingPage = () => (
  <div className="homepage">
    <Header title="Spanien">
      <Hero />
      <SecondSection />
      <InfoSection />
      <RecentProduct />
      <BlogSection />
      <Subscribe />
    </Header>
  </div>
)

export default LandingPage
