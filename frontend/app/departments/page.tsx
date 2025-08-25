"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Users,
  Award,
  GraduationCap,
  Building,
  Zap,
  Activity,
  Target,
  Brain,
  Heart,
  ChevronLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ChatBot } from "@/components/chatbot"
import { MobileNav } from "@/components/mobile-nav"
import Head from "next/head"

export default function DepartmentsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)

  const departments = [
    {
      id: "electrotherapy",
      title: "Electrotherapy & Electrodiagnosis",
      shortTitle: "Electrotherapy",
      description:
        "Advanced training in therapeutic electrical modalities and diagnostic techniques with comprehensive equipment for undergraduate physiotherapy education.",
      fullDescription:
        "This laboratory is outfitted with all the required electrotherapy and diagnostic equipment essential for both undergraduate and postgraduate physiotherapy education, in alignment with the curriculum. Students in their first and second years of BPTh training receive hands-on experience with a variety of therapeutic modalities—including low-, medium-, and high-frequency electrical therapies, actinotherapy, cryotherapy, and superficial heat treatments. The department emphasizes comprehensive instruction on each modality—covering its principles, application techniques, physiological and therapeutic effects, indications and contraindications, safety precautions, and dosage guidelines—to support the restoration of physical function.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Zap className="h-8 w-8 text-ocean-600" />,
      color: "bg-blue-100",
      equipment: [
        "Interferential Therapy Units",
        "TENS Machines",
        "Ultrasound Therapy Equipment",
        "Shortwave Diathermy",
        "Laser Therapy Units",
        "EMG/NCV Equipment",
        "Cryotherapy Units",
        "Heat Therapy Equipment",
      ],
      faculty: [
        {
          name: "Dr. Rajesh Sharma",
          qualification: "MPT (Electrotherapy), PhD",
          experience: "15 years",
          specialization: "Electrotherapy & Pain Management",
        },
        {
          name: "Dr. Priya Patel",
          qualification: "MPT (Electrotherapy)",
          experience: "10 years",
          specialization: "Electrodiagnosis & Rehabilitation",
        },
      ],
    },
    {
      id: "kinesiotherapy",
      title: "Kinesiotherapy & Physical Diagnosis",
      shortTitle: "Kinesiotherapy",
      description:
        "Comprehensive training in kinesiology and kinesiotherapy, focusing on practical applications of biomechanics and exercise therapy.",
      fullDescription:
        "This core laboratory equips undergraduate and postgraduate students with comprehensive training in kinesiology and kinesiotherapy, focusing on practical applications of biomechanics and exercise therapy. First- and second-year BPTh students engage in hands-on learning to quantitatively assess movement, applying mechanical principles to various treatment techniques. In this department, students explore the therapeutic use of exercise as a clinical modality—studying its physiological effects and mastering techniques aimed at restoring functional movement and enhancing physical rehabilitation.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      color: "bg-teal-100",
      equipment: [
        "Goniometers & Inclinometers",
        "Exercise Equipment",
        "Balance Training Systems",
        "Postural Analysis Tools",
        "Strength Testing Equipment",
        "Flexibility Assessment Tools",
        "Functional Movement Screens",
        "Biomechanical Analysis Software",
      ],
      faculty: [
        {
          name: "Dr. Amit Kumar",
          qualification: "MPT (Musculoskeletal), PhD",
          experience: "12 years",
          specialization: "Biomechanics & Movement Analysis",
        },
        {
          name: "Dr. Sneha Joshi",
          qualification: "MPT (Sports Medicine)",
          experience: "8 years",
          specialization: "Exercise Therapy & Rehabilitation",
        },
      ],
    },
    {
      id: "musculoskeletal",
      title: "Musculoskeletal Physiotherapy",
      shortTitle: "Musculoskeletal",
      description: "Specialized care for bones, joints, muscles, and connective tissues",
      fullDescription:
        "Musculoskeletal physiotherapy specializes in diagnosing, treating, and preventing conditions affecting the muscles, bones, joints, ligaments, tendons, nerves, and connective tissues. It targets everything from acute injuries and overuse disorders to degenerative conditions and post-operative rehabilitation. Our department focuses on restoring pain-free function and movement through evidence-based manual therapy techniques, therapeutic exercises, and advanced rehabilitation protocols.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Target className="h-8 w-8 text-ocean-600" />,
      color: "bg-green-100",
      equipment: [
        "Manual Therapy Tables",
        "Traction Units",
        "Joint Mobilization Tools",
        "Soft Tissue Mobilization Equipment",
        "Orthopedic Assessment Tools",
        "Spinal Stabilization Equipment",
        "Therapeutic Exercise Equipment",
        "Postural Correction Devices",
      ],
      faculty: [
        {
          name: "Dr. Vikram Singh",
          qualification: "MPT (Orthopedics), PhD",
          experience: "18 years",
          specialization: "Manual Therapy & Spinal Rehabilitation",
        },
        {
          name: "Dr. Kavita Sharma",
          qualification: "MPT (Musculoskeletal)",
          experience: "14 years",
          specialization: "Sports Injuries & Joint Rehabilitation",
        },
      ],
    },
    {
      id: "neuro",
      title: "Neuro Physiotherapy",
      shortTitle: "Neuro Physiotherapy",
      description: "Restoring movement, strength & independence for neurological conditions",
      fullDescription:
        "Neurological physiotherapy is a specialized branch of physiotherapy that supports individuals affected by conditions impacting the central and peripheral nervous systems—such as stroke, spinal cord injury, cerebral palsy, Parkinson's disease, multiple sclerosis, traumatic brain injury, and peripheral neuropathies. Our department focuses on restoring movement, strength, and independence through specialized neurological rehabilitation techniques, motor relearning strategies, and adaptive equipment training.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-100",
      equipment: [
        "Parallel Bars",
        "Standing Frames",
        "Gait Training Equipment",
        "Balance Training Systems",
        "FES (Functional Electrical Stimulation)",
        "Cognitive Assessment Tools",
        "Adaptive Equipment",
        "Motor Learning Devices",
      ],
      faculty: [
        {
          name: "Dr. Neha Gupta",
          qualification: "MPT (Neurology), PhD",
          experience: "16 years",
          specialization: "Stroke Rehabilitation & Motor Recovery",
        },
        {
          name: "Dr. Rohit Mehta",
          qualification: "MPT (Neurology)",
          experience: "11 years",
          specialization: "Pediatric Neurology & Developmental Disorders",
        },
      ],
    },
    {
      id: "cardiovascular",
      title: "Cardiovascular & Respiratory Physiotherapy",
      shortTitle: "Cardio-Respiratory",
      description: "Enhancing cardiopulmonary fitness & breath-supportive well-being",
      fullDescription:
        "Cardiorespiratory physiotherapy is a specialized field aimed at restoring and optimizing heart and lung function. It supports patients with cardiac or pulmonary conditions, post-operative recovery, and those recovering from critical illness by improving exercise tolerance, reducing breathlessness, and promoting lasting health-enhancing habits. Our department provides comprehensive training in cardiac rehabilitation, pulmonary rehabilitation, and intensive care physiotherapy.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      color: "bg-red-100",
      equipment: [
        "Spirometry Equipment",
        "Pulse Oximeters",
        "Exercise Testing Equipment",
        "Incentive Spirometers",
        "CPAP/BiPAP Machines",
        "Chest Physiotherapy Equipment",
        "Cardiac Monitors",
        "Respiratory Training Devices",
      ],
      faculty: [
        {
          name: "Dr. Arun Verma",
          qualification: "MPT (Cardio-Respiratory), PhD",
          experience: "20 years",
          specialization: "Cardiac Rehabilitation & ICU Physiotherapy",
        },
        {
          name: "Dr. Sunita Rao",
          qualification: "MPT (Cardio-Respiratory)",
          experience: "13 years",
          specialization: "Pulmonary Rehabilitation & Respiratory Care",
        },
      ],
    },
    {
      id: "community",
      title: "Community Physiotherapy",
      shortTitle: "Community",
      description: "Bringing rehabilitation & support to homes & communities",
      fullDescription:
        "Community physiotherapy, also referred to as community rehabilitation, delivers tailored physiotherapy services outside traditional clinical settings—typically at patients' homes, residential facilities, or community venues. It's designed for those who have difficulty accessing outpatient clinics due to mobility issues, chronic conditions, or limited transportation. Our department focuses on preventive care, health education, community outreach programs, and home-based rehabilitation services.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      icon: <Users className="h-8 w-8 text-green-600" />,
      color: "bg-yellow-100",
      equipment: [
        "Portable Assessment Tools",
        "Home Exercise Equipment",
        "Mobility Aids",
        "Community Health Kits",
        "Educational Materials",
        "Screening Tools",
        "Portable Therapy Equipment",
        "Health Promotion Resources",
      ],
      faculty: [
        {
          name: "Dr. Meera Jain",
          qualification: "MPT (Community Medicine), PhD",
          experience: "17 years",
          specialization: "Community Health & Preventive Care",
        },
        {
          name: "Dr. Suresh Patil",
          qualification: "MPT (Community Physiotherapy)",
          experience: "12 years",
          specialization: "Rural Health & Home-based Rehabilitation",
        },
      ],
    },
  ]

  const statistics = [
    { number: "6", label: "Specialized Departments", icon: <Building className="h-6 w-6" /> },
    { number: "12+", label: "Expert Faculty", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "Equipment Units", icon: <Award className="h-6 w-6" /> },
    { number: "500+", label: "Students Trained", icon: <GraduationCap className="h-6 w-6" /> },
  ]

  if (selectedDepartment) {
    const dept = departments.find((d) => d.id === selectedDepartment)
    if (!dept) return null

    return (
      <>
        <Head>
          <title>{dept.title} - BBPC Physiotherapy College</title>
          <meta name="description" content={dept.fullDescription.substring(0, 160)} />
        </Head>

        <div className="min-h-screen bg-neutral-50">
          <Header />
          <FloatingElements />
          <ChatBot />
          <MobileNav />

          {/* Department Detail Hero */}
          <section className="relative py-20 bg-gradient-to-br from-ocean-600 to-teal-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 mb-6"
                  onClick={() => setSelectedDepartment(null)}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Departments
                </Button>

                <div className="w-20 h-20 bg-white/20 clip-path-hexagon flex items-center justify-center mx-auto mb-6">
                  {dept.icon}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">{dept.title}</h1>

                <p className="text-xl text-ocean-100 leading-relaxed font-sans">{dept.description}</p>
              </div>
            </div>
          </section>

          {/* Department Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-heading">Department Overview</h2>
                    <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-8">{dept.fullDescription}</p>
                  </div>
                  <div className="relative">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                <Tabs defaultValue="equipment" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="equipment">Equipment & Facilities</TabsTrigger>
                    <TabsTrigger value="faculty">Faculty</TabsTrigger>
                  </TabsList>

                  <TabsContent value="equipment" className="mt-8">
                    <Card>
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-6 font-heading">
                          Equipment & Facilities
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {dept.equipment.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                              <div className="w-2 h-2 bg-gradient-to-r from-ocean-500 to-teal-500 clip-path-hexagon"></div>
                              <span className="font-medium text-neutral-800 font-sans">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="faculty" className="mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {dept.faculty.map((member, index) => (
                        <Card key={index} className="shadow-lg">
                          <CardContent className="p-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-ocean-100 to-teal-100 clip-path-hexagon flex items-center justify-center mx-auto mb-4">
                              <Users className="h-8 w-8 text-ocean-600" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 mb-2 text-center font-heading">
                              {member.name}
                            </h4>
                            <p className="text-ocean-600 font-semibold text-center mb-2 font-sans">
                              {member.qualification}
                            </p>
                            <p className="text-neutral-600 text-center mb-2 font-sans">
                              Experience: {member.experience}
                            </p>
                            <p className="text-neutral-700 text-center font-sans">
                              <strong>Specialization:</strong> {member.specialization}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Departments - BBPC Physiotherapy College</title>
        <meta
          name="description"
          content="Explore our specialized departments at BBPC Physiotherapy College - Electrotherapy, Kinesiotherapy, Musculoskeletal, Neuro, Cardiovascular & Community Physiotherapy."
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <ChatBot />
        <MobileNav />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-ocean-600 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <Badge className="bg-white/20 text-white px-6 py-3 text-lg font-semibold font-mono uppercase tracking-wider">
                  Academic Excellence
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Our Departments</h1>

              <p className="text-xl text-ocean-100 leading-relaxed font-sans mb-8">
                Comprehensive physiotherapy education across six specialized departments with state-of-the-art
                facilities, expert faculty, and hands-on training at BBPC.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-teal-500/20 clip-path-hexagon flex items-center justify-center mx-auto mb-3">
                      <div className="text-teal-300">{stat.icon}</div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-300 mb-1 font-heading">{stat.number}</div>
                    <div className="text-ocean-200 text-sm font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
                  Specialized Departments
                </h2>
                <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed font-sans">
                  Each department is equipped with modern facilities, expert faculty, and comprehensive curriculum
                  designed to provide hands-on experience and theoretical knowledge.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((department, index) => (
                  <Card
                    key={department.id}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => (window.location.href = `/departments/${department.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={department.image || "/placeholder.svg"}
                        alt={department.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div
                          className={`w-12 h-12 ${department.color} clip-path-hexagon flex items-center justify-center`}
                        >
                          {department.icon}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-ocean-600 transition-colors font-heading">
                        {department.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed font-sans mb-4">{department.description}</p>
                      <Button variant="ghost" className="p-0 h-auto text-ocean-600 hover:text-ocean-700 font-sans">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-ocean-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-heading">
                Ready to Explore Our Departments?
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed font-sans">
                Visit our campus to experience our world-class facilities and meet our expert faculty members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-ocean-600 to-teal-600 hover:from-ocean-700 hover:to-teal-700 font-heading"
                  >
                    Schedule Campus Visit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/admission">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-ocean-200 hover:bg-ocean-50 bg-transparent font-heading"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
