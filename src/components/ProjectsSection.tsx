import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import foodDistribution from '@/assets/food-distribution.jpg';
import medicalTreatment from '@/assets/medical-treatment.jpg';

interface ProjectsSectionProps {
  onProjectClick: (project: string) => void;
  onDonateClick: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick, onDonateClick }) => {
  const ongoingProjects = [
    {
      id: 'medical-treatment',
      title: 'Free Medical Treatment',
      description: 'Providing comprehensive healthcare services to underprivileged communities across Pakistan.',
      image: medicalTreatment,
      category: 'Healthcare',
      beneficiaries: '100K+',
      location: 'Nationwide',
      status: 'Active',
      progress: 85,
      fundingGoal: 'PKR 50,00,000',
      raised: 'PKR 42,50,000'
    },
    {
      id: 'daily-ration',
      title: 'Daily Ration Distribution',
      description: 'Ensuring no one sleeps hungry through our comprehensive food distribution network.',
      image: foodDistribution,
      category: 'Food Security',
      beneficiaries: '50K+',
      location: 'Major Cities',
      status: 'Expanding',
      progress: 92,
      fundingGoal: 'PKR 30,00,000',
      raised: 'PKR 27,60,000'
    },
    {
      id: 'flood-relief',
      title: 'Flood Relief Operations',
      description: 'Emergency relief and rehabilitation support for flood-affected families.',
      image: foodDistribution, // Using as placeholder
      category: 'Emergency Relief',
      beneficiaries: '25K+',
      location: 'Sindh & Punjab',
      status: 'Urgent',
      progress: 65,
      fundingGoal: 'PKR 75,00,000',
      raised: 'PKR 48,75,000'
    }
  ];

  const otherProjects = [
    {
      id: 'hepatitis',
      title: 'Hepatitis Prevention',
      category: 'Healthcare',
      beneficiaries: '15K+'
    },
    {
      id: 'housing',
      title: 'Saylani Housing Society',
      category: 'Housing',
      beneficiaries: '5K+'
    },
    {
      id: 'it-literacy',
      title: 'IT Literacy Program',
      category: 'Education',
      beneficiaries: '20K+'
    },
    {
      id: 'tharparkar',
      title: 'Tharparkar Development',
      category: 'Rural Development',
      beneficiaries: '30K+'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Ongoing Projects */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Ongoing Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming lives through sustainable development programs and immediate relief efforts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                         transition-all duration-300 hover:scale-105 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => onProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Urgent' ? 'bg-red-500' : 
                      project.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 
                                   rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary 
                               transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{project.beneficiaries}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{project.location}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-primary">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full 
                                 transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Funding Info */}
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Raised</p>
                      <p className="font-semibold text-green-600">{project.raised}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Goal</p>
                      <p className="font-semibold">{project.fundingGoal}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDonateClick();
                    }}
                    className="w-full btn-hero group-hover:shadow-lg"
                  >
                    Support This Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-fadeIn">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other <span className="text-secondary">Initiatives</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Expanding our impact across various sectors for comprehensive community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-white to-muted/30 rounded-xl p-6 
                         hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer 
                         border border-border hover:border-primary/30"
                onClick={() => onProjectClick(project.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                       group-hover:translate-x-1 transition-all" />
                </div>
                
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary 
                             transition-colors">
                  {project.title}
                </h4>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{project.beneficiaries} beneficiaries</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={() => onProjectClick('all')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
