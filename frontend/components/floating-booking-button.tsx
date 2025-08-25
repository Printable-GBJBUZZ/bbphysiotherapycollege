"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingBookingButton() {
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
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      <Button
        size="lg"
        className="bg-orange-500 hover:bg-orange-600 text-white shadow-2xl rounded-full px-4 md:px-6 py-3 md:py-4 font-semibold animate-pulse text-sm md:text-base"
      >
        <Calendar className="h-4 md:h-5 w-4 md:w-5 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Book Now</span>
        <span className="sm:hidden">Book</span>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-2xl rounded-full px-4 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-base"
      >
        <Phone className="h-4 md:h-5 w-4 md:w-5 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Call</span>
        <span className="sm:hidden">📞</span>
      </Button>
    </div>
  )
}
