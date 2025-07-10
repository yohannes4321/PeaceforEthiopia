import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Tedros Adhanom Ghebreyesus',
      role: 'Director-General, World Health Organization',
      quote: 'Peace for Ethiopia has shown remarkable dedication to healing our nation. Their work in bringing communities together is truly inspiring.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Bethlehem Tilahun Alemu',
      role: 'Social Entrepreneur & Founder of SoleRebels',
      quote: 'The peace talks facilitated by this organization have transformed our community. We now work together where we once stood divided.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Ato Girma Wolde-Giorgis',
      role: 'Former President of Ethiopia',
      quote: 'Unity is our strength, and Peace for Ethiopia embodies this truth. Their commitment to dialogue and reconciliation gives me hope.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sister Yeshi Beyene',
      role: 'Community Leader, Gambella',
      quote: 'After years of conflict, we found peace through their mediation. Our children now play together, and our families share meals.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Voices of Peace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from community leaders, international figures, and those whose lives 
            have been touched by our peace-building efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-yellow-500 opacity-50" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-blue-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join the Growing Movement
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Together, we are building a more peaceful Ethiopia. Add your voice to thousands 
              of others who believe in the power of unity and dialogue.
            </p>
            <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;