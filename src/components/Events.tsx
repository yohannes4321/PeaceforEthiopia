import React from 'react';
import { Calendar, MapPin, Play } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Unity Rally in Addis Ababa',
      speaker: 'Dr. Mehari Taddele Maru',
      date: 'March 15, 2024',
      location: 'Meskel Square, Addis Ababa',
      quote: 'Peace is not the absence of conflict, but the presence of justice and understanding.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Women for Peace Conference',
      speaker: 'Hanan Abdullahi',
      date: 'February 28, 2024',
      location: 'Dire Dawa Convention Center',
      quote: 'When women lead in peace, communities heal and nations prosper.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Youth Peace Summit',
      speaker: 'Yohannes Kassahun',
      date: 'January 20, 2024',
      location: 'Bahir Dar University',
      quote: 'The youth are not just the leaders of tomorrow, but the peacemakers of today.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Latest Speeches & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful voices and inspiring moments from our recent peace-building 
            events across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-yellow-500 text-blue-900 p-3 rounded-full hover:bg-yellow-400 transition-colors duration-200">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  Speaker: <span className="font-medium">{event.speaker}</span>
                </p>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{event.date}</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                
                <blockquote className="text-gray-700 italic mb-4 border-l-4 border-yellow-500 pl-4">
                  "{event.quote}"
                </blockquote>
                
                <button className="text-blue-900 font-medium hover:text-yellow-600 transition-colors duration-200">
                  Watch Full Speech →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;