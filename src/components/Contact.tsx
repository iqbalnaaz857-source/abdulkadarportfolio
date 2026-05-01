import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9503881905',
    href: 'tel:9503881905',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'abdulkadarshaikh1983@gmail.com',
    href: 'mailto:abdulkadarshaikh1983@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Goa, India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: '24/7 – Always Ready',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0077B6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#FF7F50] font-semibold uppercase tracking-widest text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Explore Goa?
          </h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Reach out to Abdul directly and plan your dream Goa itinerary today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {details.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div';

            return (
              <Wrapper
                key={label}
                href={href || undefined}
                className="block bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/15 transition-all duration-200 cursor-pointer"
              >
                <div className="bg-[#FF7F50]/20 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-[#FF7F50]" size={22} />
                </div>

                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white font-semibold text-sm break-all">
                    {value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Call Button */}
        <div className="text-center">
          <a
            href="tel:9503881905"
            className="inline-flex items-center gap-2 bg-[#FF7F50] hover:bg-[#e8623a] text-white font-bold px-10 py-4 rounded-full text-base shadow-xl transition-all duration-200 active:scale-95"
          >
            <Phone size={18} />
            Call Abdul: 9503881905
          </a>
        </div>

      </div>
    </section>
  );
}