import React from 'react'
import CardBlog from '../../../organism/CardBlog'

const BlogSection = () => (
  <>
    <div className="flex flex-col items-center justify-center mb-12">
      <p className="antialiased font-bold text-4xl mb-2">Some Tips and News.</p>
      <p className="antialiased font-semi text-gray-800 text-center">Explore inspirational stories about selling house, and some information.</p>
    </div>
    <div className="flex flex-wrap w-full h-full mb-28 container items-center justify-center space-y-12 px-2 md:flex-nowrap md:space-y-0 md:space-x-12 md:px-0">
      <CardBlog classStyle="flex-auto md:flex-1" imageEndpoint="https://source.unsplash.com/7lvzopTxjOU">
        <p className="antialiased text-white text-2xl font-bold">7 Essential Tips for Selling your Home</p>
        <a className="inline-block text-white no-underline py-1" href="https://www.roomsketcher.com/blog/tips-for-selling-your-home/" target="_blank" rel="noreferrer">Read More</a>
      </CardBlog>

      <CardBlog classStyle="flex-1 max-w-lg" imageEndpoint="https://source.unsplash.com/bmALnwwLumQ">
        <p className="antialiased text-white text-2xl font-bold">Things to Do to Get the Most Value When Selling Your Home</p>
        <a className="inline-block text-white no-underline py-1" href="https://www.thehouseshop.com/property-blog/things-to-do-to-get-the-most-value-when-selling-your-home/" target="_blank" rel="noreferrer">Read More</a>
      </CardBlog>
    </div>
  </>
)

export default BlogSection
