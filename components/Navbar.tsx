import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* <Brain className="h-8 w-8 text-gray-900" /> */}
            <Image src="/images/logo.png" alt="AI Healthcare Lab" width={40} height={40} />
            <span className="text-xl font-semibold text-gray-900">AI Healthcare Lab</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900 transition-colors">
              News
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors">
              Gallery
            </Link>
            <Link href="/publications" className="text-gray-600 hover:text-gray-900 transition-colors">
              Publications
            </Link>
            <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">
              Research
            </Link>
            <Link href="/team" className="text-gray-600 hover:text-gray-900 transition-colors">
              Team
            </Link>
            <Link href="/#join" className="text-gray-600 hover:text-gray-900 transition-colors">
              Join Us
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 