import { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Services', 'Gallery', 'Reviews', 'Contact'];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0077B6] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Car className="text-[#FF7F50]" size={26} />
            <span className="font-bold text-white text-lg tracking-wide">AM Tours and Travels</span>
          </div>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-white/90 hover:text-[#FF7F50] font-medium transition-colors duration-200 text-sm uppercase tracking-wider"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="tel:9503881905"
            className="hidden md:inline-flex items-center bg-[#FF7F50] hover:bg-[#e8623a] text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors duration-200 shadow"
          >
            Call Now
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0077B6] ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-white/90 hover:text-[#FF7F50] font-medium text-left py-1 transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="tel:9503881905"
            className="inline-flex items-center justify-center bg-[#FF7F50] hover:bg-[#e8623a] text-white font-semibold px-4 py-2 rounded-full text-sm mt-2 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
