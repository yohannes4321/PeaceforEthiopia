import React from 'react';
import { Shield, Megaphone, Leaf, Users, Search, FileText, GraduationCap, Heart, BookOpen } from 'lucide-react';

const AreasOfWork: React.FC = () => {
  const areas = [
    {
      icon: Shield,
      title: 'Peace & Reconciliation',
      description: 'Reconciliation is increasingly seen as being vital for sustainable peace. But how do we know when reconciliation is possible and how to connect grassroots initiatives.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Megaphone,
      title: 'Media & Peace Advocacy',
      description: 'In recent years, arts-based approaches to the transformation of conflict have been gaining attention and prominence, from across a range of disciplines.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Leaf,
      title: 'Environmental Peace',
      description: 'Environmental peacemaking brings people in conflict together to work collaboratively on shared problems, build confidence and reduce political tensions & encroachments.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Users,
      title: 'Youth & Women Empowerment',
      description: 'This Project aims to contribute towards the reduction of unemployment, among the youth and women, through the creation of employment opportunities.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Search,
      title: 'Research',
      description: 'Research methods are specific procedures for collecting and analyzing data. Developing your research methods is an integral part of your research design. When planning.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: FileText,
      title: 'Conflict Assessment',
      description: 'Conflict assessment is the first stage in the process of conflict transformation. It involves gathering information. Participants to gather disparate third parties of both analyze.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: GraduationCap,
      title: 'Training & Capacity Development',
      description: 'Capacity development encompasses a whole range of activities designed to empower individuals and institutions (including the analysis of policy contexts and exercises.',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Heart,
      title: 'Humanity Relief',
      description: 'Humanity for Relief and Development is committed to improving the lives of individuals and families affected by their other causes through a range of sustainable projects.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: BookOpen,
      title: 'Documentation & Replication',
      description: 'The aim of replication is that at the end of the process, all active documents in the source database are also in the destination database and get documents.',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Areas Of Work</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to peace-building encompasses multiple areas of expertise 
            to create lasting change in communities across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                <area.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {area.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                View More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;