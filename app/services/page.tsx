'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


export default function Services() {
  const services = [
    { title: 'Weddings', description: 'Capture the magic of your special day with our elegant and timeless wedding photography.' },
    { title: 'Portraits', description: 'Individual or group portraits that showcase your personality and style.' },
    { title: 'Events', description: 'From corporate events to birthday parties, we\'ll document your gatherings in style.' },
    { title: 'Family Sessions', description: 'Cherish your family moments with beautiful, natural family portraits.' },
    { title: 'Baptisms', description: 'Commemorate this sacred occasion with reverent and joyful photography.' },
    { title: 'Photo Editing', description: 'Enhance your existing photos with our professional editing services.' },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.p 
        className="text-xl text-center mb-12 text-green-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        From the first cry to the last laugh, we$apos;re here to capture it all. Well, almost all. We&apos;ll leave those awkward teenage years to your family albums! 😉
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-green-800 text-white h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-100">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

