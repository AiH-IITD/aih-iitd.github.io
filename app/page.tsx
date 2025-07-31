import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain, Users, Mail, MapPin, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import openings from "@/lib/openings.json";
import news from "@/lib/news.json";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Advancing Healthcare Through
                <span className="text-gray-600"> Computer Vision</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a leading research group in the Department of Computer Science and Engineering at IIT Delhi, led by Professor Chetan Arora. With a dynamic team of 17 graduate students and numerous undergraduate researchers, interns, and RAs, we focus on advancing the intersection of computer vision and medical imaging. Our mission is to develop and deploy AI solutions that redefine medical diagnosis, imaging, and patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  <a href="#research">Explore Our Research</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#join">Join Our Team</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Healthcare Computer Vision"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section (dynamic, scrollable) */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lab News & Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Recent happenings, awards, and activities from our lab.</p>
          </div>
          <div className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-2">
            {news.sort((a, b) => b.date.localeCompare(a.date)).map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700 mb-1">{item.content}</p>
                {item.link && item.link !== "#" && (
                  <a href={item.link} className="text-blue-600 hover:underline text-xs" target="_blank" rel="noopener noreferrer">Read more</a>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild variant="outline">
              <a href="/news">View All News</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      {/* <section id="research" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our interdisciplinary team focuses on developing AI solutions that address critical challenges in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle className="text-xl">Medical Image Analysis</CardTitle>
                <CardDescription>
                  Advanced algorithms for analyzing medical images including X-rays, MRIs, and CT scans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Segmentation</Badge>
                  <Badge variant="secondary">Detection</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle className="text-xl">Diagnostic AI</CardTitle>
                <CardDescription>
                  AI-powered diagnostic tools for early disease detection and treatment planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Classification</Badge>
                  <Badge variant="secondary">Prediction</Badge>
                  <Badge variant="secondary">Clinical AI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle className="text-xl">Surgical Navigation</CardTitle>
                <CardDescription>
                  Computer vision systems for real-time surgical guidance and augmented reality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AR/VR</Badge>
                  <Badge variant="secondary">Real-time</Badge>
                  <Badge variant="secondary">3D Vision</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild variant="outline">
              <a href="/research">View All Research</a>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the researchers and engineers driving innovation in AI healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Dr. Sarah Chen"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Sarah Chen</CardTitle>
                <CardDescription>Principal Investigator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">PhD in Computer Vision, 15+ years in medical AI research</p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Dr. Michael Rodriguez"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Michael Rodriguez</CardTitle>
                <CardDescription>Senior Research Scientist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Specialist in deep learning for medical image segmentation</p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Dr. Emily Watson"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-xl">Dr. Emily Watson</CardTitle>
                <CardDescription>Postdoctoral Researcher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Focus on AI-assisted surgical navigation systems</p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild variant="outline">
              <a href="/team">View All Team</a>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Join Us */}
      <section id="join" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re always looking for talented researchers and engineers to join our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Open Positions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {openings.map((opening, idx) => (
                  <div className="border-l-4 border-gray-200 pl-4" key={idx}>
                    <h4 className="font-semibold text-gray-900">{opening.title}</h4>
                    <p className="text-sm text-gray-600">{opening.type} • {opening.description}</p>
                  </div>
                ))}
                <div className="mt-4 text-sm text-gray-700 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <strong>Note:</strong> Masters, PhD, and Postdoctoral candidates must apply through official IIT Delhi procedures and cannot be recruited directly through the lab.
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Application Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For PhD Students:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strong background in computer science or related field</li>
                    <li>• Experience with deep learning frameworks</li>
                    <li>• Interest in healthcare applications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Postdocs:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PhD in Computer Vision, AI, or related field</li>
                    <li>• Publication record in top-tier venues</li>
                    <li>• Experience with medical imaging preferred</li>
                  </ul>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch to learn more about our research or discuss collaboration opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">contact@aihealthcarelab.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">123 Research Drive, University Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6" />
              <span className="text-lg font-semibold">AI Healthcare Lab</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 AI Healthcare Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
