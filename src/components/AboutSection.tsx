
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      title: "Safe Space",
      description: "A secure and moderated platform where women can share freely without judgment or harassment.",
      delay: 200
    },
    {
      title: "Mentorship",
      description: "Connect with accomplished women who can guide you in your personal and professional journey.",
      delay: 300
    },
    {
      title: "Knowledge Sharing",
      description: "Access resources, workshops, and discussions on topics that matter to women.",
      delay: 400
    },
    {
      title: "Networking",
      description: "Build meaningful connections with women across various fields and industries.",
      delay: 500
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-[20%] right-[20%] w-64 h-64 bg-violet-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-[30%] left-[10%] w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full inline-block mb-4 fade-in">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 fade-in" style={{ transitionDelay: '100ms' }}>
              Creating a <span className="text-gradient">Transformative</span> Community for Women
            </h2>
            <p className="text-gray-700 mb-8 fade-in" style={{ transitionDelay: '200ms' }}>
              Red Violeta was founded with a clear vision: to create a digital space where women can connect, share, and grow together. We believe in the power of community to transform lives and break barriers.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 fade-in" style={{ transitionDelay: `${feature.delay}ms` }}>
                  <CheckCircle className="text-violet-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-pink-400/5 rounded-3xl blur-3xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden p-1 border border-violet-200/50 shadow-xl fade-in glass-card">
              <div className="bg-gradient-to-br from-violet-100/90 to-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900">Our Impact</h3>
                    <p className="text-violet-700 text-sm">Growing stronger every day</p>
                  </div>
                  <div className="bg-violet-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#7C3AED" strokeWidth="2"/>
                      <path d="M15 12L12 9M12 9L9 12M12 9V15" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Active Members</p>
                      <p className="text-xl font-semibold text-gray-900">10,000+</p>
                    </div>
                    <div className="h-12 w-12 bg-violet-100 rounded-md flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Countries Reached</p>
                      <p className="text-xl font-semibold text-gray-900">45+</p>
                    </div>
                    <div className="h-12 w-12 bg-violet-100 rounded-md flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H21" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3C14.5013 5.68377 15.9228 9.28324 16 13C15.9228 16.7168 14.5013 20.3162 12 23C9.49872 20.3162 8.07725 16.7168 8 13C8.07725 9.28324 9.49872 5.68377 12 3Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Success Stories</p>
                      <p className="text-xl font-semibold text-gray-900">1,200+</p>
                    </div>
                    <div className="h-12 w-12 bg-violet-100 rounded-md flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.7273 14.7273C18.6063 15.0954 18.6063 15.4877 18.7273 15.8558C18.8484 16.224 19.0454 16.5576 19.3273 16.8727C19.6091 17.1879 19.8273 17.5697 19.9273 17.9515C20.0273 18.3333 20.0273 18.7515 19.9273 19.1333C19.8273 19.5152 19.6091 19.8606 19.3273 20.1757C19.0454 20.4909 18.6727 20.7515 18.3045 20.8727C17.9364 20.9939 17.5182 21.0303 17.1364 20.9454C16.7545 20.8606 16.3727 20.697 16.0909 20.4485C15.8091 20.2 15.5636 19.8546 15.4425 19.4864C15.3214 19.1182 15.3214 18.7258 15.4425 18.3576C15.5636 17.9894 15.7909 17.6558 16.0727 17.3406C16.3545 17.0255 16.6727 16.8 17.0409 16.6788C17.4091 16.5576 17.7909 16.5576 18.1591 16.6424C18.5273 16.7273 18.8454 16.8909 19.1273 17.1394" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.27273 14.7273C5.39375 15.0954 5.39375 15.4877 5.27273 15.8558C5.15171 16.224 4.95455 16.5576 4.67273 16.8727C4.39091 17.1879 4.17273 17.5697 4.07273 17.9515C3.97273 18.3333 3.97273 18.7515 4.07273 19.1333C4.17273 19.5152 4.39091 19.8606 4.67273 20.1757C4.95455 20.4909 5.32727 20.7515 5.69545 20.8727C6.06364 20.9939 6.48182 21.0303 6.86364 20.9454C7.24545 20.8606 7.62727 20.697 7.90909 20.4485C8.19091 20.2 8.43636 19.8546 8.55748 19.4864C8.6786 19.1182 8.6786 18.7258 8.55748 18.3576C8.43636 17.9894 8.20909 17.6558 7.92727 17.3406C7.64545 17.0255 7.32727 16.8 6.95909 16.6788C6.59091 16.5576 6.20909 16.5576 5.84091 16.6424C5.47273 16.7273 5.15455 16.8909 4.87273 17.1394" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.27273 9.27273C5.39375 8.90455 5.39375 8.51212 5.27273 8.14394C5.15171 7.77576 4.95455 7.44242 4.67273 7.12727C4.39091 6.81212 4.17273 6.4303 4.07273 6.04848C3.97273 5.66667 3.97273 5.24848 4.07273 4.86667C4.17273 4.48485 4.39091 4.13939 4.67273 3.82424C4.95455 3.50909 5.32727 3.24848 5.69545 3.12727C6.06364 3.00606 6.48182 2.96969 6.86364 3.05454C7.24545 3.13939 7.62727 3.30303 7.90909 3.55152C8.19091 3.8 8.43636 4.14545 8.55748 4.51364C8.6786 4.88182 8.6786 5.27424 8.55748 5.64242C8.43636 6.01061 8.20909 6.34394 7.92727 6.65909C7.64545 6.97424 7.32727 7.2 6.95909 7.32121C6.59091 7.44242 6.20909 7.44242 5.84091 7.35758C5.47273 7.27273 5.15455 7.10909 4.87273 6.86061" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.7273 9.27273C18.6063 8.90455 18.6063 8.51212 18.7273 8.14394C18.8484 7.77576 19.0454 7.44242 19.3273 7.12727C19.6091 6.81212 19.8273 6.4303 19.9273 6.04848C20.0273 5.66667 20.0273 5.24848 19.9273 4.86667C19.8273 4.48485 19.6091 4.13939 19.3273 3.82424C19.0454 3.50909 18.6727 3.24848 18.3045 3.12727C17.9364 3.00606 17.5182 2.96969 17.1364 3.05454C16.7545 3.13939 16.3727 3.30303 16.0909 3.55152C15.8091 3.8 15.5636 4.14545 15.4425 4.51364C15.3214 4.88182 15.3214 5.27424 15.4425 5.64242C15.5636 6.01061 15.7909 6.34394 16.0727 6.65909C16.3545 6.97424 16.6727 7.2 17.0409 7.32121C17.4091 7.44242 17.7909 7.44242 18.1591 7.35758C18.5273 7.27273 18.8454 7.10909 19.1273 6.86061" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
