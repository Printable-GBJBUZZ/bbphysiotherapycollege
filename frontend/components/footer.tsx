import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  Download,
  Globe,
  Shield,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-ocean-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white clip-path-hexagon"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-teal-400 clip-path-hexagon"></div>
        <div className="absolute top-60 right-40 w-16 h-16 bg-ocean-400 clip-path-hexagon"></div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-teal-600 to-ocean-700 py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Stay Connected with BBPC</h3>
            <p className="text-teal-100 mb-8 text-lg leading-relaxed font-sans">
              Get the latest updates on admissions, events, and academic achievements delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-teal-200 backdrop-blur-sm text-lg py-3 font-sans"
              />
              <Button className="bg-white text-ocean-600 hover:bg-teal-50 px-8 py-3 font-bold text-lg font-heading">
                Subscribe Now
              </Button>
            </div>
            <p className="text-teal-200 text-sm mt-4 font-sans">
              Join 2000+ subscribers • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* College Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20Physiotherapy_page-0001%20%281%29%20%281%29.jpg-6bsGgyMXBOnZRt3HaJmXao0rxMvNwN.jpeg"
                  alt="BBPC Logo"
                  width={80}
                  height={80}
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold font-heading">BB Physiotherapy College</h3>
                  <p className="text-ocean-200 text-lg font-sans">Excellence in Healthcare Education</p>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed text-lg font-sans">
                Established with a vision to provide quality education in physiotherapy, BB Physiotherapy College has
                been committed to developing competent healthcare professionals. We are affiliated with Maharashtra
                University of Health Sciences (MUHS) and recognized by the Government of Maharashtra.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge className="bg-ocean-600/20 text-ocean-300 border-ocean-500/30 px-4 py-2 font-mono">
                  <Award className="h-4 w-4 mr-2" />
                  MUHS Affiliated
                </Badge>
                <Badge className="bg-teal-600/20 text-teal-300 border-teal-500/30 px-4 py-2 font-mono">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Govt Recognized
                </Badge>
                <Badge className="bg-ocean-600/20 text-ocean-300 border-ocean-500/30 px-4 py-2 font-mono">
                  <Users className="h-4 w-4 mr-2" />
                  2000+ Alumni
                </Badge>
                <Badge className="bg-teal-600/20 text-teal-300 border-teal-500/30 px-4 py-2 font-mono">
                  <Star className="h-4 w-4 mr-2" />
                  25+ Years
                </Badge>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Instagram, href: "https://www.instagram.com/b_bhondekar_Physiotherapy_cllg/", color: "hover:text-pink-400" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-300" },
                  { icon: Youtube, href: "#", color: "hover:text-red-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 bg-white/10 clip-path-hexagon flex items-center justify-center ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 transform`}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-ocean-300 font-heading">Quick Links</h4>
              <div className="space-y-4">
                {[
                  "About College",
                  "Academic Programs",
                  "Admission Process",
                  "Faculty Profiles",
                  "Campus Facilities",
                  "Student Life",
                  "Research",
                  "Alumni Network",
                  "Career Services",
                  "Downloads",
                ].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="block text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg font-sans"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-teal-300 font-heading">Academic Programs</h4>
              <div className="space-y-4">
                {[
                  "Bachelor of Physiotherapy (BPT)",
                  "Master of Physiotherapy (MPT)",
                  "MPT Orthopedics",
                  "MPT Neurology",
                  "MPT Cardiopulmonary",
                  "MPT Sports Medicine",
                  "Certificate Courses",
                  "Continuing Education",
                  "Research Programs",
                  "Clinical Training",
                ].map((program, index) => (
                  <Link
                    key={index}
                    href="/courses"
                    className="block text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg font-sans"
                  >
                    {program}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-teal-300 font-heading">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-ocean-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-lg font-sans">BBPC Physiotherapy College</p>
                    <p className="text-neutral-400 font-sans">Near Civil Hospital, Medical Square</p>
                    <p className="text-neutral-400 font-sans">Bhandara, Maharashtra - 441904, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold font-sans">+91-7138-234567</p>
                    <p className="text-neutral-400 font-sans">Admissions Helpline</p>
                    <p className="text-neutral-400 font-sans">+91-9876543210 (Mobile)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-sans">info@bbpcphysiotherapy.edu.in</p>
                    <p className="text-neutral-400 font-sans">General Inquiries</p>
                    <p className="text-white font-sans">admissions@bbpcphysiotherapy.edu.in</p>
                    <p className="text-neutral-400 font-sans">Admission Queries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-ocean-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold font-sans">Office Hours</p>
                    <p className="text-neutral-400 font-sans">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-neutral-400 font-sans">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 flex-1 font-heading"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-neutral-400">
              <p className="text-lg font-sans">© 2025 BB Physiotherapy College. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors font-sans">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors font-sans">
                  Terms & Conditions
                </Link>
                <Link href="/grievance" className="hover:text-white transition-colors font-sans">
                  Grievance Redressal
                </Link>
                <Link href="/anti-ragging" className="hover:text-white transition-colors font-sans">
                  Anti-Ragging Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-neutral-400">
                <Award className="h-5 w-5 text-ocean-400" />
                <span className="font-sans">MUHS Affiliated</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <BookOpen className="h-5 w-5 text-teal-400" />
                <span className="font-sans">Govt Recognized</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Shield className="h-5 w-5 text-ocean-400" />
                <span className="font-sans">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Globe className="h-5 w-5 text-teal-400" />
                <span className="font-sans">Globally Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
