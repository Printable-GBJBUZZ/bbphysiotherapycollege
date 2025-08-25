"use client"

import { Button } from "@/components/ui/button"
import { Home, BookOpen, Phone, MessageCircle, User, Calendar } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  return (
    <>
      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50 md:hidden">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Link
            href="/"
            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-blue-600 active:text-blue-600"
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            href="/courses"
            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-blue-600 active:text-blue-600"
          >
            <BookOpen className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Courses</span>
          </Link>
          <Link
            href="/about"
            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-blue-600 active:text-blue-600"
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">About</span>
          </Link>
          <Link
            href="/booking"
            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-blue-600 active:text-blue-600"
          >
            <Calendar className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Apply</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center py-2 px-1 text-gray-600 hover:text-blue-600 active:text-blue-600"
          >
            <Phone className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </div>

      {/* WhatsApp CTA Bar for Mobile */}
      <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-3 z-40 md:hidden">
        <Button className="w-full bg-transparent hover:bg-white/20 text-white font-bold py-3 flex items-center justify-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Apply Now on WhatsApp - Limited Seats!
        </Button>
      </div>
    </>
  )
}
