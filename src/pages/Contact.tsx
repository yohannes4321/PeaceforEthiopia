import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@peaceforethiopia.org',
      description: 'For general inquiries and partnership opportunities',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+251 11 XXX XXXX',
      description: 'Monday to Friday, 8:00 AM - 6:00 PM',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bole Road, Addis Ababa, Ethiopia',
      description: 'Our main office and resource center',
    },
  ];

  const offices = [
    {
      city: 'Addis Ababa',
      address: 'Bole Road, Kirkos Sub-City',
      phone: '+251 11 XXX XXXX',
      email: 'addis@peaceforethiopia.org',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      city: 'Bahir Dar',
      address: 'Tana Road, Bahir Dar',
      phone: '+251 58 XXX XXXX',
      email: 'bahirdar@peaceforethiopia.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    },
    {
      city: 'Dire Dawa',
      address: 'Ras Makonnen Avenue',
      phone: '+251 25 XXX XXXX',
      email: 'diredawa@peaceforethiopia.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Whether you want to get involved, need our services, 
              or have questions about our work, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{info.title}</h3>
                <p className="text-lg text-gray-800 mb-1">{info.content}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Inquiry *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="mediation">Mediation Services</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="media">Media & Press</option>
                      <option value="donation">Donation & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Offices</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Bole Road, Addis Ababa</p>
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{office.city}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-yellow-600" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-yellow-600" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-yellow-600" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency Peace Mediation</h2>
            <p className="text-lg text-red-800 mb-6">
              For urgent conflict situations requiring immediate mediation, contact our emergency response team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+251911XXXXXX"
                className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +251 911 XXX XXX
              </a>
              <a
                href="mailto:emergency@peaceforethiopia.org"
                className="bg-red-100 text-red-900 px-6 py-3 rounded-md font-medium hover:bg-red-200 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;