import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDonateClick = () => {
    // This will trigger the donation modal
    const donateEvent = new CustomEvent('openDonation');
    window.dispatchEvent(donateEvent);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92-21-111-729-526</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@saylaniwelfare.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Emergency Hotline: 1166</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SW</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Saylani Welfare</h1>
                <p className="text-sm text-muted-foreground">Trust • Serve • Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link to="/media" className="text-foreground hover:text-primary transition-colors font-medium">
                Media
              </Link>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors font-medium">
                News
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Donate Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleDonateClick}
                className="btn-donate hidden sm:flex"
              >
                Donate Now
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/projects" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link 
                  to="/media" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Media
                </Link>
                <Link 
                  to="/news" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Button 
                  onClick={() => {
                    handleDonateClick();
                    toggleMenu();
                  }}
                  className="btn-donate w-full sm:hidden"
                >
                  Donate Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;