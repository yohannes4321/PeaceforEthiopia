import React from 'react';
import { Globe, Users, Heart, Award, Handshake, Target } from 'lucide-react';

const Partners: React.FC = () => {
  const internationalPartners = [
    {
      name: 'United Nations Peacebuilding Commission',
      logo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Supporting our peace mediation training programs and regional conferences.',
      partnership: 'Strategic Partner',
    },
    {
      name: 'African Union Peace & Security',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Collaborating on conflict prevention and resolution initiatives.',
      partnership: 'Implementation Partner',
    },
    {
      name: 'European Union',
      logo: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Funding our youth engagement and women empowerment programs.',
      partnership: 'Funding Partner',
    },
    {
      name: 'USAID',
      logo: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Supporting community-based conflict resolution programs.',
      partnership: 'Technical Partner',
    },
  ];

  const localPartners = [
    {
      name: 'Ethiopian Women Lawyers Association',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Partnering on women\'s rights and peace advocacy initiatives.',
      partnership: 'Local Partner',
    },
    {
      name: 'Ethiopian Youth Network',
      logo: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Collaborating on youth leadership and peace education programs.',
      partnership: 'Youth Partner',
    },
    {
      name: 'Inter-Religious Council of Ethiopia',
      logo: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Working together on interfaith dialogue and reconciliation.',
      partnership: 'Faith Partner',
    },
    {
      name: 'Ethiopian Community Organizations',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Grassroots partnerships for community-based peace building.',
      partnership: 'Community Partner',
    },
  ];

  const supporters = [
    {
      name: 'Dr. Tedros Adhanom Ghebreyesus',
      role: 'Director-General, WHO',
      support: 'Advisory Board Member',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Bethlehem Tilahun Alemu',
      role: 'Social Entrepreneur',
      support: 'Peace Ambassador',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Prof. Mehari Taddele Maru',
      role: 'Institute for Security Studies',
      support: 'Research Advisor',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Hanan Abdullahi',
      role: 'Women\'s Rights Activist',
      support: 'Program Advisor',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const partnershipTypes = [
    {
      icon: Globe,
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations with international organizations for policy and program development.',
      count: '8 Partners',
    },
    {
      icon: Users,
      title: 'Implementation Partners',
      description: 'Organizations that help us deliver programs directly to communities across Ethiopia.',
      count: '15 Partners',
    },
    {
      icon: Heart,
      title: 'Funding Partners',
      description: 'Donors and foundations that provide financial support for our peace-building initiatives.',
      count: '12 Partners',
    },
    {
      icon: Award,
      title: 'Advisory Partners',
      description: 'Experts and thought leaders who provide strategic guidance and expertise.',
      count: '25 Advisors',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Partners & Supporters</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building peace requires collaboration. We work with local communities, international organizations, 
              and dedicated individuals who share our vision for a peaceful Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Types of Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build diverse partnerships that strengthen our capacity to create lasting peace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-yellow-600 font-semibold">{type.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">International Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global organizations that support our mission through funding, expertise, and strategic guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internationalPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{partner.name}</h3>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.partnership}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Local Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ethiopian organizations and community groups that work with us to implement peace-building programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{partner.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.partnership}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Supporters */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Supporters</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Distinguished individuals who lend their voice, expertise, and influence to our peace-building mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supporters.map((supporter, index) => (
              <div key={index} className="text-center bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
                <img
                  src={supporter.image}
                  alt={supporter.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{supporter.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{supporter.role}</p>
                <span className="inline-block bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                  {supporter.support}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Partnership Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we achieve more than any single organization could accomplish alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expanded Reach</h3>
              <p className="text-gray-600">
                Our partnerships allow us to reach more communities and implement programs at scale across Ethiopia.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Shared Expertise</h3>
              <p className="text-gray-600">
                Combining knowledge and experience from diverse partners enhances the effectiveness of our programs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sustainable Impact</h3>
              <p className="text-gray-600">
                Strong partnerships ensure our peace-building efforts continue and grow over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Partnership */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Become a Partner</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in building a more peaceful Ethiopia. Whether you're an organization, foundation, 
            or individual, there are many ways to partner with us.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-yellow-400 transition-colors duration-200">
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;