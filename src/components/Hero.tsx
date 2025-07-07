import React from 'react';
import { Play, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="..\..\public\1.jpg"
          alt="Peace gathering in Ethiopia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
         
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Peace for Ethiopia
            </h1>
<br/>
<br/>
<br/>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                   ሰላም ለኢትዮጵያ
            </h1>
          
          </div>
        </div>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Building Unity, Healing a Nation, Inspiring a Generation
        </p>
       
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white opacity-50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;