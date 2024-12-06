'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader className="bg-green-800 text-white">
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription className="text-green-100">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-green-800">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-green-800">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-green-800">
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your photography needs" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-green-800 hover:bg-green-700 text-white">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
