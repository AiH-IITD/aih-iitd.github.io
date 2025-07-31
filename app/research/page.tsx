import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Brain } from "lucide-react";
import research from "@/lib/research.json";

const iconMap = { Eye, Heart, Brain };

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Research Areas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all our research domains and focus areas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((area, idx) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] || Eye;
            return (
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow" key={idx}>
                <CardHeader>
                  <Icon className="h-12 w-12 text-gray-700 mb-4" />
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
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
      </div>
    </main>
  );
} 