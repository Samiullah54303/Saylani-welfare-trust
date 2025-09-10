import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Stethoscope, 
  HandHeart, 
  Droplets, 
  GraduationCap, 
  Utensils,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onServiceClick: (service: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const services = [
    {
      id: 'welfare',
      title: 'Welfare',
      description: 'Comprehensive social welfare programs for families in need',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      stats: '15K+ Families'
    },
    {
      id: 'medical',
      title: 'Medical',
      description: 'Free healthcare services and medical treatment programs',
      icon: Stethoscope,
      color: 'from-blue-500 to-cyan-500',
      stats: '100K+ Patients'
    },
    {
      id: 'sadqah',
      title: 'Online Sadqah',
      description: 'Digital platform for easy charitable contributions',
      icon: HandHeart,
      color: 'from-green-500 to-emerald-500',
      stats: '50K+ Donors'
    },
    {
      id: 'water',
      title: 'Clean Water',
      description: 'Providing access to clean drinking water in remote areas',
      icon: Droplets,
      color: 'from-cyan-500 to-blue-500',
      stats: '200+ Wells'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Quality education and skill development programs',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
      stats: '25K+ Students'
    },
    {
      id: 'food',
      title: 'Food',
      description: 'Daily meal programs and food distribution initiatives',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      stats: '50K+ Daily Meals'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Are <span className="text-primary">Doing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Saylani Welfare Trust operates comprehensive programs across multiple sectors, 
            touching lives and creating positive impact in communities throughout Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 hover:scale-105 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onServiceClick(service.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                               group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl 
                               flex items-center justify-center mb-6 group-hover:scale-110 
                               transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary 
                             transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary bg-primary/10 
                                 px-3 py-1 rounded-full">
                    {service.stats}
                  </span>
                  
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                       group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary 
                               rounded-2xl transition-colors duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeIn">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to make a difference? Join us in our mission to serve humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onServiceClick('volunteer')}
              className="btn-hero"
            >
              Become a Volunteer
            </Button>
            <Button 
              onClick={() => onServiceClick('partner')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;