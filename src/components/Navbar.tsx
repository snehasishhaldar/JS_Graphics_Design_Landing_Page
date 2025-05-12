import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import QuotePopup from './QuotePopup';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quotePopupOpen, setQuotePopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Invitations', path: '/invitations' },
    { name: 'Wedding Cards', path: '/wedding-cards' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-off-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold font-karma text-primary">
            TradyBong<span className="text-accent">Graphics & Design</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-baloo transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-dark hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => setQuotePopupOpen(true)}
              className="bg-primary text-off-white font-baloo py-2 px-6 rounded-full hover:bg-primary-dark transition-colors transform hover:scale-105"
            >
              Get Quote
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-off-white px-4 py-5 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`font-baloo py-2 transition-colors ${
                    location.pathname === item.path ? 'text-primary' : 'text-dark hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuotePopupOpen(true);
                }}
                className="bg-primary text-off-white font-baloo py-2 px-6 rounded-full hover:bg-primary-dark transition-colors"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      <QuotePopup 
        isOpen={quotePopupOpen}
        onClose={() => setQuotePopupOpen(false)}
      />
    </>
  );
};

export default Navbar;
