import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Users, Target, TrendingUp } from 'lucide-react';
import foodDistribution from '@/assets/food-distribution.jpg';
import medicalTreatment from '@/assets/medical-treatment.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Food Distribution', 'Education', 'Emergency Relief', 'Water Projects', 'Housing'];

  const projects = [
    {
      id: 1,
      title: 'Saylani Children\'s Hospital',
      description: 'State-of-the-art pediatric healthcare facility providing world-class medical treatment to children from all backgrounds.',
      image: medicalTreatment,
      category: 'Healthcare',
      status: 'Active',
      location: 'Karachi, Pakistan',
      beneficiaries: '10,000+',
      startDate: '2020-01-15',
      budget: 'PKR 500M',
      raised: 'PKR 450M',
      progress: 90,
      highlights: [
        'Advanced NICU and PICU facilities',
        '24/7 Emergency pediatric care',
        'Free treatment for underprivileged children',
        'Specialist doctors and modern equipment'
      ]
    },
    {
      id: 2,
      title: 'Daily Food Distribution Program',
      description: 'Comprehensive food security initiative ensuring no family goes to bed hungry through systematic meal distribution.',
      image: foodDistribution,
      category: 'Food Distribution',
      status: 'Active',
      location: 'Nationwide',
      beneficiaries: '50,000+',
      startDate: '2018-03-01',
      budget: 'PKR 200M',
      raised: 'PKR 185M',
      progress: 92,
      highlights: [
        '50,000 meals distributed daily',
        'Mobile food distribution units',
        'Special Ramadan and Eid programs',
        'Nutritious meal packages for families'
      ]
    },
    {
      id: 3,
      title: 'Educational Scholarship Initiative',
      description: 'Empowering the next generation through quality education and skill development programs for underprivileged students.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      category: 'Education',
      status: 'Expanding',
      location: 'Multiple Cities',
      beneficiaries: '25,000+',
      startDate: '2019-09-01',
      budget: 'PKR 150M',
      raised: 'PKR 120M',
      progress: 80,
      highlights: [
        'School fee support for 25,000+ students',
        'IT and vocational training programs',
        'Scholarship and merit programs',
        'Books and educational materials provided'
      ]
    },
    {
      id: 4,
      title: 'Clean Water Access Program',
      description: 'Installing solar-powered water filtration systems in rural communities to provide access to safe drinking water.',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      category: 'Water Projects',
      status: 'Active',
      location: 'Rural Areas',
      beneficiaries: '100,000+',
      startDate: '2021-06-01',
      budget: 'PKR 100M',
      raised: 'PKR 75M',
      progress: 75,
      highlights: [
        '200+ water filtration systems installed',
        'Solar-powered sustainable solutions',
        'Community training and maintenance',
        'Serving 100+ villages across Pakistan'
      ]
    },
    {
      id: 5,
      title: 'Emergency Flood Relief Operations',
      description: 'Rapid response program providing immediate relief and long-term rehabilitation for flood-affected communities.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      category: 'Emergency Relief',
      status: 'Urgent',
      location: 'Sindh & Punjab',
      beneficiaries: '25,000+',
      startDate: '2023-08-15',
      budget: 'PKR 75M',
      raised: 'PKR 48M',
      progress: 65,
      highlights: [
        'Mobile medical units deployed',
        'Emergency shelter and food supplies',
        'Clean water and sanitation facilities',
        'Rehabilitation and reconstruction support'
      ]
    },
    {
      id: 6,
      title: 'Saylani Housing Society',
      description: 'Affordable housing project providing dignified living spaces for low-income families with modern amenities.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      category: 'Housing',
      status: 'Under Construction',
      location: 'Karachi',
      beneficiaries: '5,000+',
      startDate: '2022-01-01',
      budget: 'PKR 2B',
      raised: 'PKR 1.2B',
      progress: 60,
      highlights: [
        '2,000 affordable housing units',
        'Modern infrastructure and facilities',
        'Mosque, school, and healthcare center',
        'Easy installment payment plans'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const formatCurrency = (amount: string) => {
    return amount;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforming communities through sustainable development initiatives, 
              emergency relief operations, and long-term welfare programs across Pakistan.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'border-primary/30 text-primary hover:bg-primary/10'
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                           transition-all duration-300 hover:scale-105 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`${
                          project.status === 'Urgent' ? 'bg-red-500' : 
                          project.status === 'Active' ? 'bg-green-500' : 
                          project.status === 'Expanding' ? 'bg-blue-500' : 'bg-orange-500'
                        } text-white font-semibold`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Progress Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex justify-between items-center text-white text-sm mb-2">
                        <span>Funding Progress</span>
                        <span className="font-bold">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary 
                                 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Beneficiaries</p>
                          <p className="font-semibold">{project.beneficiaries}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="font-semibold">{project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Started</p>
                          <p className="font-semibold">{formatDate(project.startDate)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <p className="font-semibold">{formatCurrency(project.budget)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Funding Info */}
                    <div className="bg-muted/30 rounded-lg p-4 mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Raised</span>
                        <span className="font-semibold text-green-600">{formatCurrency(project.raised)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Target</span>
                        <span className="font-semibold">{formatCurrency(project.budget)}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button className="flex-1 btn-hero">
                        Support Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in our mission to transform lives and build stronger communities 
              across Pakistan through your generous support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-donate">
                Start Donating Today
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;