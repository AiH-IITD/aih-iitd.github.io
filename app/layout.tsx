import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Healthcare Lab - Computer Vision Research",
  description:
    "Advancing healthcare through cutting-edge computer vision and AI research. Developing innovative solutions for medical imaging, diagnosis, and patient care.",
  keywords: "AI, healthcare, computer vision, medical imaging, research lab, machine learning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
