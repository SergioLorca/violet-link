
import React, { useEffect } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  type: string;
  delay: number;
}

const EventCard = ({ title, date, location, attendees, type, delay }: EventProps) => {
  return (
    <div 
      className="glass-card p-6 fade-in relative overflow-hidden card-shine"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute top-0 right-0 py-1 px-3 text-xs font-medium ${
        type === 'Online' 
          ? 'bg-blue-100 text-blue-700' 
          : 'bg-green-100 text-green-700'
      } rounded-bl-lg`}>
        {type}
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-3">{title}</h3>
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <Calendar size={16} className="text-violet-500" />
        <span className="text-sm">{date}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <MapPin size={16} className="text-violet-500" />
        <span className="text-sm">{location}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Users size={16} className="text-violet-500" />
        <span className="text-sm">{attendees} asistentes</span>
      </div>
      <Button variant="outline" className="w-full justify-center rounded-full border-violet-300 text-violet-700 hover:bg-violet-50">
        Inscribirse Ahora
      </Button>
    </div>
  );
};

const EventsSection = () => {
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

  const events = [
    {
      title: "Cumbre de Mujeres en Liderazgo",
      date: "15 de junio, 2023 • 09:00 AM",
      location: "Evento Virtual",
      attendees: 1250,
      type: "Online",
      delay: 100
    },
    {
      title: "Serie de Talleres de Habilidades Técnicas",
      date: "2 de julio, 2023 • 02:00 PM",
      location: "Madrid, España",
      attendees: 50,
      type: "Presencial",
      delay: 200
    },
    {
      title: "Retiro de Autocuidado y Bienestar",
      date: "20-22 de julio, 2023",
      location: "Barcelona, España",
      attendees: 75,
      type: "Presencial",
      delay: 300
    },
    {
      title: "Webinar de Desarrollo Profesional",
      date: "5 de agosto, 2023 • 11:00 AM",
      location: "Evento Virtual",
      attendees: 500,
      type: "Online",
      delay: 400
    }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-violet-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-[30%] right-[10%] w-48 h-48 bg-pink-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-violet-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-sm font-medium px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full inline-block mb-4 fade-in">Eventos y Encuentros</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 fade-in" style={{ transitionDelay: '100ms' }}>
            Próximos <span className="text-gradient">Eventos</span> y Actividades
          </h2>
          <p className="text-gray-700 fade-in" style={{ transitionDelay: '200ms' }}>
            Únete a estos emocionantes eventos diseñados para conectar, educar y empoderar. Ya sean virtuales o presenciales, nuestros eventos reúnen a mujeres de todos los ámbitos de la vida.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in" style={{ transitionDelay: '500ms' }}>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-violet rounded-full text-white font-medium shadow-md hover:opacity-90 transition-opacity">
            <Calendar size={18} />
            Ver Todos los Eventos
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
