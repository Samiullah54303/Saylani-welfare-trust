import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      location: 'Karachi, Pakistan',
      role: 'Beneficiary Parent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'Saylani Welfare saved my daughter\'s life. When she needed urgent heart surgery, they provided everything free of cost. The care and compassion shown by their team is unmatched. May Allah bless this organization.',
      rating: 5,
      category: 'Medical Treatment'
    },
    {
      id: 2,
      name: 'Fatima Bibi',
      location: 'Lahore, Pakistan',
      role: 'Community Member',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c2ae?w=150&h=150&fit=crop&crop=face',
      text: 'For the past three years, our family has been receiving monthly rations from Saylani. During the toughest times, they stood by us. Their food distribution program is truly a blessing for families like ours.',
      rating: 5,
      category: 'Food Distribution'
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      location: 'Islamabad, Pakistan',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'Thanks to Saylani\'s education program, I was able to complete my IT certification. Now I have a good job and can support my family. Education truly is the key to breaking the cycle of poverty.',
      rating: 5,
      category: 'Education'
    },
    {
      id: 4,
      name: 'Amna Khan',
      location: 'Multan, Pakistan',
      role: 'Volunteer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'Volunteering with Saylani has been the most rewarding experience of my life. Seeing the smiles on children\'s faces when they receive help reminds me why this work is so important.',
      rating: 5,
      category: 'Volunteer Experience'
    },
    {
      id: 5,
      name: 'Dr. Tariq Mahmood',
      location: 'Faisalabad, Pakistan',
      role: 'Medical Partner',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      text: 'As a doctor partnering with Saylani, I\'ve witnessed their commitment to providing quality healthcare to everyone. Their children\'s hospital is equipped with the latest technology and staffed with caring professionals.',
      rating: 5,
      category: 'Healthcare Partnership'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What People <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from the people whose lives have been transformed through 
            Saylani Welfare Trust's programs and initiatives.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-3xl"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-primary to-secondary 
                          rounded-full flex items-center justify-center opacity-10">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Main Testimonial */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary 
                                px-4 py-2 rounded-full text-sm font-medium">
                    <span>{testimonials[currentTestimonial].category}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed 
                                       font-medium italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full 
                                  animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12">
                
                {/* Dots Indicator */}
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-primary scale-125'
                          : 'bg-muted hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex space-x-4">
                  <Button
                    onClick={prevTestimonial}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary 
                             hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={nextTestimonial}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary 
                             hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials
            .filter((_, index) => index !== currentTestimonial)
            .slice(0, 3)
            .map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 
                       hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentTestimonial(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-foreground">{testimonial.name}</h5>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;