"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, GraduationCap, Sparkles } from "lucide-react"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm BB Assistant, your AI-powered admission counselor. I'm here to help you with course information, admission process, scholarships, and campus life. How can I assist you today? 🎓",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "Admission process 2024",
    "Course details & fees",
    "Scholarship information",
    "Campus facilities",
    "Placement assistance",
    "Hostel & accommodation",
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response with AI-like delay
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your inquiry! I'm processing your request with our latest admission data. Our expert counselors are available 24/7 to provide personalized guidance. Would you like me to connect you with a human advisor or help you download our detailed prospectus?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages([...messages, newMessage])
    setIsTyping(true)

    // Simulate contextual bot response
    setTimeout(() => {
      setIsTyping(false)
      let botText = ""

      if (reply.includes("Admission")) {
        botText =
          "Great! Our admission process for 2024 is now open. We have a simple 4-step process: Online Application → Entrance Test → Personal Interview → Final Selection. The last date for applications is June 30, 2024. Would you like me to help you start your application?"
      } else if (reply.includes("Course")) {
        botText =
          "We offer comprehensive programs: BPT (₹1,50,000/year), MPT specializations (₹2,00,000/year), and Diploma courses (₹1,00,000/year). All programs include clinical training, research projects, and 100% placement assistance. Which program interests you most?"
      } else if (reply.includes("Scholarship")) {
        botText =
          "Excellent! We offer multiple scholarship opportunities: Merit-based (up to 50% fee waiver), Need-based assistance, Sports quota, and special scholarships for rural students. Our financial aid team can help you find the best option. Shall I connect you with them?"
      } else {
        botText =
          "I'd be happy to provide detailed information about that! Our expert team is ready to give you personalized guidance. Would you like to schedule a free consultation call or campus visit?"
      }

      const botResponse = {
        id: messages.length + 2,
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1200)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-8 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-4 rounded-full shadow-2xl z-50 animate-bounce transform hover:scale-110 transition-all duration-300 hidden md:block"
        >
          <div className="relative">
            <MessageCircle className="h-7 w-7" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-2 w-2 text-white" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[500px] z-50 hidden md:block">
          <Card className="h-full flex flex-col shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-xl">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-3">
                  <div className="relative">
                    <GraduationCap className="h-6 w-6" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  BB Assistant
                  <Badge className="bg-white/20 text-white text-xs px-2 py-1 border-0">AI Powered</Badge>
                </CardTitle>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online • Instant AI Responses • 24/7 Available
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl shadow-lg ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                          : "bg-white text-gray-800 border border-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {message.sender === "bot" ? (
                          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <User className="h-4 w-4 opacity-70" />
                        )}
                        <span className="text-xs opacity-70 font-medium">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-100 px-4 py-3 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Bot className="h-3 w-3 text-white" />
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Replies */}
              <div className="p-4 border-t bg-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 px-3 py-2 rounded-full hover:from-blue-100 hover:to-teal-100 transition-all duration-200 border border-blue-200 font-medium"
                    >
                      {reply}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about BB College..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-xl"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by AI • Instant responses • Human support available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
