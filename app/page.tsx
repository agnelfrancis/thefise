'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faPortrait, faWandMagicSparkles, faClock, faHeart, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'lucide-react'
import { ReactNode } from 'react'

const FadeInWhenVisible = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-green-800">Capture Life&apos;s Moments with The Fise™</h1>
        <p className="text-xl mb-8 text-green-700">High-quality, minimalistic photography for all of life&apos;s events</p>
        <div className="flex justify-center space-x-4">
          <Button asChild className="bg-green-800 hover:bg-green-700 text-white">
            <Link href="/book">Book a Session</Link>
          </Button>
          <Button asChild className="bg-green-800 hover:bg-green-700 text-white group relative overflow-hidden">
            <Link href="/store">
              <ShoppingCart className="mr-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
              <span className="relative z-10">Visit Store</span>
              <motion.div
                className="absolute inset-0 bg-green-700"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </div>
      </motion.section>

      <FadeInWhenVisible>
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { icon: faCameraRetro, title: 'Life Events', description: 'From baptisms to weddings, we capture it all.' },
              { icon: faPortrait, title: 'Portrait Sessions', description: 'Capture your unique personality and style.' },
              { icon: faWandMagicSparkles, title: 'Photo Editing', description: 'Enhance your existing photos professionally.' }
            ].map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="bg-white shadow-lg border-green-200 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <FontAwesomeIcon icon={service.icon} className="mr-2" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-green-700">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Why Choose The Fise™?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { icon: faClock, title: 'Quick Turnaround', description: 'We deliver your memories in record time without compromising on quality.' },
              { icon: faHeart, title: 'Passion for Photography', description: 'We pour our heart into every shot, ensuring each photo tells a story.' },
              { icon: faSmileBeam, title: 'Customer Satisfaction', description: 'Your happiness is our priority. We work closely with you to exceed your expectations.' }
            ].map((feature, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-green-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="py-16">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="https://agnelfranciso.netlify.app/images/profile.jpg" alt="Agnel Francis Olakkengil" width={400} height={400} className="rounded-full mx-auto" />
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-green-800">About The Fise™</h2>
              <p className="mb-4 text-green-700">The Fise™ is a photography company owned by Agnel Francis Olakkengil, specializing in high-quality, minimalistic photography. We believe in capturing the essence of every moment, from the first cry to the last laugh.</p>
              <p className="mb-4 text-green-700">Currently, we&apos;re rocking it with mobile photography, proving that great photos don&apos;t always need fancy equipment. But don&apos;t worry, we&apos;re gearing up to dive into the world of DSLRs soon. Because let&apos;s face it, phone cameras are pretty awesome too, right? 😉</p>
              <p className="text-green-700">Remember, we&apos;re here to capture everything from birth to... well, let&apos;s just say we&apos;re with you for the long haul. (Except for those awkward middle school years. We all agree those are best left undocumented, right?)</p>
              <Button asChild className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  )
}
