const photos = [
  {
    src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Goa beach sunset',
    label: 'Calangute Beach',
  },
  {
    src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Goa church heritage',
    label: 'Basilica of Bom Jesus',
  },
  {
    src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Baga beach Goa',
    label: 'Baga Beach',
  },
  {
    src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ocean waves Goa',
    label: 'Arabian Sea Views',
  },
  {
    src: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tropical Goa landscape',
    label: 'Tropical Trails',
  },
  {
    src: 'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Goa sunset golden hour',
    label: 'Sunset Views',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#FF7F50] font-semibold uppercase tracking-widest text-sm mb-3">
            Places You'll Visit
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Discover the Beauty of Goa
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From golden beaches to centuries-old churches — every corner of Goa tells a story.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map(({ src, alt, label }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm cursor-pointer"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 text-white font-semibold text-sm px-4 pb-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
