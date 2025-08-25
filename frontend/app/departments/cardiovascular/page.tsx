import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { MobileNav } from "@/components/mobile-nav"

export default function CardiovascularPage() {
  const conditions = [
    "Cardiac Conditions",
    "Pulmonary Disorders",
    "Post-operative Recovery",
    "Critical Illness Recovery",
    "Chronic Heart Disease",
    "Respiratory Diseases",
    "Exercise Intolerance",
    "Breathlessness Management",
  ]

  const treatments = [
    "Cardiac Rehabilitation Programs",
    "Pulmonary Rehabilitation",
    "Exercise Tolerance Training",
    "Breathing Techniques & Education",
    "Lifestyle Modification Counseling",
    "Critical Care Physiotherapy",
  ]

  return (
    <>
      <Head>
        <title>Cardiovascular & Respiratory Physiotherapy - BBPC Physiotherapy College</title>
        <meta
          name="description"
          content="Specialized cardiorespiratory physiotherapy training at BBPC for heart and lung conditions."
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <MobileNav />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 clip-path-hexagon flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                Cardiovascular & Respiratory Physiotherapy
              </h1>
              <p className="text-xl text-red-100 leading-relaxed font-sans mb-4">
                Enhancing Cardiopulmonary Fitness & Breath‑Supportive Well‑Being
              </p>
              <p className="text-lg text-red-200 leading-relaxed font-sans">
                Specialized care for restoring and optimizing heart and lung function
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
                  <Badge className="bg-red-100 text-red-800 mb-6">Department Overview</Badge>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6 font-heading">
                    Comprehensive Cardiorespiratory Care
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                    Cardiorespiratory physiotherapy is a specialized field aimed at restoring and optimizing heart and
                    lung function. It supports patients with cardiac or pulmonary conditions, post-operative recovery,
                    and those recovering from critical illness by improving exercise tolerance, reducing breathlessness,
                    and promoting lasting health-enhancing habits.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed font-sans">
                    Our department provides comprehensive training in evidence-based techniques to help patients achieve
                    optimal cardiovascular and respiratory health outcomes.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Cardiovascular Physiotherapy"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 bg-gradient-to-br from-neutral-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">Conditions We Treat</h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Comprehensive care for cardiovascular and respiratory conditions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {conditions.map((condition, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-white text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 clip-path-hexagon flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-6 w-6 text-red-600" />
                      </div>
                      <span className="font-medium text-neutral-800 font-sans">{condition}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approaches */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">Treatment Approaches</h2>
                <p className="text-lg text-neutral-700 font-sans">
                  Evidence-based techniques for cardiorespiratory rehabilitation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-800 font-sans">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading">Specialize in Cardiorespiratory Care</h2>
            <p className="text-lg mb-8 font-sans">Help patients achieve optimal heart and lung function</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-heading">
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
