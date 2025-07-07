import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

const Vision: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Create sustainable peace by connecting people in conflict, facilitating dialogue, and uniting communities across Ethiopia.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'A peaceful Ethiopia driven by compassion, inclusion, and mutual respect where every voice is heard and valued.',
    },
    {
      icon: Globe,
      title: 'Our Impact',
      description: 'Building bridges between communities, mediating disputes, and fostering understanding through peaceful dialogue.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Vision for Ethiopia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in the power of dialogue, the strength of unity, and the hope that comes 
            from building bridges between communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 mx-auto">
                <value.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;