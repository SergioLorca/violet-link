
import React, { useEffect } from 'react';

const FeaturedMembers = () => {
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
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-[30%] left-[5%] w-48 h-48 bg-violet-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-sm font-medium px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full inline-block mb-4 fade-in">Nuestra Comunidad</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 fade-in" style={{ transitionDelay: '100ms' }}>
            Conoce a Nuestras <span className="text-gradient">Increíbles</span> Miembros
          </h2>
          <p className="text-gray-700 fade-in" style={{ transitionDelay: '200ms' }}>
            Red Violeta reúne a mujeres extraordinarias de diversos orígenes, todas compartiendo sus experiencias y conocimientos únicos.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center fade-in" style={{ transitionDelay: '300ms' }}>
          <img 
            src="/lovable-uploads/a72dd5ea-1b23-4b21-baa3-776036f7a480.png" 
            alt="Red Violeta Logo" 
            className="h-64 mb-4"
          />
          <div className="text-center mt-4">
            <h3 className="text-2xl font-semibold text-violet-800">Red Violeta</h3>
            <p className="text-lg text-violet-600">Red de mujeres conectadas</p>
          </div>
        </div>
        
        <div className="mt-16 text-center fade-in" style={{ transitionDelay: '500ms' }}>
          <p className="text-violet-800 font-medium mb-2">¡Y muchas más mujeres increíbles como tú!</p>
          <a href="#" className="inline-block px-6 py-2 border border-violet-300 rounded-full text-violet-700 hover:bg-violet-50 transition-colors">
            Ver Todas las Miembros
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMembers;
