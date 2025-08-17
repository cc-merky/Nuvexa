"use client"

import type React from "react"
import { useState } from "react"
import { supabase, type ContactSubmission } from "@/lib/supabase"

function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-50 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Success icon */}
          <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for reaching out to Nuvexa. We've received your message and will get back to you within 24 hours.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

function ErrorModal({ isOpen, onClose, message }: { isOpen: boolean; onClose: () => void; message: string }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-50 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Submission Failed</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      
      const submissionData: Omit<ContactSubmission, "id" | "created_at"> = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `${formData.message}${formData.company ? `\n\nCompany: ${formData.company}` : ""}${formData.service ? `\nService Interest: ${formData.service}` : ""}`,
      }


      const { data, error } = await supabase.from("contact_submissions").insert([submissionData]).select()

      if (error) {
        console.log(error)
        throw error
      }

      console.log("[v0] Form submitted successfully to database:", data)
      setShowSuccessModal(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      })
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setErrorMessage("There was an error submitting your message. Please try again or contact us directly.")
      setShowErrorModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  const handleCloseErrorModal = () => {
    setShowErrorModal(false)
    setErrorMessage("")
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a service</option>
                <option value="ai-agents">AI Agents</option>
                <option value="cloud-infrastructure">Cloud Infrastructure</option>
                <option value="bespoke-applications">Bespoke Applications</option>
                <option value="consulting">Technology Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
      <ErrorModal isOpen={showErrorModal} onClose={handleCloseErrorModal} message={errorMessage} />
    </>
  )
}
