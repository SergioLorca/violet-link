
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-violet-100 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-violet-300 rounded-full opacity-20 blur-3xl animate-float -z-10"></div>
      <div className="absolute bottom-[10%] left-[10%] w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute top-[40%] left-[20%] w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-float -z-10" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col justify-center">
          <span className="text-sm md:text-base font-medium px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full inline-block w-fit mb-6 fade-in">Bienvenida a una nueva forma de conexión</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6 fade-in" style={{ transitionDelay: '100ms' }}>
            Conectando <span className="text-gradient">Mujeres</span>, Empoderando <span className="text-gradient">Vidas</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg fade-in" style={{ transitionDelay: '200ms' }}>
            Únete a nuestra vibrante comunidad de mujeres que se apoyan mutuamente, comparten experiencias y crecen juntas en un espacio seguro y empoderador.
          </p>
          <div className="flex flex-wrap gap-4 fade-in" style={{ transitionDelay: '300ms' }}>
            <Button size="lg" className="rounded-full bg-gradient-violet hover:opacity-90 shadow-lg btn-hover text-base px-8 h-12">
              Únete Ahora
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-violet-300 text-violet-700 hover:bg-violet-50 btn-hover group text-base h-12">
              Saber Más <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="mt-10 fade-in" style={{ transitionDelay: '400ms' }}>
            <p className="text-sm text-gray-500 mb-2">De confianza para mujeres de todo el mundo</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-violet-300 border-2 border-white flex items-center justify-center text-white text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-white text-xs font-medium">SR</div>
                <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium">MP</div>
                <div className="w-8 h-8 rounded-full bg-violet-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium">+</div>
              </div>
              <span className="text-sm text-gray-600">Únete a más de 10,000 miembros</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-pink-400/10 rounded-3xl blur-3xl -z-10"></div>
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl glass-card p-4 border border-white/40 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 to-white/80 backdrop-blur-md -z-10"></div>
            <div className="h-2/3 rounded-xl bg-gradient-to-br from-violet-200 to-pink-200 overflow-hidden mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4d248832-cf05-4109-b973-3473d1d2df58.png" 
                alt="Red Violeta Logo" 
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-6 bg-violet-100 rounded-md w-2/3"></div>
              <div className="h-4 bg-violet-100/70 rounded-md w-full"></div>
              <div className="h-4 bg-violet-100/70 rounded-md w-4/5"></div>
              <div className="h-8 mt-2 bg-violet-300 rounded-md w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
