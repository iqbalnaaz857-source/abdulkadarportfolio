import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0077B6]/80 via-[#005f92]/70 to-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block bg-[#FF7F50]/20 border border-[#FF7F50]/60 text-[#FF7F50] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Trusted Tourist Driver in Goa
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Explore Goa with<br />
          <span className="text-[#FF7F50]">Abdul Kadar Shaikh</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 font-medium mb-2 tracking-wide">
          Safe &nbsp;•&nbsp; Friendly &nbsp;•&nbsp; Experienced
        </p>
        <p className="text-base text-white/70 max-w-xl mx-auto mb-10">
          Discover Goa's beaches, heritage, and hidden gems with a knowledgeable local guide behind the wheel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9503881905"
            className="inline-flex items-center justify-center gap-2 bg-[#FF7F50] hover:bg-[#e8623a] active:scale-95 text-white font-bold px-8 py-4 rounded-full text-base shadow-xl transition-all duration-200"
          >
            <Phone size={18} />
            Call Now: 9503881905
          </a>
          <a
            href="mailto:abdulkadarshaikh1983@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
