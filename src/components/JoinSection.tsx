
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const JoinSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const benefits = [
    "Connect with like-minded women",
    "Access exclusive events and resources",
    "Share your experiences in a safe space",
    "Get support for your personal and professional growth"
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/70 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-violet-300 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-pink-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 border border-white/40 shadow-xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-pink-500/5 rounded-2xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 fade-in">
                Ready to Join Our <span className="text-gradient">Community</span>?
              </h2>
              <p className="text-gray-700 mb-8 fade-in" style={{ transitionDelay: '100ms' }}>
                Become part of a vibrant network of women supporting each other. Sign up today and start your journey with Red Violeta.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 fade-in" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                    <span className="flex-shrink-0 h-5 w-5 bg-violet-100 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-violet-700" />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 fade-in" style={{ transitionDelay: '500ms' }}>
                <Button size="lg" className="rounded-full bg-gradient-violet hover:opacity-90 shadow-lg btn-hover">
                  Join Now
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-violet-300 text-violet-700 hover:bg-violet-50 btn-hover group">
                  Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="relative fade-in" style={{ transitionDelay: '300ms' }}>
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                      placeholder="What would you like to know?"
                    ></textarea>
                  </div>
                  <Button className="w-full justify-center rounded-lg bg-gradient-violet hover:opacity-90 shadow-md">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
