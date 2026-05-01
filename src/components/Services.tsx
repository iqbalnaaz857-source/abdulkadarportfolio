import { Plane, Compass, MapPin, Calendar, Car, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    desc: 'Reliable, punctual airport transfers to and from Goa International Airport.',
  },
  {
    icon: Compass,
    title: 'Full-Day Goa Tours',
    desc: 'Comprehensive guided tours covering Goa\'s most iconic and scenic spots.',
  },
  {
    icon: MapPin,
    title: 'North & South Goa Trips',
    desc: 'Explore vibrant North Goa beaches or the serene temples and churches of South Goa.',
  },
  {
    icon: Calendar,
    title: 'Custom Travel Plans',
    desc: 'Flexible itineraries tailored to your interests, schedule, and group size.',
  },
  {
    icon: Car,
    title: 'Clean & Comfortable Car',
    desc: 'Well-maintained, air-conditioned vehicle for a smooth, pleasant journey.',
  },
  {
    icon: Sparkles,
    title: 'Offbeat Locations',
    desc: 'Discover Goa\'s hidden waterfalls, spice farms, and lesser-known treasures.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF7F50] font-semibold uppercase tracking-widest text-sm mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Services for Every Traveler
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Whether you're here for a day or a week, I'll craft the perfect Goa experience for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-[#0077B6]/10 group-hover:bg-[#0077B6] rounded-xl w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon className="text-[#0077B6] group-hover:text-white transition-colors duration-300" size={22} />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:9503881905"
            className="inline-flex items-center gap-2 bg-[#FF7F50] hover:bg-[#e8623a] text-white font-bold px-10 py-4 rounded-full text-base shadow-lg transition-all duration-200 active:scale-95"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}
