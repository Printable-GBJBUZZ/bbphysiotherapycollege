// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Calendar } from "@/components/ui/calendar"
// import { Header } from "@/components/header"
// import { MobileNav } from "@/components/mobile-nav"

// export default function BookingPage() {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
//   const [selectedTime, setSelectedTime] = useState("")
//   const [selectedService, setSelectedService] = useState("")
//   const [selectedTherapist, setSelectedTherapist] = useState("")
//   const [step, setStep] = useState(1)

//   const services = [
//     "Pain Management",
//     "Sports Rehabilitation",
//     "Post-Surgical Recovery",
//     "Posture Correction",
//     "Geriatric Therapy",
//     "Pediatric Physiotherapy",
//   ]

//   const therapists = [
//     { name: "Dr. Sarah Mitchell", specialty: "Manual Therapy & Pain Management" },
//     { name: "Dr. Michael Rodriguez", specialty: "Orthopedic & Post-Surgical" },
//     { name: "Dr. Emily Chen", specialty: "Pediatric Specialist" },
//     { name: "Dr. James Wilson", specialty: "Sports Rehabilitation" },
//     { name: "Dr. Lisa Thompson", specialty: "Geriatric Care" },
//     { name: "Dr. David Park", specialty: "Pain Management" },
//   ]

//   const timeSlots = [
//     "8:00 AM",
//     "8:30 AM",
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "1:00 PM",
//     "1:30 PM",
//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",
//   ]

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />
//       <MobileNav />

//       {/* Hero Section */}
//       <section className="py-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-3xl sm:text-4xl font-bold mb-4">Book Your Appointment</h1>
//             <p className="text-lg sm:text-xl text-blue-100">Schedule your consultation with our expert physiotherapy team</p>
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             {/* Progress Steps */}
//             <div className="flex justify-center mb-8">
//               <div className="flex items-center gap-4">
//                 {[1, 2, 3].map((num) => (
//                   <div key={num} className="flex items-center">
//                     <div
//                       className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-bold ${
//                         step >= num ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {num}
//                     </div>
//                     {num < 3 && <div className={`w-12 sm:w-16 h-1 mx-2 ${step > num ? "bg-blue-600" : "bg-gray-200"}`} />}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="grid lg:grid-cols-3 gap-8">
//               {/* Main Form */}
//               <div className="lg:col-span-2">
//                 <Card className="shadow-lg border-0">
//                   <CardHeader>
//                     <CardTitle className="text-xl sm:text-2xl">
//                       {step === 1 && "Select Service & Therapist"}
//                       {step === 2 && "Choose Date & Time"}
//                       {step === 3 && "Your Information"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4 sm:space-y-6">
//                     {step === 1 && (
//                       <>
//                         <div className="space-y-3">
//                           <Label htmlFor="service">Select Service</Label>
//                           <Select value={selectedService} onValueChange={setSelectedService}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Choose a service" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {services.map((service) => (
//                                 <SelectItem key={service} value={service}>
//                                   {service}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>

//                         <div className="space-y-3">
//                           <Label htmlFor="therapist">Preferred Therapist (Optional)</Label>
//                           <Select value={selectedTherapist} onValueChange={setSelectedTherapist}>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Any available therapist" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {therapists.map((therapist) => (
//                                 <SelectItem key={therapist.name} value={therapist.name}>
//                                   <div>
//                                     <div className="font-medium">{therapist.name}</div>
//                                     <div className="text-sm text-gray-500">{therapist.specialty}</div>
//                                   </div>
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>

//                         <Button
//                           onClick={() => setStep(2)}
//                           disabled={!selectedService}
//                           className="w-full bg-blue-600 hover:bg-blue-700"
//                         >
//                           Continue to Date & Time
//                         </Button>
//                       </>
//                     )}

//                     {step === 2 && (
//                       <>
//                         <div className="space-y-3">
//                           <Label>Select Date</Label>
//                           <Calendar
//                             mode="single"
//                             selected={selectedDate}
//                             onSelect={setSelectedDate}
//                             disabled={(date) => date < new Date() || date.getDay() === 0}
//                             className="rounded-md border"
//                           />
//                         </div>

//                         <div className="space-y-3">
//                           <Label>Available Times</Label>
//                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                             {timeSlots.map((time) => (
//                               <Button
//                                 key={time}
//                                 variant={selectedTime === time ? "default" : "outline"}
//                                 size="sm"
//                                 onClick={() => setSelectedTime(time)}
//                                 className={selectedTime === time ? "bg-blue-600" : ""}
//                               >
//                                 {time}
//                               </Button>
//                             ))}
//                           </div>
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-4">
//                           <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
//                             Back
//                           </Button>
//                           <Button
//                             onClick={() => setStep(3)}
//                             disabled={!selectedDate || !selectedTime}
//                             className="flex-1 bg-blue-600 hover:bg-blue-700"
//                           >
//                             Continue to Details
//                           </Button>
//                         </div>
//                       </>
//                     )}

//                     {step === 3 && (
//                       <>
//                         <div className="grid md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="firstName">First Name</Label>
//                             <Input id="firstName" placeholder="Enter your first name" />
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="lastName">Last Name</Label>
//                             <Input id="lastName" placeholder="Enter your last name" />
//                           </div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="email">Email</Label>
//                             <Input id="email" type="email" placeholder="your.email@example.com" />
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="phone">Phone Number</Label>
//                             <Input id="phone" type="tel" placeholder="(555) 123-4567" />
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="dateOfBirth">Date of Birth</Label>
//                           <Input id="dateOfBirth" type="date" />
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="insurance">Insurance Provider (Optional)</Label>
//                           <Select>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select your insurance" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="aetna">Aetna</SelectItem>
//                               <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
//                               <SelectItem value="cigna">Cigna</SelectItem>
//                               <SelectItem value="humana">Humana</SelectItem>
//                               <SelectItem value="medicare">Medicare</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                               <SelectItem value="self-pay">Self Pay</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="reason">Reason for Visit</Label>
//                           <Textarea
//                             \
import React from 'react';

const page = () => {
  return (
    <div>
      
    </div>
  );
}

export default page;
