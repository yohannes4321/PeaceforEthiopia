import React, { useState } from 'react';
import { Send, Users, MessageCircle, Calendar } from 'lucide-react';

const JoinMovement: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ways = [
    {
      icon: Users,
      title: 'Community Organizer',
      description: 'Help organize peace events and dialogues in your community',
    },
    {
      icon: MessageCircle,
      title: 'Peace Mediator',
      description: 'Train to become a certified mediator for conflict resolution',
    },
    {
      icon: Calendar,
      title: 'Event Volunteer',
      description: 'Assist with logistics and coordination of peace events',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Join the Movement for Peace
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Want to contribute, speak, or organize an event? We're stronger together. 
            Join thousands of Ethiopians working toward a peaceful future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Ways to Get Involved */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Ways to Get Involved
            </h3>
            <div className="space-y-6">
              {ways.map((way, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <way.icon className="h-8 w-8 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {way.title}
                    </h4>
                    <p className="opacity-90">
                      {way.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">
              Get Started Today
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="+251 9XX XXX XXX"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="organizing">Organizing Events</option>
                  <option value="mediating">Mediating Conflicts</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="speaking">Speaking at Events</option>
                  <option value="donating">Making a Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent resize-none"
                  placeholder="Tell us about your background and how you'd like to contribute..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Join the Movement
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;