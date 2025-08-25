import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, CheckCircle, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VisionMissionPage() {
  const missionPoints = [
    {
      title: "Comprehensive Education",
      description:
        "To provide a comprehensive education in physiotherapy that empowers students with the knowledge, skills, and ethical foundation necessary to deliver exceptional care to diverse populations.",
      icon: GraduationCap,
    },
    {
      title: "Research Excellence",
      description:
        "To establish Bhojrajji Bhondekar Physiotherapy College as a premier research hub, dedicated to advancing innovative practices in rehabilitation and wellness.",
      icon: Target,
    },
    {
      title: "Continuous Learning",
      description:
        "To promote a culture of continuous learning and professional growth, ensuring our graduates are prepared to meet evolving healthcare needs.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Vision and Mission - Educational Excellence"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Our Foundation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Vision & Mission</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              The Guiding Principles That Drive Our Institution
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 font-heading">Our Vision</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full mt-2"></div>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-sans">
                      To be a leading institution in physiotherapy education and practice, renowned for fostering
                      skilled, compassionate practitioners who contribute to the health and well-being of individuals
                      and communities.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Leading institution in physiotherapy education",
                        "Fostering skilled and compassionate practitioners",
                        "Contributing to community health and well-being",
                      ].map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-neutral-600 font-sans">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="BBPC Vision - Leadership and Excellence"
                      width={600}
                      height={400}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-xl"></div>

                    {/* Floating hexagonal elements over the image */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm clip-path-hexagon flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#2D6CDF]/30 backdrop-blur-sm clip-path-hexagon flex items-center justify-center">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-heading">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                      <point.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center font-heading">{point.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-center font-sans">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8 font-heading">
              Our Vision & Mission in Action
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-sans mb-12">
              Every aspect of our institution reflects our commitment to excellence, innovation, and compassionate care.
              From our curriculum design to our clinical partnerships, we ensure that our vision and mission guide every
              decision we make.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 border-[#2D6CDF]/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Academic Excellence</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Our curriculum integrates the latest research and best practices in physiotherapy, ensuring our
                    graduates are well-prepared for the challenges of modern healthcare.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 border-[#FF6B35]/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Community Impact</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Through our hospital partnerships and community outreach programs, we ensure our students gain
                    real-world experience while serving those in need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Want to be part of our mission?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
              Join us in our commitment to excellence in physiotherapy education and make a lasting impact on healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/admission">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/about">Explore BBPC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
