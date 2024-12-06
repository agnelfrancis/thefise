'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About The Fise™
      </motion.h1>
      
      <div className="flex flex-col md:flex-row items-center mb-16">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/images/image.png" alt="Agnel Francis Olakkengil" width={400} height={400} className="rounded-full mx-auto" />
        </motion.div>
        <motion.div 
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-800">Meet Agnel Francis Olakkengil</h2>
          <p className="mb-4 text-green-700">Hey there! I&apos;m Agnel, the face behind The Fise™. Photography isn&apos;t just my profession; it&apos;s my passion. I believe that every moment is a story waiting to be told, and I&apos;m here to help you tell yours through my lens.</p>
          <p className="mb-4 text-green-700">My journey in photography started with a simple smartphone camera and a desire to capture the beauty around me. Today, I&apos;ve turned that passion into a thriving business, proving that great photography is more about the eye behind the camera than the equipment itself.</p>
          <p className="text-green-700">When I&apos;m not behind the camera, you can find me exploring new places, trying out different cuisines, or simply enjoying a good book. I bring this zest for life into every photo I take, ensuring that each image is as unique and vibrant as the moment it captures.</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-green-800">Our Philosophy</h2>
        <p className="text-center text-green-700 max-w-2xl mx-auto">At The Fise™, we believe in the power of simplicity. Our minimalistic approach to photography allows us to focus on what truly matters - the emotions, the connections, and the fleeting moments that make life beautiful. We&apos;re not just taking pictures; we&apos;re preserving memories.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <FontAwesomeIcon icon={faCamera} className="text-4xl text-green-700 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">Capturing Moments</h3>
          <p className="text-green-700">We specialize in freezing time, one click at a time. From the tiniest yawn of a newborn to the joyous tears at a wedding, we&apos;re there to document it all.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <FontAwesomeIcon icon={faHeart} className="text-4xl text-green-700 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">Passion-Driven</h3>
          <p className="text-green-700">Our love for photography shines through in every image we create. It&apos;s not just a job for us; it&apos;s a calling.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <FontAwesomeIcon icon={faSmile} className="text-4xl text-green-700 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">Client-Focused</h3>
          <p className="text-green-700">Your vision is our priority. We work closely with you to ensure that the final product exceeds your expectations.</p>
        </motion.div>
      </div>
    </div>
  )
}
