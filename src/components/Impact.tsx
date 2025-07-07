import React from 'react';
import { Handshake, Users, Camera, Award } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      icon: Handshake,
      number: '500+',
      label: 'Peace Talks Facilitated',
      description: 'Successful mediation sessions bringing communities together',
    },
    {
      icon: Users,
      number: '12',
      label: 'Regional Groups United',
      description: 'Different ethnic and religious groups working together',
    },
    {
      icon: Camera,
      number: '10,000+',
      label: 'Moments of Hope Captured',
      description: 'Documented stories of reconciliation and unity',
    },
    {
      icon: Award,
      number: '25',
      label: 'Peace Agreements Signed',
      description: 'Formal accords establishing lasting peace',
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Impact Across Ethiopia
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Every day, we work tirelessly to build bridges, heal wounds, and create lasting peace 
            in communities across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mb-4 mx-auto">
                <stat.icon className="h-8 w-8 text-blue-900" />
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-200">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;