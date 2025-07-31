import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import publications from "@/lib/publications.json";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse all research publications from our group.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {publications.map((pub, idx) => (
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
    </main>
  );
} 