"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Gift, Mail } from "lucide-react"
import Image from "next/image"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("coremotion-newsletter-popup")
      if (!hasSeenPopup) {
        setIsVisible(true)
      }
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("coremotion-newsletter-popup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full shadow-2xl border-0 overflow-hidden">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
            alt="Free Exercise Guide"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <button onClick={handleClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="h-6 w-6 text-yellow-400" />
              <span className="font-bold text-lg">FREE Exercise Guide</span>
            </div>
            <p className="text-sm text-blue-100">5-Minute Daily Routine for Pain Relief</p>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Exercise Guide</h3>
            <p className="text-gray-600">
              Join 25,000+ people who receive our expert physiotherapy tips and exclusive wellness content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3"
            >
              Get My Free Guide
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            No spam, unsubscribe anytime. Your privacy is protected.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
