import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BBPC Physiotherapy College - Premier Healthcare Education in Bhandara",
  description:
    "BBPC Physiotherapy College, Bhandara - Leading institution for BPT, MPT and physiotherapy education in Maharashtra. MUHS affiliated with excellent placement record.",
  keywords: "physiotherapy college, BPT, MPT, Bhandara, Maharashtra, MUHS, healthcare education, physiotherapy courses",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
