
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient">Red Violeta</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#community" className="nav-item">Community</a>
          <a href="#events" className="nav-item">Events</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full border-violet-400 text-violet-700 hover:bg-violet-50 btn-hover">
            Sign In
          </Button>
          <Button className="rounded-full bg-gradient-violet hover:opacity-90 shadow-md btn-hover">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-5 flex flex-col gap-4 animate-fade-in border-t border-violet-100">
          <a href="#home" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#community" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Community</a>
          <a href="#events" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Events</a>
          <a href="#contact" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
          
          <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-violet-100">
            <Button variant="outline" className="w-full justify-center rounded-full border-violet-400 text-violet-700 hover:bg-violet-50">
              Sign In
            </Button>
            <Button className="w-full justify-center rounded-full bg-gradient-violet hover:opacity-90 shadow-md">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
