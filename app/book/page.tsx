'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEnvelope, faUser, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


export default function BookSession() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await addDoc(collection(db, 'thefise'), formData)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', date: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error adding document: ', error)
      setError('An error occurred while submitting your request. Please try again later.')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-green-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book a Session
      </motion.h1>
      <Card className="max-w-2xl mx-auto bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-green-800">Get in Touch</CardTitle>
          <CardDescription className="text-green-700">Fill out the form below to book your photography session.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-green-800">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Name
              </Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="border-green-300 focus:border-green-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-800">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email
              </Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required className="border-green-300 focus:border-green-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-green-800">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Preferred Date
              </Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required className="border-green-300 focus:border-green-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-green-800">
                <FontAwesomeIcon icon={faCommentAlt} className="mr-2" />
                Message
              </Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your photography needs" required className="border-green-300 focus:border-green-500" />
            </div>
            <Button type="submit" className="w-full bg-green-800 hover:bg-green-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Book Session'}
            </Button>
          </form>
        </CardContent>
      </Card>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Thank You!</h2>
              <p className="text-green-700">Your session has been booked successfully. We&apos;ll get back to you via email soon.</p>
              <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-green-800 hover:bg-green-700 text-white">Close</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-4 p-4 bg-red-100 text-red-800 rounded-md text-center"
        >
          {error}
        </motion.div>
      )}
    </div>
  )
}
