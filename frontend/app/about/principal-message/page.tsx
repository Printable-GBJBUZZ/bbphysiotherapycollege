import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Quote, BookOpen, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrincipalMessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="College Campus Academic Block"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Academic Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Principal's Message</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              A Word from the Academic Leadership of BBPC
            </p>
          </div>
        </div>
      </section>

      {/* Principal Introduction & Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Column - Principal Photo */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 p-8 lg:p-12 flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-sm">
                      <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Dr. Harshadip Kothare - Principal"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D6CDF]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <GraduationCap className="h-6 w-6 text-[#2D6CDF]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <BookOpen className="h-8 w-8 text-[#2D6CDF]" />
                      </div>
                    </div>

                    {/* Principal Details */}
                    <div className="text-center mt-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2 font-heading">
                        Dr. Harshadip Kothare
                      </h2>
                      <p className="text-lg text-[#2D6CDF] font-semibold mb-2 font-sans">Principal</p>
                      <p className="text-neutral-600 font-sans leading-relaxed">
                        Bhojrajji Bhondekar Physiotherapy College
                      </p>
                      <p className="text-neutral-500 text-sm font-sans">Sirsi, Taluka & District Bhandara</p>
                    </div>
                  </div>

                  {/* Right Column - Message Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <Quote className="h-8 w-8 text-[#2D6CDF] flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-heading">
                        Message from the Principal
                      </h3>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <div className="space-y-6 text-neutral-700 leading-relaxed font-sans">
                        <p className="text-lg">
                          It is a great pleasure and pride that I extend my heartfelt greetings to you from Bhojrajji
                          Bhondekar Physiotherapy College situated at Sirsi, District Bhandara.
                        </p>

                        <p>
                          As you embark on this exciting journey into the world of physiotherapy, I encourage you to
                          embrace every opportunity for learning and growth.
                        </p>

                        <p>
                          At our college, we are committed to providing you with a holistic education that seamlessly
                          blends theoretical knowledge with hands-on practical experience. Supported by our dedicated
                          faculty and cutting-edge facilities, including a hospital, you will acquire the skills and
                          insights needed to thrive in this dynamic field.
                        </p>

                        <p>
                          While the path ahead may present challenges, remember that each step you take is a vital part
                          of your journey toward becoming a skilled and compassionate practitioner. Approach your
                          studies with curiosity, engage wholeheartedly in clinical experiences, and foster meaningful
                          connections with your peers.
                        </p>

                        <p>
                          I invite you to join us in our quest for knowledge and enlightenment, where we together make a
                          lasting impact on the health and well-being of our communities. I am eager to witness the
                          contributions you will make to the future of physiotherapy.
                        </p>

                        <p className="font-semibold text-[#2D6CDF]">
                          Wishing you a fulfilling and successful academic year ahead!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Highlight Section */}
      <section className="py-16 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <Quote className="h-16 w-16 text-[#2D6CDF]/20 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-bold text-neutral-800 leading-relaxed font-heading mb-6">
                "Each step you take is a vital part of your journey toward becoming a skilled and compassionate
                practitioner."
              </blockquote>
              <cite className="text-lg text-[#2D6CDF] font-semibold font-sans">— Dr. Harshadip Kothare, Principal</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Users className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Learn More About BBPC's Programs and Faculty</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Discover our comprehensive physiotherapy programs and meet our dedicated faculty members
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/departments">Visit Departments</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
