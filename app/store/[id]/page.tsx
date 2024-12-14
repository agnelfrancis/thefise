'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { products } from '../../shop'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const [showRedirectPopup, setShowRedirectPopup] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [redirectTimer, setRedirectTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (showRedirectPopup && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      setRedirectTimer(timer)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      window.location.href = product?.buyUrl || '/'
    }
  }, [showRedirectPopup, countdown, product?.buyUrl])

  if (!product) {
    return <div>Product not found</div>
  }

  const handleBuyNow = () => {
    setShowRedirectPopup(true)
  }

  const cancelRedirect = () => {
    setShowRedirectPopup(false)
    setCountdown(5)
    if (redirectTimer) {
      clearTimeout(redirectTimer)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-6">{product.name}</h1>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-3xl font-bold text-green-800">${product.price.toFixed(2)}</span>
            <Button 
              onClick={handleBuyNow} 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
            >
              Buy now
            </Button>
          </div>
          <p className="text-lg text-green-700 mb-8">{product.description}</p>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-xl text-green-800 mb-4">What&apos;s included:</h3>
            <ul className="grid grid-cols-2 gap-3">
              {product.contents.map((item, index) => (
                <li key={index} className="flex items-center text-green-700">
                  <Check className="h-5 w-5 mr-2 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-bold text-xl text-green-800 mb-4">Product Details</h3>
          <div className="grid grid-cols-2 gap-4 text-green-700">
            <div>
              <span className="font-semibold">Size:</span> {product.size}
            </div>
            <div>
              <span className="font-semibold">Format:</span> Digital Download
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showRedirectPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-4">Redirecting to Gumroad</h2>
              <p className="text-green-700 mb-6">
                You will be redirected to Gumroad&apos;s secure checkout in {countdown} seconds...
              </p>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={cancelRedirect}>
                  Cancel
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = product.buyUrl}
                >
                  Go now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

