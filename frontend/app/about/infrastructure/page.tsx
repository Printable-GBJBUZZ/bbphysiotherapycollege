import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Monitor, BookOpen, FlaskConical, Heart, Home, Bus, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Campus Infrastructure"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Campus Facilities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Campus Infrastructure Overview</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              Empowering Learning through Innovation and Facilities
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Simulation Center */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 font-heading">Simulation Center</h2>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
                  Our state-of-the-art simulation center replicates real-world clinical scenarios, enabling confident,
                  practice-based learning. Students gain hands-on experience in a controlled environment before
                  transitioning to actual patient care.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-50 text-[#2D6CDF] border-blue-200">
                    Clinical Scenarios
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-[#2D6CDF] border-blue-200">
                    Advanced Equipment
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-[#2D6CDF] border-blue-200">
                    Safe Practice
                  </Badge>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern Simulation Center"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Modern Classrooms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Smart Classrooms"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 font-heading">Modern Classrooms</h2>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
                  Our classrooms are equipped with advanced sound systems, LCD projectors, interactive learning boards,
                  and high-speed internet connectivity to facilitate engaging and interactive learning experiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-orange-50 text-[#FF6B35] border-orange-200">
                    Smart Boards
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-[#FF6B35] border-orange-200">
                    Audio-Visual Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-50 text-[#FF6B35] border-orange-200">
                    High-Speed Internet
                  </Badge>
                </div>
              </div>
            </div>

            {/* Library & Resource Center */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 font-heading">Library & Resource Center</h2>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
                  Our comprehensive library houses an extensive collection of physiotherapy textbooks, international
                  journals, research papers, and digital resources to support academic excellence and research
                  activities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-green-50 text-[#10B981] border-green-200">
                    Digital Resources
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-[#10B981] border-green-200">
                    Research Journals
                  </Badge>
                  <Badge variant="secondary" className="bg-green-50 text-[#10B981] border-green-200">
                    Study Spaces
                  </Badge>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern Library and Resource Center"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Well-Equipped Labs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Well-Equipped Physiotherapy Labs"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 font-heading">Well-Equipped Labs</h2>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
                  Dedicated laboratory spaces for manual therapy, electrotherapy, exercise therapy, and rehabilitation
                  practice with modern equipment and tools for comprehensive practical training.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-purple-50 text-[#8B5CF6] border-purple-200">
                    Manual Therapy
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-[#8B5CF6] border-purple-200">
                    Electrotherapy
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-50 text-[#8B5CF6] border-purple-200">
                    Rehabilitation
                  </Badge>
                </div>
              </div>
            </div>

            {/* Community Health Center */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800 font-heading">Community Health Center</h2>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6 font-sans">
                  Our on-campus community health center provides students with opportunities for student-led, supervised
                  outreach programs and real-world service learning experiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-red-50 text-[#EF4444] border-red-200">
                    Community Outreach
                  </Badge>
                  <Badge variant="secondary" className="bg-red-50 text-[#EF4444] border-red-200">
                    Supervised Practice
                  </Badge>
                  <Badge variant="secondary" className="bg-red-50 text-[#EF4444] border-red-200">
                    Service Learning
                  </Badge>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Community Health Center"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Facilities Grid */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                Additional Campus Facilities
              </h2>
              <p className="text-lg text-neutral-600 font-sans">
                Supporting your academic journey with comprehensive amenities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 font-heading">Hostel & Cafeteria</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed font-sans mb-4">
                    Separate, hygienic hostel facilities for boys and girls with modern amenities. Fresh and nutritious
                    meals served in our well-maintained cafeteria.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Separate Hostels
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Nutritious Meals
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Modern Amenities
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center">
                      <Bus className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 font-heading">Transportation</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed font-sans mb-4">
                    Safe and reliable transport services for students and staff from nearby towns and villages, ensuring
                    easy access to quality education.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Safe Transport
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Multiple Routes
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Regular Service
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Building className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Experience Our Campus</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Visit our state-of-the-art facilities and see how we're shaping the future of physiotherapy education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact">Schedule Campus Visit</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/about/pes-hospital">Explore PES Hospital</Link>
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
