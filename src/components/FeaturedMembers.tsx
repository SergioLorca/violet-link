
import React, { useEffect } from 'react';

interface MemberProps {
  name: string;
  role: string;
  quote: string;
  imageColor: string;
  delay: number;
}

const MemberCard = ({ name, role, quote, imageColor, delay }: MemberProps) => {
  return (
    <div 
      className="glass-card p-6 flex flex-col fade-in card-shine relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-20 h-20 rounded-full mb-4 ${imageColor} flex items-center justify-center text-white text-xl font-medium`}>
        {name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-violet-700 mb-3">{role}</p>
      <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
};

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

  const members = [
    {
      name: "María Rodríguez",
      role: "Emprendedora Tecnológica",
      quote: "Esta comunidad ha sido fundamental en mi crecimiento profesional. El apoyo y la mentoría que he recibido no tienen precio.",
      imageColor: "bg-violet-500",
      delay: 100
    },
    {
      name: "Sofía Chen",
      role: "Diseñadora UX",
      quote: "Red Violeta me ha conectado con mujeres afines que me inspiran diariamente a romper fronteras en el diseño.",
      imageColor: "bg-pink-400",
      delay: 200
    },
    {
      name: "Aisha Johnson",
      role: "Directora de Marketing",
      quote: "Las oportunidades de networking aquí han abierto puertas que nunca pensé posibles. Estoy muy agradecida por este espacio.",
      imageColor: "bg-indigo-500",
      delay: 300
    },
    {
      name: "Emma Thompson",
      role: "Profesional de la Salud",
      quote: "Encontrar una comunidad que entiende los desafíos únicos que enfrentan las mujeres en el sector salud ha cambiado mi vida.",
      imageColor: "bg-violet-600",
      delay: 400
    }
  ];

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
            Conoce a Algunas de Nuestras <span className="text-gradient">Increíbles</span> Miembros
          </h2>
          <p className="text-gray-700 fade-in" style={{ transitionDelay: '200ms' }}>
            Red Violeta reúne a mujeres extraordinarias de diversos orígenes, todas compartiendo sus experiencias y conocimientos únicos.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
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
