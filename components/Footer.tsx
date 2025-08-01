import { Separator } from "@/components/ui/separator"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image src="/images/logo.png" alt="AI Healthcare Lab" width={32} height={32} />
            <span className="text-lg font-semibold">AI Healthcare Lab</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/AiH-IITD/" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/aih-iit-delhi/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-400">
          <p>&copy; 2025 AI Healthcare Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 