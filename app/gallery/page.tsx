'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // This would ideally be fetched from a CMS or database
  const images = [
    { src: '/gallery/outside.png', alt: 'Sunny Day Photo' }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="relative h-64 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center p-4">
              {image.alt}
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            src={selectedImage} 
            alt="Selected image"
            className="max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
        </motion.div>
      )}
    </div>
  )
}

