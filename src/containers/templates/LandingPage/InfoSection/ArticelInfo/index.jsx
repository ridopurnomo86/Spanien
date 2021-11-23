/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useState,
} from 'react'

const ArticelInfo = () => {
  const [details, setDetails] = useState(true)
  const [details1, setDetails1] = useState(false)
  return (
    <div className="w-full max-w-full lg:w-6/12">
      <div className="h-full w-full px-6 sm:mt-6 xs:mt-6 md:mt-0">
        {/* Content List */}
        <div onClick={() => setDetails(!details)}>
          <div className="flex items-center space-x-4 border-b-2 border-gray-400 cursor-pointer">
            {
                details ? (
                  <p className="fas fa-angle-down text-2xl" />
                ) : (
                  <p className="fas fa-angle-right text-2xl" />
                )
              }
            <p className="text-lg font-bold">What is this About?</p>
          </div>
          <div>
            { details && (
            <p className="antialiased font-normal text-sm md:text-base text-justify mt-2">
              Spanien®, give offers an online platform that helps independent
              landlords simplify how they find, screen, and manage their tenants with our software.
              You’ll gain access to our complete set of tools, guidance,and educational content to
              help you be a confident and professional landlord whether you have one unit or 10.
            </p>
            )}
          </div>
        </div>

        <div onClick={() => setDetails1(!details1)}>
          <div className="flex items-center space-x-4 border-b-2 border-gray-400 cursor-pointer">
            {
                details1 ? (
                  <p className="fas fa-angle-down text-2xl" />
                ) : (
                  <p className="fas fa-angle-right text-2xl" />
                )
              }
            <p className="text-lg font-bold">How do I get leads into my Spanien® professional dashboard?</p>
          </div>
          <div>
            { details1 && (
            <p className="antialiased font-normal text-sm md:text-base                                                                                                                 text-justify mt-2">
              Connect the email account that you regularly use for your leads
              directly to the Spanien® professional dashboard, and we’ll bring them in for you.
            </p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ArticelInfo
