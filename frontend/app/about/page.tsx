import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Heart, Building, Target, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "MUHS Affiliated",
      description: "Recognized by Maharashtra University of Health Sciences",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced professionals dedicated to student success",
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities and equipment",
    },
    {
      icon: Heart,
      title: "Hospital Integration",
      description: "Practical training at PES Hospital",
    },
  ]

  const leadership = [
    {
      name: "Dr. Harshadip Kothare",
      position: "Principal",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Hon. Smt. Manjula B. Bhondekar",
      position: "Chairperson",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Hon. Late Shri Bhojrajji L. Bhondekar",
      position: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/90 to-[#1E4FBF]/90"></div>
          {/* Animated hexagonal patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white clip-path-hexagon animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white clip-path-hexagon animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 border-2 border-white clip-path-hexagon animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white clip-path-hexagon animate-pulse delay-500"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono animate-fade-in">
              About BBPC
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-slide-up">
              Bhojrajji Bhondekar Physiotherapy College
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans animate-slide-up delay-300">
              Shaping the Future of Healthcare Through Excellence in Physiotherapy Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up delay-500">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/admission">Apply Now 2025</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/courses">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Image Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="BBPC Campus - Modern Educational Facility"
                width={1200}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 font-heading">Our Modern Campus</h3>
                <p className="text-lg text-gray-200 font-sans">
                  State-of-the-art facilities for comprehensive physiotherapy education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#2D6CDF]/10 text-[#2D6CDF] border-[#2D6CDF]/20 mb-6 px-6 py-2 text-lg font-mono">
              Who We Are
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-8 font-heading">
              Leading Excellence in Physiotherapy Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-8">
              Bhojrajji Bhondekar Physiotherapy College (BBPC) stands as a beacon of excellence in physiotherapy
              education, affiliated with the prestigious Maharashtra University of Health Sciences (MUHS). Located in
              the serene town of Sirsi, Bhandara, our institution is committed to nurturing skilled, compassionate
              healthcare professionals who make a meaningful difference in the lives of patients and communities.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed font-sans">
              Under the umbrella of Bhondekar Shikshan Sanstha, we combine academic rigor with practical experience,
              ensuring our graduates are well-prepared to meet the evolving challenges of modern healthcare. Our
              integrated approach with PES Hospital provides students with invaluable hands-on training opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* BBPC At A Glance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">BBPC At A Glance</h2>
              <p className="text-lg text-neutral-600 font-sans">
                Key highlights that make us a preferred choice for physiotherapy education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">{highlight.title}</h3>
                    <p className="text-neutral-600 leading-relaxed font-sans">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <Card className="bg-white shadow-xl border border-gray-100">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 font-heading">Our Vision</h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-sans">
                    To be a leading institution in physiotherapy education and practice, renowned for fostering skilled,
                    compassionate practitioners who contribute to the health and well-being of individuals and
                    communities.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-[#2D6CDF] text-[#2D6CDF] hover:bg-[#2D6CDF] hover:text-white bg-transparent"
                  >
                    <Link href="/about/vision-mission">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="bg-white shadow-xl border border-gray-100">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 font-heading">Our Mission</h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-sans">
                    To provide comprehensive education in physiotherapy that empowers students with knowledge, skills,
                    and ethical foundation necessary to deliver exceptional care while promoting continuous learning and
                    professional growth.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-[#2D6CDF] text-[#2D6CDF] hover:bg-[#2D6CDF] hover:text-white bg-transparent"
                  >
                    <Link href="/about/vision-mission">Read Full Mission</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#2D6CDF]/10 text-[#2D6CDF] border-[#2D6CDF]/20 mb-6 px-4 py-2 font-mono">
                  Our Legacy
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                  Bhondekar Shikshan Sanstha
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                  Established in 2002, Bhondekar Shikshan Sanstha has grown into a well-respected educational trust
                  operating 12+ institutions across Maharashtra. Our commitment to accessible, quality education has
                  empowered thousands of students from diverse backgrounds.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 rounded-lg">
                    <div className="text-2xl font-bold text-[#2D6CDF] mb-1 font-heading">2002</div>
                    <div className="text-sm text-neutral-600 font-sans">Established</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 rounded-lg">
                    <div className="text-2xl font-bold text-[#2D6CDF] mb-1 font-heading">12+</div>
                    <div className="text-sm text-neutral-600 font-sans">Institutions</div>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white hover:from-[#1E4FBF] hover:to-[#2D6CDF]"
                >
                  <Link href="/about/society-founder">Learn About Our Founder</Link>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Educational Legacy - Bhondekar Shikshan Sanstha"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D6CDF]/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Carousel */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">Our Leadership</h2>
              <p className="text-lg text-neutral-600 font-sans">
                Visionary leaders guiding our institution towards excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover rounded-full shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 font-heading">{leader.name}</h3>
                    <p className="text-[#2D6CDF] font-semibold font-sans">{leader.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Quote */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <blockquote className="text-xl lg:text-2xl font-bold leading-relaxed mb-6 font-heading">
                  "Each step you take is a vital part of your journey toward becoming a skilled and compassionate
                  practitioner."
                </blockquote>
                <cite className="text-lg text-blue-100 font-sans">— Dr. Harshadip Kothare, Principal</cite>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg"
                  >
                    <Link href="/about/principal-message">Read Full Message</Link>
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
