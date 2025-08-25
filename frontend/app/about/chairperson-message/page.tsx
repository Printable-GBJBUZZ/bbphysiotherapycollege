import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Quote, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ChairpersonMessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Educational Excellence and Leadership"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Institutional Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Chairperson's Message</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              A Visionary Commitment to Transforming Education
            </p>
          </div>
        </div>
      </section>

      {/* Chairperson Introduction & Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Column - Chairperson Photo */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 p-8 lg:p-12 flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-sm">
                      <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Hon. Smt. Manjula B. Bhondekar - Chairperson"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D6CDF]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Crown className="h-6 w-6 text-[#2D6CDF]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Users className="h-8 w-8 text-[#2D6CDF]" />
                      </div>
                    </div>

                    {/* Chairperson Details */}
                    <div className="text-center mt-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2 font-heading">
                        Hon. Smt. Manjula B. Bhondekar
                      </h2>
                      <p className="text-lg text-[#2D6CDF] font-semibold mb-2 font-sans">Chairperson</p>
                      <p className="text-neutral-600 font-sans leading-relaxed">Bhondekar Shikshan Sanstha, Bhandara</p>
                    </div>
                  </div>

                  {/* Right Column - Message Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <Quote className="h-8 w-8 text-[#2D6CDF] flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-heading">
                        Message from the Chairperson
                      </h3>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <div className="space-y-6 text-neutral-700 leading-relaxed font-serif">
                        <p className="text-lg">
                          By providing the best education, technical know-how, personality traits, and leadership
                          qualities to grow as future Indian leaders with values in life, Bhondekar Shikshan Sanstha
                          gradually strives to achieve overall human development in line with the national policy of
                          expanding youth access to higher education.
                        </p>

                        <p>
                          Our goal is to offer first-rate facilities, infrastructure, and an engaging and educational
                          learning environment for top-notch instruction.
                        </p>

                        <p>
                          Dedicated learners enroll in the program with the goal of obtaining a degree and developing
                          into capable adults who can fulfill their civic and national obligations. All interested
                          students are cordially invited to visit our campus. Your time at Bhojrajji Bhondekar
                          Physiotherapy College will be unforgettable, we guarantee it.
                        </p>

                        <p className="font-semibold text-[#2D6CDF]">
                          We pledge to give you the greatest learning environment possible on our campus.
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

      {/* Pull-Quote Section */}
      <section className="py-16 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <Quote className="h-16 w-16 text-[#2D6CDF]/20 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-bold text-neutral-800 leading-relaxed font-heading mb-6">
                "We believe in nurturing future leaders with values, knowledge, and social responsibility."
              </blockquote>
              <cite className="text-lg text-[#2D6CDF] font-semibold font-sans">
                — Hon. Smt. Manjula B. Bhondekar, Chairperson
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Vision in Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                Our Vision in Action
              </h2>
              <p className="text-lg text-neutral-600 font-sans">
                Witness how our commitment translates into excellence across all aspects of education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Leadership Development</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Nurturing future leaders with strong values and ethical foundation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Quality Education</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Providing comprehensive education with modern facilities and infrastructure
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Social Responsibility</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Developing capable citizens who fulfill their civic and national obligations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <BookOpen className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Discover Our Vision In Action</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Experience firsthand how our commitment to excellence shapes the future of physiotherapy education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/about/society-founder">About Society</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/departments">Explore Departments</Link>
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
