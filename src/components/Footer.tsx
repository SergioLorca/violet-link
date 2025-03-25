
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-400 to-violet-500"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600 rounded-full opacity-10 translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-pink-500 rounded-full opacity-10 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-violet-100 to-pink-100 bg-clip-text text-transparent">Red Violeta</span>
            </a>
            <p className="text-violet-100 mb-6 text-sm">
              A social platform designed exclusively for women to connect, share experiences, and network in a safe and empowering environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-violet-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-violet-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#community" className="text-violet-200 hover:text-white transition-colors">Community</a></li>
              <li><a href="#events" className="text-violet-200 hover:text-white transition-colors">Events</a></li>
              <li><a href="#contact" className="text-violet-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-violet-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-violet-200 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-violet-200 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-violet-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-violet-200 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-violet-200 mb-4 text-sm">Stay updated with our latest news and events</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button type="submit" className="bg-violet-600 px-4 py-2 rounded-r-lg hover:bg-violet-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-violet-200 text-sm mb-4 md:mb-0">© 2023 Red Violeta. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-violet-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-violet-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-violet-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
