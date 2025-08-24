"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Phone, MessageCircle, Download, HelpCircle, Calendar } from "lucide-react"

export function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Action Buttons - Desktop */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl rounded-full px-8 py-4 font-bold animate-pulse transform hover:scale-105 transition-all duration-300"
        >
          <GraduationCap className="h-6 w-6 mr-3" />
          Apply Now 2024
        </Button>

        <Button
          size="lg"
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl rounded-full px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 mr-3" />
          WhatsApp Chat
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="bg-white border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-2xl rounded-full px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
        >
          <Phone className="h-6 w-6 mr-3" />
          Call Now
        </Button>

        <Button
          size="lg"
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl rounded-full px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
        >
          <Download className="h-6 w-6 mr-3" />
          Brochure
        </Button>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-2xl rounded-full px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
        >
          <Calendar className="h-6 w-6 mr-3" />
          Campus Visit
        </Button>
      </div>

      {/* Help & Support Button - Desktop */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block">
        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-2xl rounded-full px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
        >
          <HelpCircle className="h-6 w-6 mr-3" />
          24/7 Support
        </Button>
      </div>
    </>
  )
}
