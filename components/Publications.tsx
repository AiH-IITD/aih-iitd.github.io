import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import publications from "@/lib/publications.json";

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our latest research contributions to the field of AI in healthcare
          </p>
        </div>
        <div className="space-y-6 max-h-[900px] overflow-y-auto" style={{ maxHeight: '900px' }}>
          <div className="flex flex-col gap-6" style={{ maxHeight: '660px', overflowY: 'auto' }}>
            {publications.slice(0, 20).map((pub, idx) => (
              <Card className="border-0 shadow-sm" key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-3">{pub.authors}</p>
                      <p className="text-sm text-gray-500 mb-3">{pub.venue}</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag, i) => (
                          <Badge variant="outline" key={i}>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    {pub.link && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
        <Button asChild variant="outline">
          <a href="/publications">View All Publications</a>
        </Button>
      </div>
      </div>
    </section>
  );
} 