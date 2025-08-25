"use client"

import { useState } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <Head>
        <title>BBPC Physiotherapy College - Contact Us | Get in Touch with Our Team in Bhandara</title>
        <meta
          name="description"
          content="Contact BBPC Physiotherapy College, Bhandara. Get admission information, campus visits, and answers to your questions. Call +91-7138-234567 or visit our campus."
        />
        <meta
          name="keywords"
          content="contact BBPC, physiotherapy college Bhandara, admission enquiry, campus visit, phone number, address"
        />
      </Head>

      <div className="min-h-screen bg-slate-50">
        <Header />
        <FloatingBookingButton />
        <MobileNav />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
                Have questions about our services? Ready to start your recovery journey? We're here to help and would
                love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                <Card className="text-center shadow-lg border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <MapPin className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      123 Health Street
                      <br />
                      Medical District
                      <br />
                      City, State 12345
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Phone className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Main: (555) 123-4567
                      <br />
                      Emergency: (555) 911-HELP
                      <br />
                      Fax: (555) 123-4568
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Mail className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      info@coremotionphysio.com
                      <br />
                      appointments@coremotionphysio.com
                      <br />
                      billing@coremotionphysio.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg border-0">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Mon-Fri: 7:00 AM - 8:00 PM
                      <br />
                      Saturday: 8:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Form */}
                <Card className="shadow-2xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">Send Us a Message</CardTitle>
                    <p className="text-sm sm:text-base text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Schedule Appointment</SelectItem>
                          <SelectItem value="services">Questions About Services</SelectItem>
                          <SelectItem value="insurance">Insurance Questions</SelectItem>
                          <SelectItem value="billing">Billing Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-base sm:text-lg py-3">
                      <Send className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                      Send Message
                    </Button>

                    <p className="text-xs sm:text-sm text-gray-500 text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </CardContent>
                </Card>

                {/* Map & Additional Info */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Embedded Map */}
                  <Card className="shadow-2xl border-0 overflow-hidden">
                    <div className="h-48 sm:h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-8 sm:h-12 w-8 sm:w-12 mx-auto mb-2" />
                        <p className="text-sm sm:text-base">Interactive Map</p>
                        <p className="text-xs sm:text-sm">123 Health Street, Medical District</p>
                      </div>
                    </div>
                  </Card>

                  {/* Emergency Contact */}
                  <Card className="shadow-lg border-0 bg-red-50">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-3">Emergency Contact</h3>
                      <p className="text-red-700 mb-4 text-sm sm:text-base">
                        If you're experiencing a medical emergency, please call 911 immediately.
                      </p>
                      <p className="text-red-700 text-sm sm:text-base">
                        For urgent physiotherapy needs outside business hours:
                      </p>
                      <p className="font-bold text-red-800 text-base sm:text-lg">(555) 911-HELP</p>
                    </CardContent>
                  </Card>

                  {/* WhatsApp Support */}
                  <Card className="shadow-lg border-0 bg-green-50">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3">WhatsApp Support</h3>
                      <p className="text-green-700 mb-4 text-sm sm:text-base">
                        Get quick answers to your questions via WhatsApp during business hours.
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700 w-full">
                        <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                        Chat on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Directions */}
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Getting Here</h3>
                      <div className="space-y-3 text-gray-600 text-sm sm:text-base">
                        <div>
                          <p className="font-semibold">By Car:</p>
                          <p>Free parking available in our lot. Handicap accessible spaces available.</p>
                        </div>
                        <div>
                          <p className="font-semibold">By Public Transit:</p>
                          <p>Bus routes 15, 22, and 45 stop within 2 blocks of our clinic.</p>
                        </div>
                        <div>
                          <p className="font-semibold">Accessibility:</p>
                          <p>Our clinic is fully wheelchair accessible with elevator access to all floors.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Physio Chat */}
        {showChat && (
          <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border z-50">
            <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="font-bold">Virtual Physio Assistant</h3>
              <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">
                ×
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm">Hi! I'm your virtual physio assistant. How can I help you today?</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg ml-8">
                  <p className="text-sm">I have questions about back pain treatment.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm">I'd be happy to help! Can you tell me more about your symptoms?</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl z-50 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        <Footer />
      </div>
    </>
  )
}
