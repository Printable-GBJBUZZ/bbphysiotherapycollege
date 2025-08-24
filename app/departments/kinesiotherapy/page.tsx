import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Activity, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function KinesiotherapyPage() {
  const equipment = [
    "Goniometers & Inclinometers",
    "Exercise Equipment",
    "Balance Training Systems",
    "Postural Analysis Tools",
    "Strength Testing Equipment",
    "Flexibility Assessment Tools",
    "Functional Movement Screens",
    "Biomechanical Analysis Software",
    "Therapeutic Exercise Tools",
    "Movement Assessment Devices",
  ]

  const learningOutcomes = [
    "Master biomechanical principles and movement analysis",
    "Apply mechanical principles to treatment techniques",
    "Understand therapeutic use of exercise as clinical modality",
    "Study physiological effects of exercise therapy",
    "Develop skills in functional movement restoration",
    "Enhance physical rehabilitation techniques",
  ]

  return (
    <>
      <Head>
        <title>Kinesiotherapy & Physical Diagnosis - BBPC Physiotherapy College</title>
        <meta
          name="description"
          content="Comprehensive kinesiotherapy training at BBPC focusing on biomechanics, movement analysis and therapeutic exercise."
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <MobileNav />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 clip-path-hexagon flex items-center justify-center mx-auto mb-6">
                <Activity className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Kinesiotherapy & Physical Diagnosis</h1>
              <p className="text-xl text-teal-100 leading-relaxed font-sans">
                Comprehensive training in movement analysis and therapeutic exercise
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
                  <Badge className="bg-teal-100 text-teal-800 mb-6">Department Overview</Badge>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-heading">
                    Core Laboratory for Movement Science
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                    This core laboratory equips undergraduate and postgraduate students with comprehensive training in
                    kinesiology and kinesiotherapy, focusing on practical applications of biomechanics and exercise
                    therapy. First- and second-year BPTh students engage in hands-on learning to quantitatively assess
                    movement, applying mechanical principles to various treatment techniques.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans">
                    In this department, students explore the therapeutic use of exercise as a clinical modality—studying
                    its physiological effects and mastering techniques aimed at restoring functional movement and
                    enhancing physical rehabilitation.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Kinesiotherapy Training"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">
                  Advanced Movement Analysis Equipment
                </h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Cutting-edge tools for biomechanical assessment and exercise therapy
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.map((item, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-green-500 clip-path-hexagon"></div>
                        <span className="font-medium text-neutral-800 font-sans">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">Learning Outcomes</h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Skills and knowledge gained in kinesiotherapy training
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-800 font-sans">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Master Movement Science & Exercise Therapy</h2>
            <p className="text-lg mb-8 font-sans">Develop expertise in biomechanics and therapeutic exercise</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-heading">
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
