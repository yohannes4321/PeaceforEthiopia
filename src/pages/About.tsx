import React from 'react';
import { Target, Eye, Calendar, Users, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Dr. Alemayehu Tekle',
      role: 'Founder & Executive Director',
      bio: 'A peace-building expert with over 20 years of experience in conflict resolution and community mediation.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Seble Assefa',
      role: 'Program Director',
      bio: 'Former diplomat and international relations specialist focused on grassroots peace initiatives.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Dawit Haile',
      role: 'Community Outreach Manager',
      bio: 'Community organizer with extensive experience in rural and urban peace-building programs.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Meron Tadesse',
      role: 'Youth Engagement Coordinator',
      bio: 'Youth activist and educator passionate about involving young people in peace processes.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const timeline = [
    {
      year: '2020',
      event: 'Foundation Established',
      description: 'Peace for Ethiopia was founded with a vision to heal divisions and build unity.',
    },
    {
      year: '2021',
      event: 'First Regional Conference',
      description: 'Successfully organized our first inter-regional peace conference in Addis Ababa.',
    },
    {
      year: '2022',
      event: 'Mediation Training Program',
      description: 'Launched comprehensive mediation training for community leaders across Ethiopia.',
    },
    {
      year: '2023',
      event: 'Women for Peace Initiative',
      description: 'Established dedicated program empowering women as peace ambassadors.',
    },
    {
      year: '2024',
      event: 'National Unity Campaign',
      description: 'Launched nationwide campaign reaching over 50 communities across all regions.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Peace for Ethiopia</h1>
            <p className="text-xl max-w-4xl mx-auto text-justify">
              PEACE FOR ETHIOPIA (PfE), is a non-governmental, non-partisan, non-political, nonprofit, impartial, voluntary organization operating in Ethiopia. PEACEFORETHIOPIA (PfE) was established in early June 2020 and is registered as a non-Governmental Organization whose aims are to promote peaceful and secure societies and Good Governance.
              <br /><br />
              Peace for Ethiopia (PfE) endeavors to realize constructive personal, group, and political relationships across ethnic, religious, class, national, and racial boundaries. It aims to resolve injustice in nonviolent ways and to transform the structural conditions that generate deadly conflict.
              <br /><br />
              Peace for Ethiopia (PfE) engages in conflict prevention; conflict management; conflict resolution and transformation; and post-conflict reconciliation. It also strategically works over the long run and at all levels of society to establish and sustain relationships among people locally and regionally.
              <br /><br />
              Peace for Ethiopia’s (PfE) network includes people and groups “on the ground” (community and religious groups, grassroots organizations, etc.) with policymakers and powerbrokers (governments, faith-based organizations, national and international NGOs). Peace for Ethiopia (PfE) is established not only to resolve conflicts but to build societies, institutions, policies, and relationships that are better able to sustain peace and justice. It also strategically addresses issues of human rights, economic prosperity, and environmental sustainability as well as violence.
              <br /><br />
              Peace for Ethiopia (PfE) stretches across generations. While it engages immediate crises, Peace for Ethiopia (PfE) recognizes that peacemaking is a long-term vocation that requires the building of cross-group networks and alliances that will survive intermittent conflicts and create a platform for sustainable human development and security.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                To create sustainable peace by connecting people in conflict, facilitating dialogue,
                and uniting communities across Ethiopia through understanding and compassion.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                A peaceful Ethiopia driven by compassion, inclusion, and mutual respect where
                dialogue replaces conflict and communities build together.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Unity, compassion, integrity, and respect for all people regardless of ethnicity,
                religion, or background. We believe in the power of dialogue and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;