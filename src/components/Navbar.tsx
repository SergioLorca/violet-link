
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

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
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient">Red Violeta</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-item">Principal</Link>
          <a href="#about" className="nav-item">About</a>
          <a href="#community" className="nav-item">Community</a>
          <a href="#events" className="nav-item">Events</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <Button variant="outline" className="rounded-full border-violet-400 text-violet-700 hover:bg-violet-50 btn-hover flex items-center gap-2">
                  <User size={16} />
                  {user?.name?.split(' ')[0] || 'Profile'}
                </Button>
              </Link>
              <Button 
                onClick={() => logout()}
                className="rounded-full bg-gradient-violet hover:opacity-90 shadow-md btn-hover"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="rounded-full border-violet-400 text-violet-700 hover:bg-violet-50 btn-hover">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="rounded-full bg-gradient-violet hover:opacity-90 shadow-md btn-hover">
                  Join Now
                </Button>
              </Link>
            </>
          )}
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
          <Link to="/" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#about" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#community" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Community</a>
          <a href="#events" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Events</a>
          <a href="#contact" className="text-lg font-medium px-4 py-2 rounded-md hover:bg-violet-50" onClick={() => setIsMenuOpen(false)}>Contact</a>
          
          <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-violet-100">
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center rounded-full border-violet-400 text-violet-700 hover:bg-violet-50 flex items-center gap-2">
                    <User size={16} />
                    Profile
                  </Button>
                </Link>
                <Button 
                  className="w-full justify-center rounded-full bg-gradient-violet hover:opacity-90 shadow-md"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center rounded-full border-violet-400 text-violet-700 hover:bg-violet-50">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center rounded-full bg-gradient-violet hover:opacity-90 shadow-md">
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
