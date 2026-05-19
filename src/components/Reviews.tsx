import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

type Review = {
  name: string;
  country: string;
  rating: number;
  text: string;
  avatar: string;
};

const defaultReviews: Review[] = [
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
    text: 'Best driver in Goa, no question. Spoke perfect Kannada with us, knew all the hidden beaches, and was always on time.',
    avatar: 'RK',
  },
];

function StarRow({
  count,
  setRating,
}: {
  count: number;
  setRating?: (value: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          onClick={() => setRating?.(i + 1)}
          className={`cursor-pointer transition ${
            i < count
              ? 'fill-[#FF7F50] text-[#FF7F50]'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem('goa_reviews');

    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(defaultReviews);
    }
  }, []);

  // Add review
  const addReview = () => {
    if (!name || !text) return;

    const newReview: Review = {
      name,
      country,
      text,
      rating,
      avatar: name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
    };

    const updatedReviews = [newReview, ...reviews];

    setReviews(updatedReviews);

    localStorage.setItem(
      'goa_reviews',
      JSON.stringify(updatedReviews)
    );

    // Reset form
    setName('');
    setCountry('');
    setText('');
    setRating(5);
  };

  // Average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, item) => acc + item.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
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

          {/* Average Rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <StarRow count={Math.round(Number(averageRating))} />

            <span className="font-semibold text-gray-800">
              {averageRating} / 5
            </span>

            <span className="text-gray-500 text-sm">
              ({reviews.length} Reviews)
            </span>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 mb-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Leave a Review
          </h3>

          <div className="grid gap-4">

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 rounded-xl p-3 outline-none focus:border-[#0077B6]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Country / City"
                className="border border-gray-200 rounded-xl p-3 outline-none focus:border-[#0077B6]"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <textarea
              rows={5}
              placeholder="Share your experience..."
              className="border border-gray-200 rounded-xl p-3 outline-none focus:border-[#0077B6]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {/* Rating Selector */}
            <div>
              <p className="font-medium text-gray-700 mb-2">
                Your Rating
              </p>

              <StarRow count={rating} setRating={setRating} />
            </div>

            <button
              onClick={addReview}
              className="bg-[#0077B6] hover:bg-[#005f8e] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map(({ name, country, rating, text, avatar }, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote
                className="absolute top-5 right-5 text-[#0077B6]/10"
                size={42}
              />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0077B6] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {avatar}
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    {name}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {country}
                  </p>
                </div>

                <div className="ml-auto">
                  <StarRow count={rating} />
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}