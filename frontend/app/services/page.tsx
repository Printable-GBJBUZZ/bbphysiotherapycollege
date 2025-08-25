import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
  const services = [
    {
      title: "Back Pain Relief",
      description:
        "Advanced spinal rehabilitation using cutting-edge technology and evidence-based treatment protocols.",
      icon: "🎯",
      color: "bg-blue-500",
      duration: "45-60 min",
      sessions: "6-12 sessions",
      successRate: "94%",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Comprehensive spinal assessment",
        "Manual therapy techniques",
        "Postural correction program",
        "Core strengthening exercises",
        "Pain management education",
        "Ergonomic workplace setup",
      ],
      conditions: [
        "Chronic lower back pain",
        "Herniated disc",
        "Sciatica",
        "Muscle spasms",
        "Postural dysfunction",
        "Work-related back injuries",
      ],
      pricing: "From $120/session",
      insurance: "Most insurance accepted",
    },
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Elite athletic recovery programs designed by sports medicine specialists for optimal performance return.",
      icon: "⚡",
      color: "bg-teal-500",
      duration: "60-90 min",
      sessions: "8-16 sessions",
      successRate: "96%",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Sport-specific movement analysis",
        "Functional performance testing",
        "Injury prevention protocols",
        "Return-to-sport clearance",
        "Performance optimization",
        "Biomechanical correction",
      ],
      conditions: [
        "ACL/MCL injuries",
        "Shoulder impingement",
        "Tennis/golfer's elbow",
        "Ankle sprains",
        "Muscle strains",
        "Overuse injuries",
      ],
      pricing: "From $150/session",
      insurance: "Sports insurance covered",
    },
    {
      title: "Neurological Physiotherapy",
      description:
        "Specialized rehabilitation for neurological conditions using advanced neurorehabilitation techniques.",
      icon: "🧠",
      color: "bg-purple-500",
      duration: "60-75 min",
      sessions: "12-24 sessions",
      successRate: "89%",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Neurological assessment",
        "Gait training programs",
        "Balance and coordination",
        "Cognitive rehabilitation",
        "Adaptive equipment training",
        "Family education support",
      ],
      conditions: [
        "Stroke recovery",
        "Parkinson's disease",
        "Multiple sclerosis",
        "Spinal cord injuries",
        "Traumatic brain injury",
        "Peripheral neuropathy",
      ],
      pricing: "From $180/session",
      insurance: "Medicare/Medicaid accepted",
    },
    {
      title: "Pediatric Physiotherapy",
      description: "Gentle, play-based therapy programs designed specifically for children's developmental needs.",
      icon: "👶",
      color: "bg-pink-500",
      duration: "30-45 min",
      sessions: "8-20 sessions",
      successRate: "92%",
      image:
        "https://images.unsplash.com/photo-1628773723934-2f5229993cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Developmental milestone assessment",
        "Play-based therapy sessions",
        "Parent/caregiver education",
        "School consultation services",
        "Adaptive equipment recommendations",
        "Sensory integration therapy",
      ],
      conditions: [
        "Cerebral palsy",
        "Developmental delays",
        "Torticollis",
        "Coordination disorders",
        "Autism spectrum disorders",
        "Genetic conditions",
      ],
      pricing: "From $100/session",
      insurance: "Pediatric coverage available",
    },
    {
      title: "Post-Surgical Recovery",
      description: "Comprehensive rehabilitation programs to optimize healing and restore function after surgery.",
      icon: "🏥",
      color: "bg-orange-500",
      duration: "45-75 min",
      sessions: "12-20 sessions",
      successRate: "95%",
      image:
        "https://images.unsplash.com/photo-1618456284634-5389dfa5a673?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Pre-surgical education",
        "Post-operative care protocols",
        "Scar tissue management",
        "Progressive strengthening",
        "Range of motion restoration",
        "Functional activity training",
      ],
      conditions: [
        "Joint replacement surgery",
        "Arthroscopic procedures",
        "Fracture repair",
        "Ligament reconstruction",
        "Spinal surgery",
        "Cardiac surgery recovery",
      ],
      pricing: "From $140/session",
      insurance: "Surgical coverage included",
    },
    {
      title: "Ergonomic Training",
      description:
        "Workplace wellness programs to prevent injuries and optimize productivity through proper ergonomics.",
      icon: "💼",
      color: "bg-green-500",
      duration: "60-90 min",
      sessions: "4-8 sessions",
      successRate: "91%",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Workplace assessment",
        "Ergonomic equipment setup",
        "Posture training programs",
        "Movement break protocols",
        "Stress management techniques",
        "Team wellness workshops",
      ],
      conditions: [
        "Repetitive strain injuries",
        "Carpal tunnel syndrome",
        "Tech neck syndrome",
        "Eye strain",
        "Lower back pain",
        "Workplace stress",
      ],
      pricing: "From $200/assessment",
      insurance: "Corporate packages available",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <FloatingElements />
      <MobileNav />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold border-0 mb-4 sm:mb-6">
              🌟 World-Class Treatment Programs
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Specialized Care for Every Need</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Evidence-based physiotherapy solutions delivered by internationally certified specialists. From sports
              injuries to neurological conditions, we have the expertise to help you recover.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl"
            >
              Book Your Assessment
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-slate-50 to-blue-50"} py-12 sm:py-16 rounded-3xl shadow-lg`}
              >
                <div className="container mx-auto px-6 sm:px-8">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="space-y-6 sm:space-y-8">
                        {/* Service Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                          <div
                            className={`w-16 sm:w-20 h-16 sm:h-20 ${service.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                              {service.title}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {service.duration}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {service.sessions}
                              </Badge>
                              <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                                <Star className="h-3 w-3" />
                                {service.successRate} success
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{service.description}</p>

                        {/* Features and Conditions */}
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                          <div>
                            <h4 className="font-bold text-gray-800 mb-4 text-base sm:text-lg">Treatment Features:</h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                  <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm sm:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-gray-800 mb-4 text-base sm:text-lg">Common Conditions:</h4>
                            <ul className="space-y-3">
                              {service.conditions.map((condition, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm sm:text-base">{condition}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Pricing and Actions */}
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 sm:p-6 rounded-2xl">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                              <div className="text-xl sm:text-2xl font-bold text-gray-800">{service.pricing}</div>
                              <div className="text-xs sm:text-sm text-gray-600">{service.insurance}</div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                                Book This Service
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                              <Button variant="outline">Learn More</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="rounded-2xl shadow-2xl w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Treatment Process</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Every patient receives personalized care through our comprehensive, evidence-based treatment approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Comprehensive evaluation using advanced diagnostic tools and movement analysis.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Treatment Plan",
                description: "Personalized program developed by our multidisciplinary team of specialists.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Active Treatment",
                description: "Evidence-based therapy combining manual techniques with cutting-edge technology.",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous monitoring, progress tracking, and long-term wellness planning.",
                icon: "📈",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span className="text-black font-bold text-lg sm:text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let pain or injury hold you back. Our world-class team is ready to help you achieve your movement
            goals and return to the activities you love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Book Free Assessment
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm w-full sm:w-auto"
            >
              Call +1-800-COREMOTION
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
              <span className="text-blue-100 text-sm sm:text-base">Free Initial Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
              <span className="text-blue-100 text-sm sm:text-base">All Insurance Accepted</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
              <span className="text-blue-100 text-sm sm:text-base">Same-Day Appointments</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
