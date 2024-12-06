'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faImage, faPencilAlt, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const firebaseConfig = {
  apiKey: "AIzaSyAWG_pWxeIgb7dhkUpMfdDc6iiXmKJsy3A",
  authDomain: "agnel-portfolio.firebaseapp.com",
  projectId: "agnel-portfolio",
  storageBucket: "agnel-portfolio.appspot.com",
  messagingSenderId: "37118407869",
  appId: "1:37118407869:web:b5dd596424d2a8fdcf73d4",
  measurementId: "G-9PPYWD7FE4"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default function EditImages() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    imageLink: '',
    editInstructions: '',
    imageContent: '',
    consent: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    if (!formData.consent) {
      setError('Please provide consent to proceed.')
      setIsSubmitting(false)
      return
    }

    try {
      await addDoc(collection(db, 'thefise_upload'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        imageUrl: formData.imageLink,
        editInstructions: formData.editInstructions,
        imageContent: formData.imageContent,
        timestamp: new Date(),
      })
      setIsSubmitted(true)
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
        Edit Your Images
      </motion.h1>
      
      {step === 1 && (
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-green-800">Free Image Editing Service</CardTitle>
            <CardDescription className="text-green-700">
              We&apos;re excited to offer our image editing service completely free of charge!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
              <p className="font-bold">This feature is 100% FREE!</p>
              <p>Take advantage of our professional editing services at no cost.</p>
            </div>
            <Button onClick={() => setStep(2)} className="w-full bg-green-600 hover:bg-green-700 text-white">
              Continue to Image Submission
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-green-800">Submit Your Image</CardTitle>
            <CardDescription className="text-green-700">
              Please provide the necessary information and the link to your image.
            </CardDescription>
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
                <Label htmlFor="phone" className="text-green-800">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Phone Number
                </Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Phone Number" required className="border-green-300 focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-800">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required className="border-green-300 focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageLink" className="text-green-800 flex items-center">
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Image Link
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-green-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>To get an image link, go to imgbb.com, upload your image, and paste the link here.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Input id="imageLink" name="imageLink" type="url" value={formData.imageLink} onChange={handleInputChange} placeholder="https://example.com/your-image.jpg" required className="border-green-300 focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editInstructions" className="text-green-800">
                  <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
                  Editing Instructions
                </Label>
                <Textarea id="editInstructions" name="editInstructions" value={formData.editInstructions} onChange={handleInputChange} placeholder="Describe what you want done to the image" required className="border-green-300 focus:border-green-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageContent" className="text-green-800">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Image Content Description
                </Label>
                <Textarea id="imageContent" name="imageContent" value={formData.imageContent} onChange={handleInputChange} placeholder="Describe what's in the image" required className="border-green-300 focus:border-green-500" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="consent" 
                  checked={formData.consent} 
                  onCheckedChange={handleConsentChange}
                />
                <Label htmlFor="consent" className="text-green-800">
                  I confirm that the submitted image is appropriate and I consent to its processing.
                </Label>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit for Editing'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Success!</h2>
              <p className="text-green-700">Your image has been submitted for editing. We&apos;ll review it and get back to you soon.</p>
              <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-green-600 hover:bg-green-700 text-white">Close</Button>
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

