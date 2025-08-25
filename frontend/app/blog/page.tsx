import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingBookingButton } from "@/components/floating-booking-button"
import { MobileNav } from "@/components/mobile-nav"

export default function BlogPage() {
  const featuredPost = {
    title: "5 Essential Exercises for Lower Back Pain Relief",
    excerpt:
      "Discover evidence-based exercises that can help alleviate chronic lower back pain and improve your daily mobility.",
    author: "Dr. Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Pain Management",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  }

  const blogPosts = [
    {
      title: "Understanding Sports Injuries: Prevention and Recovery",
      excerpt: "Learn about common sports injuries and how proper physiotherapy can get you back in the game safely.",
      author: "Dr. James Wilson",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Sports Medicine",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "The Importance of Posture in the Digital Age",
      excerpt: "How modern technology affects our posture and what you can do to prevent tech neck and related issues.",
      author: "Dr. Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Posture",
      image:
        "https://images.unsplash.com/photo-1543791184-c64c2803e000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Post-Surgical Rehabilitation: What to Expect",
      excerpt: "A comprehensive guide to the rehabilitation process following orthopedic surgery.",
      author: "Dr. Emily Chen",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Recovery",
      image:
        "https://images.unsplash.com/photo-1585470334544-65099c57a172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Balance Training for Seniors: Preventing Falls",
      excerpt: "Essential balance exercises and tips to help older adults maintain independence and prevent falls.",
      author: "Dr. Lisa Thompson",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Geriatric Care",
      image:
        "https://images.unsplash.com/photo-1588995973621-294899914530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Pediatric Physiotherapy: Supporting Child Development",
      excerpt: "How physiotherapy can help children with developmental delays reach their full potential.",
      author: "Dr. Emily Chen",
      date: "March 3, 2024",
      readTime: "8 min read",
      category: "Pediatric",
      image:
        "https://images.unsplash.com/photo-1628773723934-2f5229993cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Managing Chronic Pain: A Holistic Approach",
      excerpt: "Explore comprehensive strategies for managing chronic pain beyond medication.",
      author: "Dr. David Park",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Pain Management",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
    },
  ]

  const categories = [
    "All Posts",
    "Pain Management",
    "Sports Medicine",
    "Recovery",
    "Posture",
    "Geriatric Care",
    "Pediatric",
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <FloatingBookingButton />
      <MobileNav />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Health & Wellness Blog</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Expert insights, tips, and advice from our certified physiotherapy team to help you live a healthier, more
              active life.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input placeholder="Search articles..." className="bg-white text-gray-900 pr-12" />
              <Button size="sm" className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-orange-500 text-white mb-4">Featured Article</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest from Our Experts</h2>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-48 sm:h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div className="space-y-4">
                    <Badge className="bg-blue-100 text-blue-800">{featuredPost.category}</Badge>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{featuredPost.title}</h3>
                    <p className="text-gray-600 text-base sm:text-lg">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="h-3 sm:h-4 w-3 sm:w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 sm:h-4 w-3 sm:w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 sm:h-4 w-3 sm:w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 mt-4 sm:mt-6">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:flex-1">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                      <div className="relative h-40 sm:h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-800 text-xs sm:text-sm">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <div className="space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2">{post.title}</h3>
                          <p className="text-gray-600 line-clamp-3 text-sm sm:text-base">{post.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-3 sm:h-4 w-3 sm:w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8 sm:mt-12">
                  <Button variant="outline" size="lg" className="px-6 sm:px-8 bg-transparent">
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80 space-y-6 sm:space-y-8">
                {/* Categories */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href="#"
                          className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-teal-50">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Stay Updated</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      Get the latest health tips and physiotherapy insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Your email address" />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="flex gap-3">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover flex-shrink-0"
                          />
                          <div>
                            <Link
                              href="#"
                              className="text-sm font-semibold text-gray-800 hover:text-blue-600 line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
