import { Car, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Car className="text-[#FF7F50]" size={22} />
          <span className="font-bold text-white text-lg">Abdul Kadar Shaikh</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Trusted Tourist Driver in Goa — Safe, Friendly & Experienced
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
          {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() =>
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              }
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex items-center justify-center gap-1 text-gray-600 text-xs">
          <span>&copy; {year} Abdul Kadar Shaikh. Made with</span>
          <Heart size={12} className="fill-[#FF7F50] text-[#FF7F50]" />
          <span>in Goa, India.</span>
        </div>
      </div>
    </footer>
  );
}
