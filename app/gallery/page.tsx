import gallery from "@/lib/gallery.json";
import Image from "next/image";
import { Camera } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export default function GalleryPage() {
  const galleryData = gallery as GalleryItem[];
  
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Photos from lab events, demos, and activities.</p>
        </div>
        
        {galleryData.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {galleryData.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="relative w-full h-64 mb-2">
                  <Image src={img.src} alt={img.alt} fill className="object-cover rounded-md" />
                </div>
                <span className="text-gray-700 text-center text-sm mt-2">{img.caption}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Photos Yet</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Our gallery is currently empty. Check back soon for photos from our lab events, demos, and activities!
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 