"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Globe,
  ChevronDown,
  ChevronRight,
  Search,
  User,
  Download,
  Bell,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null)
  const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState<string | null>(null)
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Show admission popup after 3 seconds
    const timer = setTimeout(() => {
      setShowAdmissionPopup(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const navigationItems = {
    aboutUs: [
      "About",
      "Vision & Mission",
      "Society & Founder",
      "Principal's Message",
      "Chairperson's Message",
      "Secretary's Message",
      "Infrastructure Overview",
      "PES Hospital",
    ],
    admission: {
      main: ["List of Documents", "Fee Proposal", "Conduct & Discipline"],
      courses: {
        BPTH: [],
      },
    },
    departments: [
      "All Departments",
      "Faculty",
      "Electrotherapy & Electrodiagnosis",
      "Kinesiotherapy & Physical Diagnosis",
      "Musculoskeletal Physiotherapy",
      "Community Physiotherapy",
      "Neuro Physiotherapy",
      "Cardiovascular & Respiratory Physiotherapy",
    ],
    studentCorner: ["Academic Calendar", "Code of Conduct", "Hostel & Canteen", "Transport", "Anti-Ragging Cell"],
    achievements: ["Awards", "Faculty/Student Achievements"],
    events: ["Cultural & Sports", "Webinars", "Outreach Camps"],
    alumni: ["Alumni Network", "Notable Alumni"],
    contact: ["Location & Map", "Enquiry Form"],
    muhsMandate: ["College Code 165118", "Affiliation Letters"],
    digitalLibrary: ["Book Bank", "E-Resources", "Research Journals"],
    research: ["Research Cell", "Projects & Papers"],
  }

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
    setActiveSubDropdown(null)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
    setActiveSubDropdown(null)
  }

  const handleSubMouseEnter = (subDropdown: string) => {
    setActiveSubDropdown(subDropdown)
  }

  const toggleMobileMenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu)
    setMobileActiveSubMenu(null)
  }

  const toggleMobileSubMenu = (subMenu: string) => {
    setMobileActiveSubMenu(mobileActiveSubMenu === subMenu ? null : subMenu)
  }

  return (
    <>
      {/* Advanced Admission Popup */}
      {showAdmissionPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
            <div className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white p-6 relative">
              <button
                onClick={() => setShowAdmissionPopup(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Admissions Open 2025</h3>
                <p className="text-blue-100">Limited Seats Available</p>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">BPT Program</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">MUHS Affiliated</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Scholarship Available</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white font-bold py-3">
                  Apply Now 2025
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#2D6CDF] text-[#2D6CDF] bg-transparent"
                  onClick={() => setShowAdmissionPopup(false)}
                >
                  Download Brochure
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Don't miss this opportunity! Seats are filling fast.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Notification Bar - Responsive */}
      <div className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white py-2 text-xs sm:text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 relative z-10">
          <Bell className="h-3 w-3 sm:h-4 sm:w-4 animate-bounce flex-shrink-0" />
          <span className="font-semibold font-sans text-center">
            <span className="hidden sm:inline">Admissions Open 2025 | Limited Seats Available | Apply Now!</span>
            <span className="sm:hidden">Admissions Open 2025 | Apply Now!</span>
          </span>
        </div>
      </div>

      {/* Top Info Bar - Responsive */}
      <div className="bg-gradient-to-r from-ocean-600 to-teal-600 text-white py-2 sm:py-3 text-xs sm:text-sm">
        <div className="container mx-auto px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="font-sans">+91-7138-234567</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="font-sans">Bhandara, Maharashtra, India</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span className="font-sans">Mon-Sat: 9:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <select className="bg-transparent text-white text-xs sm:text-sm border-none outline-none font-sans">
                <option value="en" className="text-neutral-900">
                  English
                </option>
                <option value="hi" className="text-neutral-900">
                  हिंदी
                </option>
                <option value="mr" className="text-neutral-900">
                  मराठी
                </option>
              </select>
            </div>
            <Badge className="bg-white/20 text-white text-xs px-2 sm:px-3 py-1 border-0 font-mono">
              MUHS AFFILIATED
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Header - Responsive */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-200"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Logo + College Name + Actions */}
          <div className="flex justify-between items-center py-4">
            {/* Logo Section - Left */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20Physiotherapy_page-0001%20%281%29%20%281%29.jpg-6bsGgyMXBOnZRt3HaJmXao0rxMvNwN.jpeg"
                  alt="BBPC Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[80px] lg:h-[80px] rounded-xl shadow-lg ring-2 ring-[#2D6CDF]/20"
                />
              </Link>
            </div>

            {/* College Name - Center */}
            <div className="flex-1 text-center px-4 hidden lg:block">
              <Link href="/">
                <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold font-heading transition-colors duration-300 leading-tight text-black">
                  Bhojrajji Bhondekar Physiotherapy College
                </h1>
                <p className="text-base xl:text-lg 2xl:text-xl font-sans transition-colors duration-300 leading-tight mt-1 text-black">
                  Affiliated to MUHS, Govt. of Maharashtra Recognized
                </p>
              </Link>
            </div>

            {/* Mobile College Name - Visible on smaller screens */}
            <div className="flex-1 text-center px-2 lg:hidden">
              <Link href="/">
                <h1 className="text-lg sm:text-xl font-bold font-heading transition-colors duration-300 leading-tight text-black">
                  BBPC Physiotherapy College
                </h1>
                <p className="text-sm sm:text-base font-sans transition-colors duration-300 leading-tight text-black">
                  MUHS Affiliated
                </p>
              </Link>
            </div>

            {/* Desktop Actions - Right */}
            <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
              <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-[#2D6CDF] p-2">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-[#2D6CDF] p-2">
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#2D6CDF] text-[#2D6CDF] hover:bg-[#2D6CDF] hover:text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 bg-transparent text-sm whitespace-nowrap"
              >
                <Download className="h-4 w-4 mr-2" />
                Brochure
              </Button>
              <Button className="bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] hover:from-[#1E4FBF] hover:to-[#2D6CDF] text-white px-6 py-2 font-bold shadow-lg rounded-xl font-heading transform hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap">
                Admission 2025
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 sm:h-7 sm:w-7 text-neutral-800" />
              ) : (
                <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-neutral-800" />
              )}
            </button>
          </div>

          {/* Desktop Navigation - Two Column Layout with Better Spacing */}
          <div className="hidden xl:block border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-16">
              {/* First Column */}
              <nav className="flex items-center justify-start gap-8">
                {/* Home */}
                <Link
                  href="/"
                  className="font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap"
                >
                  Home
                </Link>

                {/* About Us */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("aboutUs")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    About Us <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "aboutUs" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      <Link
                        href="/about"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        About
                      </Link>
                      <Link
                        href="/about/vision-mission"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Vision & Mission
                      </Link>
                      <Link
                        href="/about/society-founder"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Society & Founder
                      </Link>
                      <Link
                        href="/about/principal-message"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Principal's Message
                      </Link>
                      <Link
                        href="/about/chairperson-message"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Chairperson's Message
                      </Link>
                      <Link
                        href="/about/secretary-message"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Secretary's Message
                      </Link>
                      <Link
                        href="/about/infrastructure"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Infrastructure Overview
                      </Link>
                      <Link
                        href="/about/pes-hospital"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        PES Hospital
                      </Link>
                    </div>
                  )}
                </div>

                {/* Admission - Special Highlighted */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("admission")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-2 font-bold bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap">
                    Admission 2025 <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "admission" && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {/* Main Admission Items */}
                      {navigationItems.admission.main.map((item, index) => (
                        <Link
                          key={index}
                          href="/admission"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}

                      {/* Courses with Sub-dropdown */}
                      <div className="relative" onMouseEnter={() => handleSubMouseEnter("courses")}>
                        <div className="flex items-center justify-between px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans cursor-pointer text-sm">
                          <span>Courses</span>
                          <ChevronRight className="h-4 w-4" />
                        </div>

                        {activeSubDropdown === "courses" && (
                          <div className="absolute top-0 left-full ml-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-slide-in-right">
                            {/* BPTH */}
                            <Link
                              href="/courses/bpth"
                              className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                            >
                              BPTH
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Departments */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("departments")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    Departments <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "departments" && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      <Link
                        href="/departments"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        All Departments
                      </Link>
                      <Link
                        href="/departments/electrotherapy"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Electrotherapy & Electrodiagnosis
                      </Link>
                      <Link
                        href="/departments/kinesiotherapy"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Kinesiotherapy & Physical Diagnosis
                      </Link>
                      <Link
                        href="/departments/musculoskeletal"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Musculoskeletal Physiotherapy
                      </Link>
                      <Link
                        href="/departments/community"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Community Physiotherapy
                      </Link>
                      <Link
                        href="/departments/neuro-physiotherapy"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Neuro Physiotherapy
                      </Link>
                      <Link
                        href="/departments/cardiovascular"
                        className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                      >
                        Cardiovascular & Respiratory Physiotherapy
                      </Link>
                    </div>
                  )}
                </div>

                {/* Student Corner */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("studentCorner")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    Student Corner <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "studentCorner" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {navigationItems.studentCorner.map((item, index) => (
                        <Link
                          key={index}
                          href="/student-corner"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              {/* Second Column */}
              <nav className="flex items-center justify-start gap-10">
                {/* Contact Us */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("contact")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    Contact Us <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "contact" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {navigationItems.contact.map((item, index) => (
                        <Link
                          key={index}
                          href="/contact"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* MUHS Mandate */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("muhsMandate")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    MUHS Mandate <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "muhsMandate" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {navigationItems.muhsMandate.map((item, index) => (
                        <Link
                          key={index}
                          href="/muhs-mandate"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Digital Library */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("digitalLibrary")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    Digital Library <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "digitalLibrary" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {navigationItems.digitalLibrary.map((item, index) => (
                        <Link
                          key={index}
                          href="/digital-library"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Research */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("research")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-semibold transition-colors hover:text-[#2D6CDF] text-neutral-700 font-sans px-4 py-2 rounded-lg hover:bg-blue-50 text-sm whitespace-nowrap">
                    Research <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === "research" && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-fade-in">
                      {navigationItems.research.map((item, index) => (
                        <Link
                          key={index}
                          href="/research"
                          className="block px-6 py-3 text-neutral-700 hover:bg-blue-50 hover:text-[#2D6CDF] transition-colors font-medium font-sans text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Responsive */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 sm:py-6 border-t bg-white/98 backdrop-blur-md rounded-b-2xl shadow-xl max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1 sm:gap-2">
              <Link
                href="/"
                className="text-neutral-700 hover:text-[#2D6CDF] font-semibold py-3 sm:py-4 px-3 sm:px-4 border-b border-neutral-100 font-sans text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile About Us */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleMobileMenu("aboutUs")}
                  className="w-full flex items-center justify-between text-neutral-700 hover:text-[#2D6CDF] font-semibold py-3 sm:py-4 px-3 sm:px-4 font-sans text-sm sm:text-base"
                >
                  About Us
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileActiveMenu === "aboutUs" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveMenu === "aboutUs" && (
                  <div className="bg-gray-50 px-3 sm:px-4 pb-3 sm:pb-4">
                    <Link
                      href="/about"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/about/vision-mission"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      href="/about/society-founder"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Society & Founder
                    </Link>
                    <Link
                      href="/about/principal-message"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Principal's Message
                    </Link>
                    <Link
                      href="/about/chairperson-message"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Chairperson's Message
                    </Link>
                    <Link
                      href="/about/secretary-message"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Secretary's Message
                    </Link>
                    <Link
                      href="/about/infrastructure"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Infrastructure Overview
                    </Link>
                    <Link
                      href="/about/pes-hospital"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PES Hospital
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Admission */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleMobileMenu("admission")}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white font-bold py-3 sm:py-4 px-3 sm:px-4 font-sans rounded-lg mx-2 sm:mx-4 my-2 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2">Admission 2025</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileActiveMenu === "admission" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveMenu === "admission" && (
                  <div className="bg-blue-50 px-3 sm:px-4 pb-3 sm:pb-4">
                    {navigationItems.admission.main.map((item, index) => (
                      <Link
                        key={index}
                        href="/admission"
                        className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}

                    {/* Mobile Courses Sub-menu */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubMenu("courses")}
                        className="w-full flex items-center justify-between py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      >
                        Courses
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileActiveSubMenu === "courses" ? "rotate-180" : ""}`}
                        />
                      </button>
                      {mobileActiveSubMenu === "courses" && (
                        <div className="bg-white rounded-lg mx-2 p-2">
                          <Link
                            href="/courses/bpth"
                            className="block py-2 pl-6 sm:pl-8 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            BPTH
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Departments */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleMobileMenu("departments")}
                  className="w-full flex items-center justify-between text-neutral-700 hover:text-[#2D6CDF] font-semibold py-3 sm:py-4 px-3 sm:px-4 font-sans text-sm sm:text-base"
                >
                  Departments
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileActiveMenu === "departments" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveMenu === "departments" && (
                  <div className="bg-gray-50 px-3 sm:px-4 pb-3 sm:pb-4">
                    <Link
                      href="/departments"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Departments
                    </Link>
                    <Link
                      href="/departments/electrotherapy"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Electrotherapy & Electrodiagnosis
                    </Link>
                    <Link
                      href="/departments/kinesiotherapy"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kinesiotherapy & Physical Diagnosis
                    </Link>
                    <Link
                      href="/departments/musculoskeletal"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Musculoskeletal Physiotherapy
                    </Link>
                    <Link
                      href="/departments/community"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Community Physiotherapy
                    </Link>
                    <Link
                      href="/departments/neuro-physiotherapy"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Neuro Physiotherapy
                    </Link>
                    <Link
                      href="/departments/cardiovascular"
                      className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cardiovascular & Respiratory Physiotherapy
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Mobile Menu Items */}
              {[
                { key: "studentCorner", label: "Student Corner" },
                { key: "achievements", label: "Achievements" },
                { key: "events", label: "Events" },
                { key: "alumni", label: "Alumni" },
                { key: "contact", label: "Contact Us" },
                { key: "muhsMandate", label: "MUHS Mandate" },
                { key: "digitalLibrary", label: "Digital Library" },
                { key: "research", label: "Research" },
              ].map((item) => (
                <div key={item.key} className="border-b border-neutral-100">
                  <button
                    onClick={() => toggleMobileMenu(item.key)}
                    className="w-full flex items-center justify-between text-neutral-700 hover:text-[#2D6CDF] font-semibold py-3 sm:py-4 px-3 sm:px-4 font-sans text-sm sm:text-base"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileActiveMenu === item.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileActiveMenu === item.key && (
                    <div className="bg-gray-50 px-3 sm:px-4 pb-3 sm:pb-4">
                      {navigationItems[item.key].map((subItem, index) => (
                        <Link
                          key={index}
                          href={`/${item.key}`}
                          className="block py-2 sm:py-3 pl-4 sm:pl-6 text-neutral-600 hover:text-[#2D6CDF] text-sm font-sans"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
