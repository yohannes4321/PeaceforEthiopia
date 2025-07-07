import React from 'react';
import { Handshake, Users, GraduationCap, MessageSquare, Heart, Globe } from 'lucide-react';

const Work: React.FC = () => {
  const services = [
    {
      icon: Handshake,
      title: 'Dispute Mediation',
      description: 'Professional mediation services for community conflicts, land disputes, and inter-group tensions.',
      features: ['Trained mediators', 'Cultural sensitivity', 'Lasting agreements', 'Follow-up support'],
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Resolved 89% of mediated disputes with lasting peace agreements.',
    },
    {
      icon: MessageSquare,
      title: 'Community Dialogue Workshops',
      description: 'Facilitated discussions bringing together diverse community members to address local issues.',
      features: ['Safe spaces', 'Structured dialogue', 'Action planning', 'Community ownership'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Conducted 200+ workshops reaching over 15,000 community members.',
    },
    {
      icon: GraduationCap,
      title: 'Peacebuilding Education',
      description: 'Educational programs teaching conflict resolution skills and peace-building techniques.',
      features: ['Curriculum development', 'Train-the-trainer', 'Certification programs', 'Online resources'],
      image: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Trained over 1,000 community leaders in peace-building skills.',
    },
    {
      icon: Globe,
      title: 'Inter-Regional Peace Talks',
      description: 'Large-scale peace conferences bringing together representatives from different regions.',
      features: ['Multi-stakeholder approach', 'Regional representation', 'Policy recommendations', 'Media coverage'],
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Facilitated 12 major regional peace conferences with government participation.',
    },
    {
      icon: Users,
      title: 'Youth Engagement',
      description: 'Programs specifically designed to involve young people in peace processes and leadership.',
      features: ['Leadership training', 'Peer mediation', 'Youth councils', 'Mentorship programs'],
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Established 25 youth peace clubs across Ethiopia.',
    },
    {
      icon: Heart,
      title: 'Women & Peace Programs',
      description: 'Empowering women as peace ambassadors and leaders in conflict resolution.',
      features: ['Women\'s circles', 'Leadership development', 'Economic empowerment', 'Network building'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      successStory: 'Trained 500+ women as certified peace mediators.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Mediation Sessions', description: 'Successful conflict resolution cases' },
    { number: '15,000+', label: 'People Reached', description: 'Direct beneficiaries of our programs' },
    { number: '50+', label: 'Communities Served', description: 'Across all regions of Ethiopia' },
    { number: '1,000+', label: 'Leaders Trained', description: 'Certified peace-building practitioners' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive peace-building services designed to create lasting change in communities 
              across Ethiopia through dialogue, mediation, and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of peace-building services tailored to meet the 
              unique needs of Ethiopian communities.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Success Story:</h4>
                    <p className="text-gray-700">{service.successStory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures effective and sustainable peace-building outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We conduct thorough analysis of conflicts and community needs to understand root causes.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Develop customized intervention strategies with stakeholder input and cultural considerations.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute peace-building activities with trained facilitators and community engagement.',
              },
              {
                step: '04',
                title: 'Follow-up',
                description: 'Monitor progress, provide ongoing support, and ensure sustainability of peace agreements.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Peace in Your Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn how our peace-building services can help create lasting change in your community.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Work;