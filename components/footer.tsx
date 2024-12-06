import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-green-800 py-6 mt-8 text-white">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2023 The Fise. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/_the_fise" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/the_fise" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <p className="mt-4">Photography by Agnel Francis Olakkengil</p>
        <p>Personal: <a href="https://www.instagram.com/oslohaz_e" target="_blank" rel="noopener noreferrer" className="underline">@oslohaz_e</a></p>
      </div>
    </footer>
  )
}

