import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function ElectrotherapyPage() {
  const equipment = [
    "Interferential Therapy Units",
    "TENS Machines",
    "Ultrasound Therapy Equipment",
    "Shortwave Diathermy",
    "Laser Therapy Units",
    "EMG/NCV Equipment",
    "Cryotherapy Units",
    "Heat Therapy Equipment",
    "Actinotherapy Equipment",
    "Electrotherapy Diagnostic Tools",
  ]

  const learningOutcomes = [
    "Master principles of electrical therapy modalities",
    "Apply low, medium, and high-frequency treatments",
    "Understand physiological and therapeutic effects",
    "Learn safety precautions and contraindications",
    "Practice proper dosage guidelines",
    "Develop clinical reasoning skills",
  ]

  return (
    <>
      <Head>
        <title>Electrotherapy & Electrodiagnosis - BBPC Physiotherapy College</title>
        <meta
          name="description"
          content="Advanced electrotherapy training at BBPC with comprehensive equipment for undergraduate physiotherapy education."
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <MobileNav />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 clip-path-hexagon flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Electrotherapy & Electrodiagnosis</h1>
              <p className="text-xl text-blue-100 leading-relaxed font-sans">
                Advanced training in therapeutic electrical modalities and diagnostic techniques
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
                  <Badge className="bg-blue-100 text-blue-800 mb-6">Department Overview</Badge>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-heading">
                    Comprehensive Electrotherapy Training
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                    This laboratory is outfitted with all the required electrotherapy and diagnostic equipment essential
                    for both undergraduate and postgraduate physiotherapy education, in alignment with the curriculum.
                    Students in their first and second years of BPTh training receive hands-on experience with a variety
                    of therapeutic modalities—including low-, medium-, and high-frequency electrical therapies,
                    actinotherapy, cryotherapy, and superficial heat treatments.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans">
                    The department emphasizes comprehensive instruction on each modality—covering its principles,
                    application techniques, physiological and therapeutic effects, indications and contraindications,
                    safety precautions, and dosage guidelines—to support the restoration of physical function.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Electrotherapy Equipment"
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
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">State-of-the-Art Equipment</h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Our laboratory features the latest electrotherapy and diagnostic equipment
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.map((item, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 clip-path-hexagon"></div>
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
                <p className="text-lg text-neutral-700 font-sans">What students will achieve in this department</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-800 font-sans">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Ready to Start Your Electrotherapy Training?</h2>
            <p className="text-lg mb-8 font-sans">
              Join our comprehensive BPT program and master electrotherapy techniques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-heading">
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
