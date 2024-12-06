'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-800">The Fise</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-green-800 hover:text-green-600">Home</Link></li>
            <li><Link href="/gallery" className="text-green-800 hover:text-green-600">Gallery</Link></li>
            <li><Link href="/services" className="text-green-800 hover:text-green-600">Services</Link></li>
            <li><Link href="/contact" className="text-green-800 hover:text-green-600">Contact</Link></li>
            <li><Link href="/book" className="text-green-800 hover:text-green-600">Book a Session</Link></li>
            <li><Link href="/edit-images" className="text-green-800 hover:text-green-600">Edit Images</Link></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-2">
          <a href="https://www.instagram.com/_the_fise" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-green-800 hover:text-green-600" />
          </a>
          <a href="https://x.com/the_fise" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-green-800 hover:text-green-600" />
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-green-800" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white py-4">
            <ul className="flex flex-col items-center space-y-2">
              <li><Link href="/" className="text-green-800 hover:text-green-600">Home</Link></li>
              <li><Link href="/gallery" className="text-green-800 hover:text-green-600">Gallery</Link></li>
              <li><Link href="/services" className="text-green-800 hover:text-green-600">Services</Link></li>
              <li><Link href="/contact" className="text-green-800 hover:text-green-600">Contact</Link></li>
              <li><Link href="/book" className="text-green-800 hover:text-green-600">Book a Session</Link></li>
              <li><Link href="/edit-images" className="text-green-800 hover:text-green-600">Edit Images</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

