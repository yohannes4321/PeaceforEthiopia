import React from 'react';
import { Play, Clock, Calendar, User } from 'lucide-react';

const Documentary: React.FC = () => {
  const documentaries = [
    {
      title: 'Rebuilding Trust in Tigray',
      duration: '23 mins',
      releaseDate: 'March 2024',
      director: 'Alemayehu Assefa',
      summary: 'This documentary explores the journey of healing and reconciliation in the Tigray region, showcasing how communities are coming together to rebuild trust and create lasting peace.',
      thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      title: 'Women Leading Peace',
      duration: '18 mins',
      releaseDate: 'February 2024',
      director: 'Hanan Molla',
      summary: 'Follow the inspiring stories of women peace leaders across Ethiopia as they work to mediate conflicts and build bridges between communities.',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      title: 'Youth for Unity',
      duration: '15 mins',
      releaseDate: 'January 2024',
      director: 'Dawit Tesfaye',
      summary: 'Young Ethiopians share their vision for a unified nation and demonstrate how they are actively working to promote peace and understanding among their peers.',
      thumbnail: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Dialogue Across Divides',
      duration: '32 mins',
      releaseDate: 'December 2023',
      director: 'Meron Kidane',
      summary: 'A comprehensive look at our mediation processes, featuring real stories of communities that have overcome deep-rooted conflicts through facilitated dialogue.',
      thumbnail: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Faith and Reconciliation',
      duration: '21 mins',
      releaseDate: 'November 2023',
      director: 'Tadesse Bekele',
      summary: 'Religious leaders from different faiths come together to discuss how shared values of peace and compassion can overcome religious and ethnic divisions.',
      thumbnail: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Community Healing Circles',
      duration: '27 mins',
      releaseDate: 'October 2023',
      director: 'Selamawit Haile',
      summary: 'Discover the traditional and modern approaches to healing trauma and building community resilience through our grassroots peace-building initiatives.',
      thumbnail: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
  ];

  const featuredDocs = documentaries.filter(doc => doc.featured);
  const regularDocs = documentaries.filter(doc => !doc.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Documentary Collection</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Powerful stories of peace, healing, and unity from communities across Ethiopia. 
              These documentaries showcase the transformative power of dialogue and reconciliation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Documentaries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Films</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful documentaries that have inspired change and healing across Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {featuredDocs.map((doc, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <button className="bg-yellow-500 text-blue-900 p-4 rounded-full hover:bg-yellow-400 transition-colors duration-200 transform hover:scale-105">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{doc.title}</h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{doc.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{doc.releaseDate}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{doc.director}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{doc.summary}</p>
                  
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Documentaries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Complete Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our entire library of peace-building documentaries showcasing stories from every region of Ethiopia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularDocs.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={doc.thumbnail}
                    alt={doc.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-yellow-500 text-blue-900 p-3 rounded-full hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105">
                      <Play className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{doc.title}</h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{doc.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{doc.releaseDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {doc.summary.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <User className="h-4 w-4 inline mr-1" />
                      {doc.director}
                    </span>
                    <button className="text-blue-900 font-medium hover:text-yellow-600 transition-colors duration-200">
                      Watch →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">The Power of Stories</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              These documentaries have been screened at peace conferences, universities, and community centers 
              across Ethiopia, inspiring thousands to join the peace movement.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">150+</div>
                <div className="text-lg">Screenings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">50,000+</div>
                <div className="text-lg">Views</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">25</div>
                <div className="text-lg">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentary;