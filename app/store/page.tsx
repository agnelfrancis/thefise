'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { products } from '../shop'

export default function Store() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Digital Products
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300"
            >
              <Link href={`/store/${product.id}`}>
                <div className="relative aspect-[4/3]">
                  <Image 
                    src={product.thumbnail} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="bg-white text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

