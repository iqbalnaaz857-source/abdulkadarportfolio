import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    country: 'United Kingdom',
    rating: 5,
    text: 'Abdul was absolutely wonderful! He took us to all the best spots and shared so many fascinating stories. Felt completely safe throughout our trip. Highly recommended!',
    avatar: 'SM',
  },
  {
    name: 'Rajesh K.',
    country: 'Bengaluru, India',
    rating: 5,
    text: 'Best driver in Goa, no question. Spoke perfect Kannada with us, knew all the hidden beaches, and was always on time. Will definitely call him again on our next visit.',
    avatar: 'RK',
  },
  {
    name: 'Ivan P.',
    country: 'Russia',
    rating: 5,
    text: 'Impressed that Abdul speaks Russian! He made communication so easy. The car was very clean and he drove carefully. A true professional tourist driver.',
    avatar: 'IP',
  },
  {
    name: 'Priya T.',
    country: 'Chennai, India',
    rating: 5,
    text: 'Our family trip to Goa was perfect thanks to Abdul. He was patient with our kids, knew great restaurants, and made the whole experience stress-free and joyful.',
    avatar: 'PT',
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#FF7F50] text-[#FF7F50]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF7F50] font-semibold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Travelers Say
          </h2>
          <p className="text-gray-500 mt-3">
            Real experiences from real guests who explored Goa with Abdul.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map(({ name, country, rating, text, avatar }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-5 right-5 text-[#0077B6]/10" size={40} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#0077B6] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{country}</p>
                </div>
                <div className="ml-auto">
                  <StarRow count={rating} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
