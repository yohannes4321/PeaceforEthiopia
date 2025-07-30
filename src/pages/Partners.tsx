import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'World Vision Ethiopia',
      logo: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1753893860/World_Vision_logo.svg_tcfgmm.png',
    },
    {
      name: 'African Union',
      logo: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1753893859/311627242_497386099095447_60147627929249644_n_gidceh.jpg',
    },
    {
      name: 'European Union',
      logo: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1753893859/images_gom2ti.png',
    },
    {
      name: 'ECC',
      logo: 'https://res.cloudinary.com/di5zfjqlt/image/upload/v1753893859/ecc-188x60_nokuyu.png',
    },
    
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to build lasting peace across Ethiopia
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  // Removed grayscale classes to display images in color
                  className="w-32 h-20 object-contain transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {partners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  // Removed grayscale classes to display images in color
                  className="w-32 h-20 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
