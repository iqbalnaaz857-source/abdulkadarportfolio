import { ShieldCheck, Star, Map } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    label: 'Safe & Responsible',
    desc: 'Prioritizes passenger safety on every journey.',
  },
  {
    icon: Star,
    label: 'Highly Experienced',
    desc: 'Years of experience guiding tourists across Goa.',
  },
  {
    icon: Map,
    label: 'Local Expert',
    desc: 'Knows every beach, temple, church, and hidden gem.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/unclepik.jpeg"
              alt="Abdul Kadar Shaikh – Tourist Driver Goa"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#FF7F50] font-semibold uppercase tracking-widest text-sm mb-3">
              About Abdul
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Your Friendly Guide<br />Through Beautiful Goa
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Abdul Kadar Shaikh is a highly experienced and trusted tourist driver in Goa, known for providing safe, comfortable, and memorable travel experiences. With deep knowledge of Goa's culture, history, and hidden gems, he not only drives but also guides tourists by sharing fascinating stories about every place.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Abdul is friendly, polite, and makes every traveler feel welcome and relaxed throughout the journey. He is a careful and responsible driver who prioritizes safety while ensuring a smooth and enjoyable ride — whether you want to explore famous beaches, historical sites, or offbeat locations.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-[#f0f9ff] rounded-xl p-4 border border-[#0077B6]/10 hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#0077B6]/10 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                    <Icon className="text-[#0077B6]" size={20} />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    {label}
                  </p>
                  <p className="text-gray-500 text-xs leading-snug">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}