import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Ribbon, Globe, Hospital, Activity, ExternalLink } from "lucide-react";
import research from "@/lib/research.json";
import deployments from "@/lib/deployments.json";

const iconMap = { Brain, Ribbon, Globe, Hospital, Activity };

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research & Deployments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our translational healthcare deployments and foundational research domains.
          </p>
        </div>

        {/* Deployments Section */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                <span className="w-1.5 h-1.5 mr-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Active System
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Deployments</h2>
            <p className="text-lg text-gray-600">
              Translating cutting-edge AI research into real-world clinical workflows and healthcare systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deployments.map((dep, idx) => (
              <Card
                key={idx}
                className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Styled preview header matching lab identity */}
                  <div className="relative bg-gradient-to-br from-[#0c1322] via-[#111e38] to-[#0a0f1d] p-6 text-white text-center rounded-t-xl overflow-hidden border-b border-gray-800">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex items-center justify-center gap-5 mb-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 p-1.5 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                          <Image
                            src="/images/logo.png"
                            alt="AI in Healthcare Lab"
                            width={36}
                            height={36}
                            className="object-contain"
                          />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/95 p-1 flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
                          <Image
                            src="/images/iitd_logo.png"
                            alt="IIT Delhi"
                            width={38}
                            height={38}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-xs uppercase tracking-wider text-gray-300 font-medium mb-2">
                        {dep.lab}
                      </p>
                      <h3
                        className={`text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${dep.gradient || "from-emerald-400 via-teal-300 to-cyan-400"} mb-2`}
                        style={{ filter: `drop-shadow(0 0 14px ${dep.glowColor || "rgba(52,211,153,0.45)"})` }}
                      >
                        {dep.title}
                      </h3>
                      <p className="text-xs text-gray-300 max-w-xs line-clamp-2">
                        {dep.fullName}
                      </p>
                    </div>
                  </div>

                  <CardHeader className="pt-5 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                        {dep.title}
                      </CardTitle>
                      {dep.status && (
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {dep.status}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {dep.description}
                    </CardDescription>
                  </CardHeader>
                </div>

                <CardContent className="pt-0 pb-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {dep.tags.map((tag, i) => (
                      <Badge variant="outline" key={i} className="text-xs font-normal text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {dep.link && (
                    <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-2 group-hover:bg-blue-900 transition-colors">
                      <a href={dep.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span>Launch {dep.title}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Areas Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Research Areas</h2>
            <p className="text-lg text-gray-600">
              Explore all our research domains and focus areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((area, idx) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap] || Brain;
              return (
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between" key={idx}>
                  <CardHeader>
                    <Icon className="h-12 w-12 text-gray-700 mb-4" />
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2 leading-relaxed">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag, i) => (
                        <Badge variant="secondary" key={i}>{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
} 