import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hospital, Stethoscope, Activity, Users, Heart, Brain, Bone, Eye, Zap, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PESHospitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Hospital Facility"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Healthcare Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">PES Hospital & Research Centre</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              Multi-specialty 605-bed Hospital Attached to BBPC
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
              Integrated Clinical Excellence
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed font-sans">
              BBPC is integrated with the 605-bed PES Hospital, providing students with continuous clinical exposure,
              supervised training, and interdisciplinary collaboration. This unique integration ensures our students
              gain real-world experience from day one of their education.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="PES Hospital Exterior"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 font-heading">605-Bed Capacity</h3>
                    <p className="text-neutral-600 font-sans">Multi-specialty healthcare facility</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 font-heading">Clinical Training</h3>
                    <p className="text-neutral-600 font-sans">Supervised hands-on experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 font-heading">Research Centre</h3>
                    <p className="text-neutral-600 font-sans">Advanced medical research facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Features */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                Hospital Features & Facilities
              </h2>
              <p className="text-lg text-neutral-600 font-sans">
                Comprehensive healthcare services supporting clinical education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Dedicated OPDs</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    Specialized outpatient departments across multiple medical specialties
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Diagnostic Units</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    X-Ray, ECG, EEG units with modern diagnostic equipment
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Pathology & Radiology</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    Comprehensive laboratory and imaging services
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Physiotherapy Unit</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    Dedicated rehabilitation and physiotherapy services
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Real-Case Engagement</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    Students engage with real patients from day one
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-3 font-heading">Interdisciplinary Care</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                    Collaborative approach across medical specialties
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Handled */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                Conditions We Handle
              </h2>
              <p className="text-lg text-neutral-600 font-sans">
                Comprehensive treatment and rehabilitation services across multiple specialties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-[#EF4444]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Cardiovascular</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Lymphedema</li>
                  <li>• Cardiac Rehabilitation</li>
                  <li>• Circulation Issues</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-[#F59E0B]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Sports Medicine</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Sports Injuries</li>
                  <li>• Athletic Recovery</li>
                  <li>• Performance Enhancement</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Bone className="h-6 w-6 text-[#10B981]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Musculoskeletal</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Back & Neck Pain</li>
                  <li>• ROM Issues</li>
                  <li>• Osteoporosis</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-6 w-6 text-[#8B5CF6]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Neurological</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Vertigo</li>
                  <li>• Parkinson's Disease</li>
                  <li>• Stroke Recovery</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-[#EF4444]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Oncology</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Cancer Rehabilitation</li>
                  <li>• Post-Surgery Recovery</li>
                  <li>• Pain Management</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-[#2D6CDF]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Respiratory</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Respiratory Therapy</li>
                  <li>• Breathing Exercises</li>
                  <li>• Pulmonary Rehabilitation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-[#FF6B35]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Pediatric</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Child Development</li>
                  <li>• Motor Skills</li>
                  <li>• Special Needs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-[#10B981]" />
                  <h3 className="font-bold text-neutral-800 font-heading">Geriatric</h3>
                </div>
                <ul className="space-y-2 text-sm text-neutral-600 font-sans">
                  <li>• Age-related Mobility</li>
                  <li>• Fall Prevention</li>
                  <li>• Joint Health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Training Integration */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
              Seamless Clinical Integration
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-12 font-sans">
              The integration between BBPC and PES Hospital creates an unparalleled learning environment where
              theoretical knowledge meets practical application. Our students benefit from continuous exposure to real
              clinical scenarios under expert supervision.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Day One Exposure</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Students begin clinical observation and interaction from their first semester
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Supervised Practice</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Expert faculty and hospital staff provide continuous guidance and mentorship
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">Real Patient Care</h3>
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    Hands-on experience with actual patients across diverse medical conditions
                  </p>
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
                  <Hospital className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Experience Clinical Excellence</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Discover how our hospital integration provides unmatched clinical training opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/departments">Explore Clinical Training</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/departments">Visit BBPC Departments</Link>
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
