import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Heart, Globe, Target, Crown, Building, GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SocietyFounderPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our endeavors",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making quality education available to students from all backgrounds",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Embracing diversity and creating an environment where everyone thrives",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining the highest standards of educational quality and achievement",
    },
    {
      icon: Target,
      title: "Social Commitment",
      description: "Developing responsible citizens who contribute to society",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description: "Fostering a culture of continuous growth and development",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Educational Institution Heritage"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6CDF]/80 to-[#1E4FBF]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg font-mono">
              Our Heritage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Society & Founder</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-sans">
              Bhondekar Shikshan Sanstha – Legacy of Inclusive Education
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column - Founder Photo */}
                  <div className="bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 p-8 lg:p-12 flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-sm">
                      <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Hon. Late Shri Bhojrajji L. Bhondekar - Founder"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D6CDF]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Star className="h-6 w-6 text-[#2D6CDF]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <GraduationCap className="h-8 w-8 text-[#2D6CDF]" />
                      </div>
                    </div>

                    {/* Founder Details */}
                    <div className="text-center mt-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-2 font-heading">
                        Hon. Late Shri Bhojrajji L. Bhondekar
                      </h2>
                      <p className="text-lg text-[#2D6CDF] font-semibold mb-2 font-sans">Founder</p>
                      <p className="text-neutral-600 font-sans">Bhondekar Shikshan Sanstha, Bhandara</p>
                    </div>
                  </div>

                  {/* Right Column - Founder Message */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <Crown className="h-8 w-8 text-[#2D6CDF] flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-heading">Our Founder</h3>
                    </div>

                    <div className="space-y-6 text-neutral-700 leading-relaxed font-sans">
                      <p className="text-lg">
                        Hon. Late Shri Bhojrajji Bhondekar was the visionary force behind Bhondekar Shikshan Sanstha.
                        His mission was to provide accessible, high-quality education to students from both rural and
                        urban backgrounds.
                      </p>

                      <p>
                        With strong values, social commitment, and passion for development, he laid the foundation for
                        institutions that empower thousands today. His belief in the transformative power of education
                        continues to guide our mission and inspire our work.
                      </p>

                      <p>
                        The legacy he created extends far beyond the walls of our institutions – it lives in every
                        student who graduates with the knowledge, skills, and values necessary to make a positive impact
                        on society.
                      </p>

                      <div className="bg-gradient-to-r from-[#2D6CDF]/10 to-[#1E4FBF]/10 p-6 rounded-lg border-l-4 border-[#2D6CDF]">
                        <p className="italic text-[#2D6CDF] font-semibold">
                          "Education is the most powerful weapon which you can use to change the world, and it should be
                          accessible to all."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chairperson Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column - Message Content */}
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-8">
                      <Users className="h-8 w-8 text-[#2D6CDF] flex-shrink-0" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-heading">
                        Chairperson's Commitment
                      </h3>
                    </div>

                    <div className="space-y-6 text-neutral-700 leading-relaxed font-sans">
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-neutral-800 mb-2 font-heading">
                          Hon. Smt. Manjula B. Bhondekar
                        </h4>
                        <p className="text-[#2D6CDF] font-semibold">Chairperson, Bhondekar Shikshan Sanstha</p>
                      </div>

                      <p>
                        By providing the best education, technical know-how, personality traits, and leadership
                        qualities to grow as future Indian leaders with values in life, Bhondekar Shikshan Sanstha
                        gradually strives to achieve overall human development in line with the national policy of
                        expanding youth access to higher education.
                      </p>

                      <p>
                        Our commitment extends beyond academic excellence to nurturing well-rounded individuals who
                        contribute meaningfully to society. We believe in creating an environment where students can
                        develop both professionally and personally.
                      </p>

                      <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 p-6 rounded-lg border-l-4 border-[#FF6B35]">
                        <p className="italic text-[#FF6B35] font-semibold">
                          "We are committed to shaping leaders who will drive positive change in our communities and
                          nation."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Chairperson Photo */}
                  <div className="bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 p-8 lg:p-12 flex flex-col justify-center items-center order-1 lg:order-2">
                    <div className="relative w-full max-w-sm">
                      <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Hon. Smt. Manjula B. Bhondekar - Chairperson"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF6B35]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Crown className="h-6 w-6 text-[#FF6B35]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Users className="h-8 w-8 text-[#FF6B35]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sanstha Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#2D6CDF]/10 text-[#2D6CDF] border-[#2D6CDF]/20 mb-6 px-6 py-2 text-lg font-mono">
                Our Legacy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">
                About Bhondekar Shikshan Sanstha
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-6">
                  Established in 2002, Bhondekar Shikshan Sanstha has grown into a well-respected educational trust that
                  operates 12+ institutions across Maharashtra. These include colleges in Physiotherapy, Nursing,
                  Ayurved, Civil Services, and MR education.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed font-sans mb-8">
                  The Sanstha believes in creating socially responsible, employable citizens by focusing on skill,
                  character, and community. Our mission is to deliver inclusive education across rural and urban
                  populations alike, ensuring that quality education reaches every corner of society.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 rounded-lg">
                    <div className="text-3xl font-bold text-[#2D6CDF] mb-2 font-heading">2002</div>
                    <div className="text-sm text-neutral-600 font-sans">Established</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#2D6CDF]/5 to-[#1E4FBF]/5 rounded-lg">
                    <div className="text-3xl font-bold text-[#2D6CDF] mb-2 font-heading">12+</div>
                    <div className="text-sm text-neutral-600 font-sans">Institutions</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Educational Institutions Network"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D6CDF]/20 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1 font-heading">Statewide Network</h4>
                  <p className="text-sm opacity-90 font-sans">12+ Educational Institutions Across Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Institution Types */}
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { name: "Physiotherapy", icon: Heart },
                { name: "Nursing", icon: Users },
                { name: "Ayurved", icon: BookOpen },
                { name: "Civil Services", icon: Building },
                { name: "MR Education", icon: GraduationCap },
              ].map((institution, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <institution.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-800 font-heading">{institution.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-gradient-to-r from-[#2D6CDF]/5 to-[#1E4FBF]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6 font-heading">Our Core Values</h2>
              <p className="text-lg text-neutral-600 font-sans">
                The principles that guide our educational mission and institutional culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-4 font-heading">{value.title}</h3>
                    <p className="text-neutral-600 leading-relaxed font-sans">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <GraduationCap className="h-8 w-8" />
                  <h3 className="text-3xl font-bold font-heading">Ready to Join Our Legacy of Learning?</h3>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed font-sans">
                  Become part of a tradition that has been shaping futures and transforming communities since 2002
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#2D6CDF] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/admission">Apply Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                  >
                    <Link href="/courses">Explore Courses</Link>
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
