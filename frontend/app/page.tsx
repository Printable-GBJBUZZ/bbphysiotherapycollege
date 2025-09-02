"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Star,
  Users,
  ArrowRight,
  Download,
  MapPin,
  Award,
  GraduationCap,
  Building,
  Trophy,
  Calendar,
  BookOpen,
  CheckCircle,
  Target,
  Microscope,
  Stethoscope,
  Activity,
  Heart,
  Brain,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ChatBot } from "@/components/chatbot"
import { MobileNav } from "@/components/mobile-nav"
import Head from "next/head"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const [currentGallery, setCurrentGallery] = useState(0)

  // Enhanced hero images with better visibility and contrast
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
      alt: "Modern physiotherapy college campus with students learning clinical techniques",
      title: "Excellence in Physiotherapy Education",
      subtitle: "Premier healthcare education in Bhandara, Maharashtra",
    },
    {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
      alt: "State-of-the-art physiotherapy laboratory with advanced rehabilitation equipment",
      title: "World-Class Infrastructure",
      subtitle: "Advanced facilities and modern equipment for comprehensive physiotherapy training",
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
      alt: "Expert physiotherapy faculty demonstrating manual therapy techniques to students",
      title: "Expert Faculty & Mentorship",
      subtitle: "Learn from experienced professionals and renowned physiotherapy specialists",
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
      alt: "Students practicing physiotherapy techniques in modern clinical training facility",
      title: "Hands-On Clinical Training",
      subtitle: "Extensive practical experience in real healthcare environments across Bhandara",
    },
  ]

  // Updated testimonials with Bhandara context
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      course: "BPT Graduate 2023",
      batch: "Batch 2019-2023",
      rating: 5,
      text: "BBPC in Bhandara provided me with exceptional education and practical training. The faculty's dedication and modern facilities prepared me perfectly for my career in physiotherapy. The college's connection with PES Hospital gave me invaluable clinical experience.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      placement: "Senior Physiotherapist, Government Medical College, Nagpur",
      video: true,
    },
    {
      name: "Rahul Patel",
      course: "BPT Graduate 2022",
      batch: "Batch 2018-2022",
      rating: 5,
      text: "The research opportunities and advanced equipment at BBPC helped me specialize in sports physiotherapy. Being in Bhandara, we had unique opportunities to work with rural healthcare challenges, which broadened my perspective significantly.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      placement: "Sports Physiotherapist, Vidarbha Cricket Association",
      video: false,
    },
    {
      name: "Dr. Anjali Desai",
      course: "BPT Graduate 2021",
      batch: "Batch 2017-2021",
      rating: 5,
      text: "BBPC's comprehensive curriculum and experienced faculty provided me with strong foundation in physiotherapy. The college's emphasis on evidence-based practice and community healthcare has been crucial in my career serving rural Maharashtra.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      placement: "Physiotherapist, AIIMS Nagpur",
      video: false,
    },
  ]

  // Updated courses with enhanced images
  const courses = [
    {
      title: "Bachelor of Physiotherapy",
      code: "BPT",
      duration: "4.5 Years (Including Internship)",
      intake: "100 Students",
      description:
        "Comprehensive undergraduate program affiliated with Maharashtra University of Health Sciences (MUHS), providing strong foundation in physiotherapy practice with extensive clinical training at PES Hospital & Research Centre.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "MUHS Affiliated",
        "Clinical Rotations at PES Hospital",
        "Research Projects",
        "Community Healthcare",
      ],
      fee: "₹1,50,000/year",
      popular: true,
      eligibility: "12th Science (PCB) with 50% marks",
    },
  ]

  // Updated with Bhandara context and actual college information
  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-ocean-600" />,
      title: "MUHS Affiliated",
      description:
        "Affiliated with Maharashtra University of Health Sciences (MUHS), College Code 165118, ensuring quality education and recognized degrees with focus on rural healthcare needs.",
      stats: "MUHS Code 165118",
      hexColor: "bg-ocean-100",
    },
    {
      icon: <Building className="h-8 w-8 text-teal-600" />,
      title: "PES Hospital Integration",
      description:
        "Unique integration with 605-bed PES Hospital & Research Centre providing extensive hands-on clinical experience and interdisciplinary learning opportunities.",
      stats: "605-Bed Hospital",
      hexColor: "bg-teal-100",
    },
    {
      icon: <Users className="h-8 w-8 text-ocean-600" />,
      title: "Experienced Faculty",
      description:
        "Highly qualified faculty with advanced degrees, clinical experience, and expertise in both urban and rural physiotherapy practices under Bhondekar Shikshan Sanstha.",
      stats: "Expert Faculty",
      hexColor: "bg-ocean-100",
    },
    {
      icon: <Trophy className="h-8 w-8 text-teal-600" />,
      title: "Holistic Development",
      description:
        "Comprehensive education focusing on ethical practice, leadership skills, and community outreach as per our institutional objectives and vision.",
      stats: "Complete Growth",
      hexColor: "bg-teal-100",
    },
  ]

  // Updated events with better images
  const latestEvents = [
    {
      title: "World Physiotherapy Day Celebration 2024",
      date: "September 8, 2024",
      type: "Event",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description:
        "Annual celebration highlighting the importance of physiotherapy in healthcare with guest lectures, demonstrations, and community health camps in Bhandara.",
    },
    {
      title: "Clinical Skills Workshop at PES Hospital",
      date: "August 15, 2024",
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description:
        "Hands-on workshop on advanced clinical skills and modern physiotherapy techniques conducted at our integrated PES Hospital & Research Centre.",
    },
    {
      title: "Community Health Outreach Program",
      date: "July 20, 2024",
      type: "Community Service",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description:
        "Students and faculty providing physiotherapy services to underserved populations in rural areas around Bhandara, enhancing access to quality care.",
    },
  ]

  // Updated principal message with actual information
  const principalMessage = {
    name: "Dr. Harshadip Kothare",
    title: "Principal",
    qualification: "Principal, Bhojrajji Bhondekar Physiotherapy College",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    message:
      "It is a great pleasure and pride that I extend my heartfelt greetings to you from Bhojrajji Bhondekar Physiotherapy College situated At: Sirsi, Post: Warthi, Bhandara. As you embark on this exciting journey into the world of physiotherapy, I encourage you to embrace every opportunity for learning and growth. At our college, we are committed to providing you with a holistic education that seamlessly blends theoretical knowledge with hands-on practical experience. Supported by our dedicated faculty and cutting-edge facilities, hospital you will acquire the skills and insights needed to thrive in this dynamic field.",
  }

  // Updated statistics - Changed "15+ Years of Excellence" to "20+ Years of Experience in Education"
  const statistics = [
    { number: "20+", label: "Years of Experience in Education", icon: <Calendar className="h-6 w-6" /> },
    { number: "605", label: "Bed Hospital Integration", icon: <Building className="h-6 w-6" /> },
    { number: "100", label: "BPT Intake Capacity", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "15+", label: "Educational Institutions", icon: <BookOpen className="h-6 w-6" /> },
  ]

  // Updated departments based on actual college information
  const departments = [
    {
      title: "Electrotherapy & Electrodiagnosis",
      description:
        "Outfitted with all required electrotherapy and diagnostic equipment for comprehensive training in low, medium, and high-frequency electrical therapies.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Zap className="h-8 w-8 text-ocean-600" />,
      link: "/departments/electrotherapy",
    },
    {
      title: "Kinesiotherapy & Physical Diagnosis",
      description:
        "Core laboratory providing comprehensive training in kinesiology, biomechanics, and exercise therapy with practical applications.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      link: "/departments/kinesiotherapy",
    },
    {
      title: "Musculoskeletal Physiotherapy",
      description:
        "Specializing in diagnosing, treating, and preventing conditions affecting muscles, bones, joints, and connective tissues.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Target className="h-8 w-8 text-ocean-600" />,
      link: "/departments/musculoskeletal",
    },
    {
      title: "Neuro Physiotherapy",
      description:
        "Specialized care for conditions affecting central and peripheral nervous systems, restoring movement, strength, and independence.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Brain className="h-8 w-8 text-teal-600" />,
      link: "/departments/neuro",
    },
    {
      title: "Cardiovascular & Respiratory Physiotherapy",
      description:
        "Specialized field aimed at restoring and optimizing heart and lung function, improving exercise tolerance and reducing breathlessness.",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Heart className="h-8 w-8 text-ocean-600" />,
      link: "/departments/cardiovascular",
    },
    {
      title: "Community Physiotherapy",
      description:
        "Delivering tailored physiotherapy services in community settings, bringing rehabilitation and support to homes and communities.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Users className="h-8 w-8 text-teal-600" />,
      link: "/departments/community",
    },
  ]

  // Infrastructure facilities based on actual college information
  const facilities = [
    {
      title: "PES Hospital & Research Centre",
      description:
        "605-bed multi-specialty hospital with dedicated OPDs, modern equipment, and comprehensive diagnostic facilities including Pathology, Radiology, X-ray, ECG, and EEG units.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Building className="h-8 w-8 text-ocean-600" />,
    },
    {
      title: "Simulation Center",
      description:
        "State-of-the-art facility replicating real-world clinical scenarios, enabling practical training that builds confidence and competence.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Microscope className="h-8 w-8 text-teal-600" />,
    },
    {
      title: "Library and Resource Center",
      description:
        "Comprehensive collection of textbooks, research journals, and digital resources serving as vital support for in-depth research and academic success.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <BookOpen className="h-8 w-8 text-ocean-600" />,
    },
    {
      title: "Community Health Center",
      description:
        "On-campus facility providing students with opportunities to engage directly with patients under professional supervision, promoting community health initiatives.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
    },
  ]

  const campusGallery = [
    {
      title: "Modern Campus Infrastructure",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Advanced Laboratory Equipment",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "PES Hospital Integration",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Clinical Training Facilities",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ]

  const achievements = [
    {
      title: "MUHS Affiliation",
      description: "Affiliated with Maharashtra University of Health Sciences with College Code 165118",
      year: "Established 2002",
      icon: <Award className="h-12 w-12 text-yellow-500" />,
    },
    {
      title: "Government Recognition",
      description: "Recognized by Government of Maharashtra for quality physiotherapy education",
      year: "2002",
      icon: <Trophy className="h-12 w-12 text-gold-500" />,
    },
    {
      title: "Hospital Integration",
      description: "Unique integration with 605-bed PES Hospital & Research Centre for clinical training",
      year: "Ongoing",
      icon: <Building className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Educational Excellence",
      description: "Part of Bhondekar Shikshan Sanstha running 15+ educational institutions",
      year: "Since 2002",
      icon: <CheckCircle className="h-12 w-12 text-green-500" />,
    },
  ]

  useEffect(() => {
    // Hero slider auto-advance
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    const eventInterval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % latestEvents.length)
    }, 5000)

    const galleryInterval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % campusGallery.length)
    }, 4000)

    // Stats visibility on scroll
    const handleScroll = () => {
      const statsSection = document.getElementById("statistics")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(sliderInterval)
      clearInterval(testimonialInterval)
      clearInterval(eventInterval)
      clearInterval(galleryInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [heroImages.length, testimonials.length, latestEvents.length, campusGallery.length])

  return (
    <>
      <Head>
        <title>BBPC Physiotherapy College - Home | Premier Healthcare Education in Bhandara</title>
        <meta
          name="description"
          content="Bhojrajji Bhondekar Physiotherapy College, Bhandara - MUHS affiliated BPT program with 605-bed hospital integration. Run by Bhondekar Shikshan Sanstha since 2002."
        />
        <meta
          name="keywords"
          content="BBPC, Bhojrajji Bhondekar, physiotherapy college, BPT, Bhandara, Maharashtra, MUHS, PES Hospital, Bhondekar Shikshan Sanstha"
        />
      </Head>

      <div className="min-h-screen bg-neutral-50">
        <Header />
        <FloatingElements />
        <ChatBot />
        <MobileNav />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Image Slider Background */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Enhanced gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/95 via-ocean-800/90 to-teal-800/90"></div>
          </div>

          {/* Hexagonal floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-teal-400/20 clip-path-hexagon animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-ocean-400/20 clip-path-hexagon animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-teal-300/30 clip-path-hexagon animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Main heading */}
              <h1 className="text-3xl uppercase sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-slide-in-left font-heading">
                Bhojrajji Bhondekar
                <br />
                <span className="bg-gradient-to-r uppercase from-teal-300 via-ocean-300 to-teal-200 bg-clip-text text-transparent">
                  Physiotherapy College
                </span>
              </h1>

              {/* Dynamic subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ocean-100 max-w-4xl mx-auto leading-relaxed animate-slide-in-right font-sans px-4">
                Run by Bhondekar Shikshan Sanstha • Recognised by Govt. of Maharashtra • Affiliated to MUHS
              </p>

              {/* Location Badge */}
              <div className="animate-fade-in">
                <Badge className="bg-gradient-to-r from-teal-500/20 to-ocean-600/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold border border-white/20 mb-6 font-sans">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  At: Sirsi, Post: Warthi, Bhandara, Maharashtra
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-scale-in px-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl w-full sm:w-auto font-heading"
                >
                  Apply Now 2025
                  <ArrowRight className="ml-2 md:ml-3 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-ocean-600 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold bg-transparent backdrop-blur-sm rounded-2xl w-full sm:w-auto font-heading"
                >
                  <Download className="mr-2 md:mr-3 h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
                  Download Prospectus
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 sm:pt-12 md:pt-16 animate-bounce-in px-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-teal-500/20 clip-path-hexagon flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <div className="text-teal-300">{stat.icon}</div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-teal-300 mb-1 md:mb-2 font-heading">
                      {stat.number}
                    </div>
                    <div className="text-ocean-200 text-xs sm:text-sm md:text-lg font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Navigation */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 clip-path-hexagon transition-all duration-300 ${
                  index === currentSlide ? "bg-teal-400 w-8" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 md:w-8 h-10 md:h-12 border-2 md:border-3 border-white rounded-full flex justify-center">
              <div className="w-1 md:w-2 h-3 md:h-4 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Welcome Message & Why BBPC Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Welcome Message */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-block mb-4 sm:mb-6">
                  <Badge className="bg-ocean-100 text-ocean-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                    Welcome to BBPC Bhandara
                  </Badge>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                  Why Bhojrajji Bhondekar Physiotherapy College?
                </h2>
                <p className="text-lg sm:text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-sans mb-8 sm:mb-12">
                  Established in 2002 under Bhondekar Shikshan Sanstha, our college is committed to providing the best
                  education, technical know-how, and personality development. We strive for overall human development
                  with our motto "Education is Life" and focus on excellence, devotion to quality, and establishment of
                  quality standards.
                </p>
              </div>

              {/* Why Choose Us Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {whyChooseUs.map((item, index) => (
                  <Card
                    key={index}
                    className="text-center shadow-lg border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-neutral-50"
                  >
                    <CardContent className="p-6 sm:p-8">
                      <div
                        className={`w-16 sm:w-20 h-16 sm:h-20 ${item.hexColor} clip-path-hexagon flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2 font-heading">{item.stats}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-50 to-ocean-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-teal-100 text-teal-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Academic Departments
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                Specialized Departments
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-sans">
                Comprehensive physiotherapy education across six specialized departments with state-of-the-art
                facilities and expert faculty.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {departments.map((department, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={department.image || "/placeholder.svg"}
                      alt={department.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm clip-path-hexagon flex items-center justify-center">
                        {department.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading">
                      <Link href={department.link || "#"} className="hover:text-ocean-600 transition-colors">
                        {department.title}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                      {department.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-ocean-100 text-ocean-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Infrastructure Overview
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                World-Class Facilities
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-sans">
                Our sprawling campus integrates cutting-edge educational facilities with a 605-bed multi-specialty
                hospital and upcoming medical college.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden transform hover:-translate-y-2"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm clip-path-hexagon flex items-center justify-center">
                        {facility.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading">
                      {facility.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Counter Section */}
        <section id="statistics" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-ocean-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-teal-100 text-teal-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Our Achievements
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                Excellence in Numbers
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center shadow-lg border-0 bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-ocean-100 to-teal-100 clip-path-hexagon flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <div className="text-ocean-600">{stat.icon}</div>
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600 mb-2 font-heading transition-all duration-1000 ${statsVisible ? "animate-bounce-in" : "opacity-0"}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-neutral-700 font-sans font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="w-64 sm:w-80 h-64 sm:h-80 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-ocean-500 to-teal-500 clip-path-hexagonLarge transform rotate-12"></div>
                    <div className="absolute inset-4 bg-white clip-path-hexagonLarge"></div>
                    <Image
                      src={principalMessage.image || "/placeholder.svg"}
                      alt={principalMessage.name}
                      fill
                      className="object-cover clip-path-hexagonLarge p-6"
                    />
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div className="inline-block">
                    <Badge className="bg-ocean-100 text-ocean-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                      Principal's Message
                    </Badge>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 font-heading">
                    Leading Healthcare Education in Bhandara
                  </h2>
                  <blockquote className="text-lg sm:text-xl text-neutral-700 leading-relaxed italic font-serif">
                    "{principalMessage.message}"
                  </blockquote>
                  <div className="pt-4">
                    <div className="font-bold text-neutral-900 text-lg sm:text-xl font-heading">
                      {principalMessage.name}
                    </div>
                    <div className="text-ocean-600 font-semibold">{principalMessage.title}</div>
                    <div className="text-neutral-600 text-sm">{principalMessage.qualification}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Gallery Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-ocean-100 text-ocean-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Campus Life
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                Experience Our Campus
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-sans">
                Take a virtual tour of our modern campus facilities and vibrant student life in Bhandara.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="relative h-64 sm:h-80 md:h-96">
                  {campusGallery.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentGallery ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    >
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading">
                      {campusGallery[currentGallery].title}
                    </h3>
                  </div>
                </div>
              </Card>

              {/* Gallery Navigation */}
              <div className="flex justify-center mt-6 sm:mt-8 gap-3">
                {campusGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGallery(index)}
                    className={`w-3 h-3 clip-path-hexagon transition-all duration-300 ${
                      index === currentGallery ? "bg-ocean-600 w-8" : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 to-ocean-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-ocean-100 text-ocean-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Recognition & Awards
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                Our Achievements
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-sans">
                Recognized for excellence in physiotherapy education and healthcare service across Maharashtra.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center shadow-lg border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6">{achievement.icon}</div>
                    <div className="text-lg sm:text-xl font-bold text-ocean-600 mb-2 font-heading">
                      {achievement.year}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 font-heading">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Events */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12">
              <div>
                <Badge className="bg-teal-100 text-teal-800 px-4 py-2 mb-4 font-mono uppercase tracking-wider text-sm sm:text-base">
                  Latest Updates
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-heading">
                  News & Events
                </h2>
                <p className="text-lg sm:text-xl text-neutral-700 font-sans">
                  Stay updated with our latest academic events and achievements in Bhandara
                </p>
              </div>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="hidden md:flex bg-transparent border-ocean-200 hover:bg-ocean-50 mt-4 sm:mt-0"
                >
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {latestEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`shadow-lg border-0 overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                    index === currentEvent ? "ring-2 ring-ocean-400" : ""
                  }`}
                >
                  <div className="relative h-40 sm:h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-neutral-800 font-sans text-xs sm:text-sm">{event.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-3 font-sans">
                      <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                      {event.date}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 line-clamp-2 font-heading">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-3 font-sans">{event.description}</p>
                    <Button
                      variant="ghost"
                      className="mt-4 p-0 h-auto text-ocean-600 hover:text-ocean-700 font-sans text-sm sm:text-base"
                    >
                      Read More <ArrowRight className="ml-1 h-3 sm:h-4 w-3 sm:w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-ocean-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <Badge className="bg-teal-100 text-teal-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold font-mono uppercase tracking-wider">
                  Student Success Stories
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 font-heading">
                What Our Students Say
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-sans">
                Hear from our successful graduates about their transformative experience at Bhojrajji Bhondekar
                Physiotherapy College, Bhandara.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-white to-neutral-50 shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 sm:h-80 lg:h-auto">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                      {testimonials[currentTestimonial].video && (
                        <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white rounded-full w-12 sm:w-16 h-12 sm:h-16 p-0"
                          >
                            <Play className="h-4 sm:h-6 w-4 sm:w-6 ml-1" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex mb-4 sm:mb-6">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 sm:h-7 w-5 sm:w-7 fill-teal-400 text-teal-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-neutral-700 mb-6 sm:mb-8 italic leading-relaxed font-serif">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-neutral-900 text-lg sm:text-xl mb-1 font-heading">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-ocean-600 font-semibold mb-1 font-sans text-sm sm:text-base">
                          {testimonials[currentTestimonial].course}
                        </div>
                        <div className="text-neutral-500 text-xs sm:text-sm mb-2 font-sans">
                          {testimonials[currentTestimonial].batch}
                        </div>
                        <div className="text-neutral-500 flex items-center font-sans text-xs sm:text-sm">
                          <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                          {testimonials[currentTestimonial].placement}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-6 sm:mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 sm:w-4 h-3 sm:h-4 clip-path-hexagon transition-all duration-300 ${
                      index === currentTestimonial ? "bg-ocean-600 w-8 sm:w-12" : "bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-ocean-600 via-ocean-700 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-heading">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-ocean-100 mb-8 sm:mb-10 leading-relaxed font-sans">
                Join Bhojrajji Bhondekar Physiotherapy College in Bhandara and embark on a rewarding career in
                healthcare. Applications for 2025 batch are now open.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl w-full sm:w-auto font-heading"
                >
                  Apply Now 2025
                  <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-ocean-600 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold bg-transparent backdrop-blur-sm rounded-2xl w-full sm:w-auto font-heading"
                >
                  <Download className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  Download Prospectus
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 clip-path-hexagon flex items-center justify-center">
                    <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  </div>
                  <span className="text-ocean-100 text-sm sm:text-lg font-sans">MUHS Affiliated</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 clip-path-hexagon flex items-center justify-center">
                    <Building className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  </div>
                  <span className="text-ocean-100 text-sm sm:text-lg font-sans">605-Bed Hospital</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 clip-path-hexagon flex items-center justify-center">
                    <Award className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  </div>
                  <span className="text-ocean-100 text-sm sm:text-lg font-sans">Scholarship Available</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-teal-400/20 clip-path-hexagon flex items-center justify-center">
                    <Users className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  </div>
                  <span className="text-ocean-100 text-sm sm:text-lg font-sans">Expert Faculty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
