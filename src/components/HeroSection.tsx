import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Stethoscope, GraduationCap, Utensils, HandHeart } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  onDonateClick: () => void;
  onCategoryClick: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDonateClick, onCategoryClick }) => {
  const heroButtons = [
    { id: 'qurbani', label: 'Qurbani Support', icon: Heart, color: 'from-red-500 to-red-600' },
    { id: 'food', label: 'Daily Food', icon: Utensils, color: 'from-orange-500 to-orange-600' },
    { id: 'medical', label: 'Medical', icon: Stethoscope, color: 'from-blue-500 to-blue-600' },
    { id: 'kifalat', label: 'Family Kifalat', icon: Users, color: 'from-green-500 to-green-600' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'from-purple-500 to-purple-600' },
    { id: 'general', label: 'Quick Donate', icon: HandHeart, color: 'from-pink-500 to-pink-600' }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-shimmer">Serving Humanity</span>
              <br />
              <span className="text-accent-light">With Compassion</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Join Saylani Welfare Trust in our mission to serve humanity through healthcare, 
              education, food distribution, and comprehensive welfare programs across Pakistan.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="animate-slideUp mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
              {heroButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <button
                    key={button.id}
                    onClick={() => onCategoryClick(button.id)}
                    className={`bg-gradient-to-r ${button.color} text-white p-4 md:p-6 rounded-xl 
                              hover:scale-105 transform transition-all duration-300 
                              hover:shadow-2xl group animate-fadeIn`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-semibold">
                      {button.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Donate Button */}
            <Button
              onClick={onDonateClick}
              size="lg"
              className="btn-donate text-xl px-12 py-4 h-auto animate-pulse hover:animate-none"
            >
              Donate Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slideInRight">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-2">50K+</div>
                <div className="text-sm md:text-base opacity-90">Daily Meals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-secondary-light mb-2">15K+</div>
                <div className="text-sm md:text-base opacity-90">Families Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-primary-light mb-2">25K+</div>
                <div className="text-sm md:text-base opacity-90">Students Educated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent-light mb-2">100K+</div>
                <div className="text-sm md:text-base opacity-90">Lives Touched</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;