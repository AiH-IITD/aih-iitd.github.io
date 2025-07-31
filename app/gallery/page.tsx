import gallery from "@/lib/gallery.json";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Photos from lab events, demos, and activities.</p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="relative w-full h-64 mb-2">
                <Image src={img.src} alt={img.alt} fill className="object-cover rounded-md" />
              </div>
              <span className="text-gray-700 text-center text-sm mt-2">{img.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 