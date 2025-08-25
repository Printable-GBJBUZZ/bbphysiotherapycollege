import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Quote, Heart, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SecretaryMessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Students in Library - Educational Excellence"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Educational Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Secretary's Message</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              A Personal Commitment to Holistic, Inclusive Education
            </p>
          </div>
        </div>
      </section>

      {/* Secretary Introduction & Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Column - Secretary Photo */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 p-8 lg:p-12 flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-sm">
                      <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Dr. Ashvini Narendra Bhondekar - Secretary"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D6CDF]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FileText className="h-6 w-6 text-[#2D6CDF]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Heart className="h-8 w-8 text-[#2D6CDF]" />
                      </div>
                    </div>

                    {/* Secretary Details */}
                    <div className="text-center mt-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2 font-heading">
                        Dr. Ashvini Narendra Bhondekar
                      </h2>
                      <p className="text-lg text-[#2D6CDF] font-semibold mb-2 font-sans">Secretary</p>
                      <p className="text-neutral-600 font-sans leading-relaxed mb-2">Bhondekar Shikshan Sanstha</p>
                      <p className="text-sm text-neutral-500 font-sans">M.B.B.S., D.G.O</p>
                    </div>
                  </div>

                  {/* Right Column - Message Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <Quote className="h-8 w-8 text-[#2D6CDF] flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-heading">
                        Message from the Secretary
                      </h3>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <div className="space-y-6 text-neutral-700 leading-relaxed font-serif">
                        <p className="text-lg">
                          As you begin the most important phase of your education and the study of physiotherapy, which
                          will impact the rest of your lives, it brings me great pride to greet you to Bhojrajji
                          Bhondekar Physiotherapy College.
                        </p>

                        <p>
                          The purpose of the college is to train students to become independent professionals in
                          physiotherapy who will contribute positively to their communities. My motivation stemmed from
                          my aim to establish an educational system free from financial or geographic discrimination.
                        </p>

                        <p>
                          Our goal has always been to offer not just excellent instruction supported by the best
                          faculty, but also an atmosphere that promotes holistic growth and character development.
                        </p>

                        <p className="font-semibold text-[#2D6CDF]">
                          I guarantee we will stop at nothing to make BBPC one of the best physiotherapy colleges in
                          India.
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

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">Our Core Values</h2>
              <p className="text-lg text-neutral-600 font-sans">
                The principles that guide our commitment to inclusive, holistic education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Inclusive Education</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Creating an educational system free from financial or geographic discrimination
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Holistic Development</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Promoting comprehensive growth and character development alongside academic excellence
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Professional Excellence</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Training independent professionals who contribute positively to their communities
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
                  <GraduationCap className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Join Our Educational Journey</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Experience the transformative power of inclusive, holistic physiotherapy education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/about/infrastructure">Campus Infrastructure</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/courses">Explore Courses</Link>
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
