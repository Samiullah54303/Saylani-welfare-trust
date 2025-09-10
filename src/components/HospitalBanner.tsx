import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Clock } from 'lucide-react';
import hospitalBg from '@/assets/hospital-banner.jpg';

interface HospitalBannerProps {
  onDonateClick: () => void;
}

const HospitalBanner: React.FC<HospitalBannerProps> = ({ onDonateClick }) => {
  const hospitalStats = [
    { icon: Users, value: '10K+', label: 'Children Treated' },
    { icon: Award, value: '50+', label: 'Specialist Doctors' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' },
    { icon: Heart, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${hospitalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="animate-slideInRight">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm 
                            rounded-full px-4 py-2 mb-6">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-semibold">Healthcare Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Saylani Children's
                <br />
                <span className="text-accent-light">Hospital</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-light">
                A New Era of Child Care
              </h3>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                State-of-the-art pediatric healthcare facility providing world-class medical 
                treatment to children, regardless of their family's financial situation. 
                Every child deserves quality healthcare.
              </p>
              
              <Button
                onClick={onDonateClick}
                size="lg"
                className="btn-donate text-xl px-12 py-4 h-auto"
              >
                <Heart className="w-6 h-6 mr-2" />
                Support Children's Hospital
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="animate-slideUp">
            <div className="grid grid-cols-2 gap-6">
              {hospitalStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center 
                             border border-white/20 hover:bg-white/20 transition-all 
                             duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full 
                                  flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Feature Cards */}
            <div className="mt-8 space-y-4">
              {[
                'Advanced NICU & PICU Units',
                'Pediatric Surgery & Emergency Care',
                'Free Treatment for Underprivileged'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm 
                           rounded-lg p-4 border border-white/20"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold text-white mb-4">
              Help Us Save More Children's Lives
            </h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Your donation helps us provide free medical care, advanced treatments, 
              and hope to families who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onDonateClick}
                className="btn-donate"
              >
                Donate for Hospital
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HospitalBanner;