import { Globe } from 'lucide-react';

const languages = [
  'Hindi', 'English', 'Kannada', 'Tamil', 'Konkani', 'Russian', 'Tulu', 'Beary',
];

export default function Languages() {
  return (
    <section className="py-16 bg-[#0077B6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Globe className="text-[#FF7F50]" size={28} />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Languages Spoken
          </h2>
        </div>
        <p className="text-white/70 mb-10 text-sm">
          Communication made easy — Abdul speaks your language.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors duration-200 cursor-default"
            >
              {lang}
            </span>
          ))}
          <span className="bg-[#FF7F50]/20 border border-[#FF7F50]/50 text-[#FF7F50] font-medium px-5 py-2.5 rounded-full text-sm cursor-default">
            + more
          </span>
        </div>
      </div>
    </section>
  );
}
