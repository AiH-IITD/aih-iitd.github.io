import news from "@/lib/news.json";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lab News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Recent happenings, awards, and activities from our lab.</p>
        </div>
        <div className="flex flex-col gap-8">
          {news.sort((a, b) => b.date.localeCompare(a.date)).map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-2">{item.content}</p>
              {item.link && item.link !== "#" && (
                <a href={item.link} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Read more</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 