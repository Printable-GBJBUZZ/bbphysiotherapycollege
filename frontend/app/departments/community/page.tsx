import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, CheckCircle, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function CommunityPhysiotherapyPage() {
  const services = [
    "Home-based Rehabilitation",
    "Community Health Programs",
    "Preventive Care Services",
    "Health Education & Awareness",
    "Rural Healthcare Outreach",
    "Disability Support Services",
    "Elderly Care Programs",
    "School Health Services",
  ]

  const benefits = [
    "Accessible care for mobility-limited patients",
    "Culturally sensitive treatment approaches",
    "Cost-effective healthcare delivery",
    "Family involvement in rehabilitation",
    "Community health promotion",
    "Preventive care focus",
  ]

  return (
    <>
      <Head>
        <title>Community Physiotherapy - BBPC Physiotherapy College</title>
        <meta
          name="description"
          content="Community physiotherapy training at BBPC focusing on home-based care and community health programs."
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <MobileNav />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 clip-path-hexagon flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Community Physiotherapy</h1>
              <p className="text-xl text-yellow-100 leading-relaxed font-sans mb-4">
                Bringing Rehabilitation & Support to Your Home & Community
              </p>
              <p className="text-lg text-yellow-200 leading-relaxed font-sans">
                Tailored physiotherapy services outside traditional clinical settings
              </p>
            </div>
          </div>
        </section>

        {/* Department Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-yellow-100 text-yellow-800 mb-6">Department Overview</Badge>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-heading">
                    Healthcare Beyond Clinical Walls
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                    Community physiotherapy, also referred to as community rehabilitation, delivers tailored
                    physiotherapy services outside traditional clinical settings—typically at patients' homes,
                    residential facilities, or community venues. It's designed for those who have difficulty accessing
                    outpatient clinics due to mobility issues, chronic conditions, or limited transportation.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans">
                    Our department focuses on making quality physiotherapy care accessible to all members of the
                    community, especially in rural areas around Bhandara, ensuring no one is left behind in their
                    journey to better health.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Community Physiotherapy"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">Community Services</h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Comprehensive physiotherapy services delivered in community settings
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-white text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-orange-100 clip-path-hexagon flex items-center justify-center mx-auto mb-4">
                        <Home className="h-6 w-6 text-yellow-600" />
                      </div>
                      <span className="font-medium text-neutral-800 font-sans">{service}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">
                  Benefits of Community Physiotherapy
                </h2>
                <p className="text-lg text-neutral-700 font-sans">Advantages of community-based physiotherapy care</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-800 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Make Healthcare Accessible to All</h2>
            <p className="text-lg mb-8 font-sans">
              Join our mission to bring quality physiotherapy care to every community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-heading">
                Apply Now 2025
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/departments">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent font-heading"
                >
                  View All Departments
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
