import React from 'react'
import {
  Link,
} from 'react-router-dom'

const links = [
  {
    title: 'Useful Links',
    pathname: {
      '/terms': 'Terms Of Use',
      '/privacy': 'Privacy Policy',
      '/contactus': 'Contact Us',
      '/works': 'How It Works',
      '/faq': 'Faq',
      '/about': 'About Us',
    },
  },
]

const UsefullLinks = () => (
  <div>
    {links.map((link) => (
      <div key={link}>
        <p className="font-bold text-2xl mb-4">{link.title}</p>
        {Object.keys(link.pathname).map((path) => (
          <Link key={path} to={`${path}`}>
            <p className="font-semi antialiased text-sm mb-2">
              {link.pathname[path]}
            </p>
          </Link>
        ))}
      </div>
    ))}
  </div>
)

export default UsefullLinks
