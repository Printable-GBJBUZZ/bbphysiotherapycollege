import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, CheckCircle, BookOpen, Award, Calendar } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function CoursesPage() {
  const courses = [
    {
      title: "Bachelor of Physiotherapy (BPT)",
      duration: "4.5 Years (Including 6 months internship)",
      intake: "100 Students",
      eligibility: "12th Science (PCB) with 50% marks",
      description:
        "Comprehensive undergraduate program that provides fundamental knowledge and practical skills in physiotherapy practice with focus on rural healthcare needs of Central India.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Anatomy & Physiology",
        "Biomechanics & Kinesiology",
        "Pathology & Microbiology",
        "Exercise Therapy",
        "Electrotherapy",
        "Manual Therapy Techniques",
        "Clinical Rotations in Bhandara",
        "Research Methodology",
      ],
      careerScope: [
        "Clinical Physiotherapist",
        "Sports Physiotherapist",
        "Rehabilitation Specialist",
        "Research Associate",
        "Private Practice",
        "Government Hospital Employment",
      ],
      fees: "₹1,50,000 per year",
      placement: "100% placement assistance",
    },
    {
      title: "Master of Physiotherapy - Orthopedics (MPT)",
      duration: "2 Years",
      intake: "20 Students",
      eligibility: "BPT degree with 55% marks",
      description:
        "Advanced specialization in orthopedic physiotherapy focusing on musculoskeletal disorders and rehabilitation with emphasis on sports medicine and rural healthcare.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Advanced Orthopedic Assessment",
        "Manual Therapy Techniques",
        "Sports Injury Management",
        "Spinal Rehabilitation",
        "Joint Mobilization",
        "Research Thesis",
        "Clinical Specialization",
        "Evidence-Based Practice",
      ],
      careerScope: [
        "Senior Physiotherapist",
        "Orthopedic Specialist",
        "Sports Medicine Expert",
        "Academic Faculty",
        "Research Scientist",
        "Consultant Physiotherapist",
      ],
      fees: "₹2,00,000 per year",
      placement: "Premium placement opportunities",
    },
    {
      title: "Master of Physiotherapy - Neurology (MPT)",
      duration: "2 Years",
      intake: "20 Students",
      eligibility: "BPT degree with 55% marks",
      description:
        "Specialized program focusing on neurological conditions and rehabilitation of patients with brain and spinal cord injuries, with community healthcare focus.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Neuroanatomy & Neurophysiology",
        "Stroke Rehabilitation",
        "Parkinson's Disease Management",
        "Pediatric Neurology",
        "Gait Analysis",
        "Cognitive Rehabilitation",
        "Research Methodology",
        "Clinical Practicum",
      ],
      careerScope: [
        "Neurological Physiotherapist",
        "Stroke Rehabilitation Specialist",
        "Pediatric Neurologist",
        "Research Associate",
        "Hospital Consultant",
        "Academic Position",
      ],
      fees: "₹2,00,000 per year",
      placement: "Specialized hospital placements",
    },
    {
      title: "Master of Physiotherapy - Cardiology (MPT)",
      duration: "2 Years",
      intake: "15 Students",
      eligibility: "BPT degree with 55% marks",
      description:
        "Advanced program in cardiac rehabilitation and pulmonary physiotherapy for cardiovascular and respiratory conditions with rural healthcare applications.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Cardiac Anatomy & Physiology",
        "Pulmonary Rehabilitation",
        "Exercise Prescription",
        "ICU Physiotherapy",
        "Cardiac Risk Assessment",
        "Respiratory Care",
        "Clinical Research",
        "Advanced Life Support",
      ],
      careerScope: [
        "Cardiac Physiotherapist",
        "ICU Specialist",
        "Pulmonary Rehabilitation Expert",
        "Critical Care Physiotherapist",
        "Research Coordinator",
        "Hospital Department Head",
      ],
      fees: "₹2,00,000 per year",
      placement: "Premium cardiac care centers",
    },
    {
      title: "Diploma in Manual Therapy",
      duration: "1 Year",
      intake: "25 Students",
      eligibility: "BPT degree with 50% marks",
      description:
        "Specialized diploma focusing on hands-on manual therapy techniques for musculoskeletal conditions with practical training in Bhandara healthcare facilities.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Manual Therapy Principles",
        "Joint Mobilization",
        "Soft Tissue Techniques",
        "Spinal Manipulation",
        "Clinical Assessment",
        "Treatment Planning",
        "Hands-on Practice",
        "Case Studies",
      ],
      careerScope: [
        "Manual Therapy Specialist",
        "Private Practice",
        "Sports Clinic",
        "Orthopedic Centers",
        "Wellness Centers",
        "Rehabilitation Hospitals",
      ],
      fees: "₹1,00,000 total",
      placement: "Industry certification",
    },
    {
      title: "Diploma in Sports Rehabilitation",
      duration: "1 Year",
      intake: "20 Students",
      eligibility: "BPT degree with 50% marks",
      description:
        "Comprehensive program in sports injury prevention, assessment, and rehabilitation for athletes with focus on regional sports development in Maharashtra.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      curriculum: [
        "Sports Biomechanics",
        "Injury Prevention",
        "Athletic Performance",
        "Return to Sport Protocols",
        "Taping & Strapping",
        "Strength & Conditioning",
        "Sports Psychology",
        "Field Experience",
      ],
      careerScope: [
        "Sports Physiotherapist",
        "Athletic Trainer",
        "Sports Medicine Clinic",
        "Professional Sports Teams",
        "Fitness Centers",
        "Regional Sports Academies",
      ],
      fees: "₹1,25,000 total",
      placement: "Sports industry connections",
    },
  ]

  return (
    <>
      <Head>
        <title>BBPC Physiotherapy College - Courses | BPT, MPT & Diploma Programs in Bhandara</title>
        <meta
          name="description"
          content="Explore comprehensive physiotherapy courses at BBPC Bhandara - BPT, MPT specializations, and diploma programs. MUHS affiliated with excellent placement record."
        />
        <meta
          name="keywords"
          content="BPT course, MPT course, physiotherapy diploma, Bhandara, Maharashtra, MUHS affiliated, physiotherapy education"
        />
      </Head>

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
                🎓 Academic Excellence in Physiotherapy
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                World-Class Physiotherapy Programs
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Comprehensive curriculum designed by industry experts in Bhandara, combining theoretical knowledge with
                extensive practical experience. Shape your future in healthcare with our MUHS accredited programs.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl"
              >
                Apply Now 2024
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {courses.map((course, index) => (
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
                          {/* Course Header */}
                          <div>
                            <Badge className="bg-blue-100 text-blue-800 mb-4">
                              {course.title.includes("BPT")
                                ? "Undergraduate"
                                : course.title.includes("MPT")
                                  ? "Postgraduate"
                                  : "Diploma"}
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                              {course.title}
                            </h2>
                            <div className="flex flex-wrap gap-3 mb-4">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {course.duration}
                              </Badge>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {course.intake}
                              </Badge>
                              <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {course.eligibility}
                              </Badge>
                            </div>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{course.description}</p>
                          </div>

                          {/* Curriculum and Career Scope */}
                          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            <div>
                              <h4 className="font-bold text-gray-800 mb-4 text-base sm:text-lg flex items-center gap-2">
                                <BookOpen className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                                Curriculum Highlights
                              </h4>
                              <ul className="space-y-3">
                                {course.curriculum.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm sm:text-base">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-gray-800 mb-4 text-base sm:text-lg flex items-center gap-2">
                                <Award className="h-4 sm:h-5 w-4 sm:w-5 text-teal-600" />
                                Career Opportunities
                              </h4>
                              <ul className="space-y-3">
                                {course.careerScope.map((career, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm sm:text-base">{career}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Fees and Placement */}
                          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 sm:p-6 rounded-2xl">
                            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                              <div>
                                <h5 className="font-bold text-gray-800 mb-2">Fee Structure</h5>
                                <div className="text-xl sm:text-2xl font-bold text-blue-600">{course.fees}</div>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  Scholarships available for meritorious students
                                </p>
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-800 mb-2">Placement Support</h5>
                                <div className="text-base sm:text-lg font-semibold text-teal-600">
                                  {course.placement}
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600">Dedicated career services team</p>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 flex-1">
                                Apply for This Course
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                              <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
                                Download Syllabus
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                        <div className="relative">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
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

        {/* Admission Process */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Admission Process 2024</h2>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                Simple and transparent admission process designed to identify passionate students for healthcare careers
                in Bhandara.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  title: "Application",
                  description: "Submit online application with required documents and application fee.",
                  icon: "📝",
                },
                {
                  step: "02",
                  title: "Entrance Test",
                  description: "Appear for entrance examination covering Physics, Chemistry, and Biology.",
                  icon: "📚",
                },
                {
                  step: "03",
                  title: "Interview",
                  description: "Personal interview to assess communication skills and career motivation.",
                  icon: "🗣️",
                },
                {
                  step: "04",
                  title: "Admission",
                  description: "Final selection based on merit list and document verification.",
                  icon: "🎓",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <span className="text-white font-bold text-lg sm:text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Calendar className="h-5 sm:h-6 w-5 sm:w-6" />
                  Important Dates 2024
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                  <div>
                    <div className="font-semibold text-orange-300">Application Start</div>
                    <div className="text-blue-100">March 1, 2024</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-300">Application Deadline</div>
                    <div className="text-blue-100">June 30, 2024</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-300">Entrance Exam</div>
                    <div className="text-blue-100">July 15, 2024</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-300">Classes Begin</div>
                    <div className="text-blue-100">August 15, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Begin Your Healthcare Journey?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Join BBPC Physiotherapy College in Bhandara and transform your passion for healthcare into a rewarding
              career. Our expert faculty and world-class facilities await you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Apply Now 2024
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm w-full sm:w-auto"
              >
                Download Prospectus
              </Button>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
                <span className="text-blue-100 text-sm sm:text-base">MUHS Accredited Programs</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
                <span className="text-blue-100 text-sm sm:text-base">100% Placement Assistance</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-green-400" />
                <span className="text-blue-100 text-sm sm:text-base">Scholarship Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
