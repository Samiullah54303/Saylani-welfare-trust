import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Smartphone,
  CreditCard,
  Banknote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our latest updates and news.",
    });
    
    setEmail('');
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/saylaniwelfare', color: 'hover:text-blue-500' },
    { icon: Twitter, url: 'https://twitter.com/saylaniwelfare', color: 'hover:text-sky-500' },
    { icon: Instagram, url: 'https://instagram.com/saylaniwelfare', color: 'hover:text-pink-500' },
    { icon: Youtube, url: 'https://youtube.com/saylaniwelfare', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Media Updates', path: '/media' },
    { name: 'Latest News', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Volunteer', path: '/volunteer' }
  ];

  const services = [
    'Healthcare Services',
    'Educational Programs', 
    'Food Distribution',
    'Family Support',
    'Emergency Relief',
    'Clean Water Projects'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="section-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected with Saylani</h3>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to receive our latest updates, news, and ways to help our community
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-900 border-0 flex-1"
              required
            />
            <Button type="submit" className="btn-secondary px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Saylani Welfare</h3>
                  <p className="text-sm text-gray-400">Trust • Serve • Care</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Saylani Welfare Trust is dedicated to serving humanity with compassion, 
                providing healthcare, education, and welfare services to those in need across Pakistan.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                                transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary-light">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-accent-light transition-colors duration-300 
                               hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary-light">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary-light">Contact Info</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Plot No. A-25, Baitul Mukaram Masjid,<br />
                      Sector 11-B, North Karachi, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">+92-21-111-729-526</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">info@saylaniwelfare.com</span>
                </div>
              </div>

              {/* Download Apps */}
              <div className="space-y-3">
                <h5 className="text-lg font-medium">Download Our App</h5>
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 
                                   px-4 py-2 rounded-lg transition-colors">
                    <Smartphone className="w-5 h-5" />
                    <span className="text-sm">Google Play</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 
                                   px-4 py-2 rounded-lg transition-colors">
                    <Smartphone className="w-5 h-5" />
                    <span className="text-sm">App Store</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Saylani Welfare Trust. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Registered Charity Organization - Serving Humanity Since 1999
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex space-x-3">
                <CreditCard className="w-8 h-8 text-gray-400" />
                <Banknote className="w-8 h-8 text-gray-400" />
                <Smartphone className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;