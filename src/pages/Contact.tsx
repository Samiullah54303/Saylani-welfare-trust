import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '', email: '', phone: '', subject: '', message: '', newsletter: false
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office Address',
      details: [
        'Plot No. A-25, Baitul Mukaram Masjid',
        'Sector 11-B, North Karachi',
        'Karachi, Pakistan - 75850'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Line: +92-21-111-729-526',
        'Emergency Hotline: 1166',
        'WhatsApp: +92-300-1234567'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General Info: info@saylaniwelfare.com',
        'Donations: donate@saylaniwelfare.com',
        'Partnerships: partners@saylaniwelfare.com'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed (Emergency only)'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/saylaniwelfare', color: 'text-blue-600' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/saylaniwelfare', color: 'text-sky-500' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/saylaniwelfare', color: 'text-pink-500' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/saylaniwelfare', color: 'text-red-600' }
  ];

  const officeLocations = [
    {
      city: 'Karachi',
      address: 'Plot A-25, Sector 11-B, North Karachi',
      phone: '+92-21-111-729-526',
      isMain: true
    },
    {
      city: 'Lahore',
      address: 'Main Boulevard, Gulberg III',
      phone: '+92-42-111-729-526',
      isMain: false
    },
    {
      city: 'Islamabad',
      address: 'Blue Area, F-7 Sector',
      phone: '+92-51-111-729-526',
      isMain: false
    },
    {
      city: 'Faisalabad',
      address: 'Civil Lines, Ghulam Muhammad Abad',
      phone: '+92-41-111-729-526',
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team for donations, partnerships, volunteering opportunities, 
              or any questions about our welfare programs.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div className="animate-slideUp">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full 
                                   flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                      <p className="text-muted-foreground">We'd love to hear from you</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                        className="rounded border-border"
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for updates
                      </Label>
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="animate-slideInRight space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-border 
                                               hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full 
                                       flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Office Locations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Visit us at any of our offices across Pakistan for direct assistance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officeLocations.map((office, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border 
                                           ${office.isMain ? 'border-primary' : 'border-border'}
                                           hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  {office.isMain && (
                    <div className="mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full 
                                     text-sm font-medium">
                        Head Office
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">{office.city}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground text-sm">{office.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media & Quick Links */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Social Media */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Follow Us on <span className="text-primary">Social Media</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Stay connected and get the latest updates about our programs and impact.
                </p>
                
                <div className="flex justify-center md:justify-start space-x-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 
                                  ${social.color} group`}
                        aria-label={social.label}
                      >
                        <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Contact</h3>
                <p className="text-muted-foreground mb-6">
                  For urgent assistance or emergency situations, call our 24/7 hotline.
                </p>
                
                <div className="text-3xl font-bold text-red-500 mb-6">1166</div>
                
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Hotline
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;