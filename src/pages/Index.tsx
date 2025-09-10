import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HospitalBanner from '@/components/HospitalBanner';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MediaSection from '@/components/MediaSection';
import NewsSection from '@/components/NewsSection';
import DonationModal from '@/components/DonationModal';

const Index = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedDonationCategory, setSelectedDonationCategory] = useState('general');

  // Listen for global donation events
  useEffect(() => {
    const handleDonationEvent = () => {
      setIsDonationModalOpen(true);
    };

    window.addEventListener('openDonation', handleDonationEvent);
    return () => window.removeEventListener('openDonation', handleDonationEvent);
  }, []);

  const handleDonateClick = (category: string = 'general') => {
    setSelectedDonationCategory(category);
    setIsDonationModalOpen(true);
  };

  const handleCategoryClick = (category: string) => {
    handleDonateClick(category);
  };

  const handleServiceClick = (service: string) => {
    // For now, open donation modal with appropriate category
    switch (service) {
      case 'medical':
        handleDonateClick('medical');
        break;
      case 'food':
        handleDonateClick('food');
        break;
      case 'education':
        handleDonateClick('education');
        break;
      case 'welfare':
        handleDonateClick('kifalat');
        break;
      case 'water':
        handleDonateClick('water');
        break;
      default:
        handleDonateClick('general');
    }
  };

  const handleProjectClick = (project: string) => {
    // Navigate to project details or open donation modal
    switch (project) {
      case 'medical-treatment':
        handleDonateClick('medical');
        break;
      case 'daily-ration':
        handleDonateClick('food');
        break;
      case 'flood-relief':
        handleDonateClick('general');
        break;
      default:
        console.log('View project:', project);
    }
  };

  const handleVideoClick = (videoId: string) => {
    // For demo purposes, just log the video click
    console.log('Play video:', videoId);
    // In a real implementation, you would open a video modal or navigate to video page
  };

  const handleNewsClick = (newsId: string) => {
    // For demo purposes, just log the news click
    console.log('Read news:', newsId);
    // In a real implementation, you would navigate to the news detail page
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          onDonateClick={() => handleDonateClick()}
          onCategoryClick={handleCategoryClick}
        />

        {/* Children's Hospital Banner */}
        <HospitalBanner 
          onDonateClick={() => handleDonateClick('hospital')}
        />

        {/* What We Are Doing - Services */}
        <ServicesSection 
          onServiceClick={handleServiceClick}
        />

        {/* Ongoing Projects */}
        <ProjectsSection 
          onProjectClick={handleProjectClick}
          onDonateClick={() => handleDonateClick()}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Media Updates */}
        <MediaSection 
          onVideoClick={handleVideoClick}
        />

        {/* News Section */}
        <NewsSection 
          onNewsClick={handleNewsClick}
        />
      </main>

      <Footer />

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        initialCategory={selectedDonationCategory}
      />
    </div>
  );
};

export default Index;
