
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, Clock, Heart, Activity, Shield, Briefcase, MoonStar, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  type: string;
  category: string;
  image?: string;
}

const EventCard = ({ title, date, location, attendees, description, type, category }: EventProps) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'running':
        return <Activity size={18} className="text-pink-500" />;
      case 'mindfulness':
        return <Heart size={18} className="text-blue-500" />;
      case 'networking':
        return <Briefcase size={18} className="text-green-500" />;
      case 'safety':
        return <Shield size={18} className="text-purple-500" />;
      case 'social':
        return <Coffee size={18} className="text-orange-500" />;
      case 'nightlife':
        return <MoonStar size={18} className="text-indigo-500" />;
      default:
        return <Calendar size={18} className="text-violet-500" />;
    }
  };

  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] h-full flex flex-col">
      <div className="h-40 bg-gradient-to-r from-violet-100 to-pink-100 flex items-center justify-center p-6">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          {getCategoryIcon()}
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className={`inline-block py-1 px-3 text-xs font-medium rounded-full mb-3 ${
          type === 'Online' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-green-100 text-green-700'
        }`}>
          {type}
        </div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Calendar size={16} className="text-violet-500" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin size={16} className="text-violet-500" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Users size={16} className="text-violet-500" />
          <span className="text-sm">{attendees} asistentes</span>
        </div>
        <p className="text-gray-700 text-sm mt-2 mb-4 flex-grow">{description}</p>
        <Button variant="outline" className="w-full justify-center rounded-full border-violet-300 text-violet-700 hover:bg-violet-50 mt-auto">
          Inscribirse Ahora
        </Button>
      </CardContent>
    </Card>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState("todos");
  
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

  const allEvents: EventProps[] = [
    {
      id: 1,
      title: "Running Juntas - Parque del Retiro",
      date: "Sábados, 9:00 AM",
      location: "Madrid, España",
      attendees: 35,
      description: "Grupo de running para mujeres en el Parque del Retiro. Todos los niveles son bienvenidos, desde principiantes hasta corredoras experimentadas.",
      type: "Presencial",
      category: "running"
    },
    {
      id: 2,
      title: "Running Juntas - Montjuïc",
      date: "Domingos, 8:30 AM",
      location: "Barcelona, España",
      attendees: 28,
      description: "Corremos juntas por las colinas de Montjuïc disfrutando de las vistas de Barcelona. Grupo adaptado a diferentes ritmos y niveles.",
      type: "Presencial",
      category: "running"
    },
    {
      id: 3,
      title: "Taller de Mindfulness y Autocuidado",
      date: "15 de julio, 2025 • 18:00",
      location: "Evento Virtual",
      attendees: 120,
      description: "Aprende técnicas de mindfulness y autocuidado para reducir el estrés y mejorar tu bienestar emocional con nuestra instructora certificada.",
      type: "Online",
      category: "mindfulness"
    },
    {
      id: 4,
      title: "Networking Profesional - Mujeres en Tech",
      date: "22 de julio, 2025 • 19:00",
      location: "Madrid, España",
      attendees: 80,
      description: "Evento dedicado a conectar profesionales del sector tecnológico. Oportunidad para ampliar tu red de contactos y compartir experiencias.",
      type: "Presencial",
      category: "networking"
    },
    {
      id: 5,
      title: "Taller de Meditación para Principiantes",
      date: "30 de julio, 2025 • 17:30",
      location: "Valencia, España",
      attendees: 45,
      description: "Iníciate en la práctica de la meditación con este taller para principiantes. Aprenderás técnicas básicas para incorporar a tu rutina diaria.",
      type: "Presencial",
      category: "mindfulness"
    },
    {
      id: 6,
      title: "Networking Digital - Emprendedoras",
      date: "5 de agosto, 2025 • 12:00",
      location: "Evento Virtual",
      attendees: 150,
      description: "Conecta con otras emprendedoras de toda España. Comparte tus proyectos, busca colaboraciones y amplía tu red de contactos profesionales.",
      type: "Online",
      category: "networking"
    },
    {
      id: 7,
      title: "Volvemos Juntas - Noche de Malasaña",
      date: "Viernes, 23:00 - 03:00",
      location: "Madrid, España",
      attendees: 40,
      description: "Grupo para volver a casa juntas después de una noche de fiesta en la zona de Malasaña. Nos reunimos en puntos estratégicos y organizamos rutas seguras.",
      type: "Presencial",
      category: "nightlife"
    },
    {
      id: 8,
      title: "Volvemos Juntas - Born y Gótico",
      date: "Sábados, 22:30 - 04:00",
      location: "Barcelona, España",
      attendees: 35,
      description: "Red de acompañamiento para volver a casa seguras tras disfrutar de la noche en el Born y el Gótico. Grupos organizados según zonas de la ciudad.",
      type: "Presencial",
      category: "nightlife"
    },
    {
      id: 9,
      title: "Taller de Defensa Personal",
      date: "12 de agosto, 2025 • 18:00",
      location: "Sevilla, España",
      attendees: 25,
      description: "Aprende técnicas básicas de defensa personal y estrategias de seguridad para situaciones de riesgo con instructores profesionales.",
      type: "Presencial",
      category: "safety"
    },
    {
      id: 10,
      title: "Café y Charla - Mujeres Profesionales",
      date: "18 de agosto, 2025 • 11:00",
      location: "Bilbao, España",
      attendees: 30,
      description: "Reunión informal para compartir experiencias profesionales en un ambiente relajado. Networking orgánico mientras disfrutamos de un buen café.",
      type: "Presencial",
      category: "social"
    },
    {
      id: 11,
      title: "Running Juntas - Virtual",
      date: "Martes y Jueves, 19:00",
      location: "Evento Virtual",
      attendees: 60,
      description: "Sesiones de entrenamiento virtual en directo con nuestra entrenadora. Adaptadas a todos los niveles con seguimiento personalizado.",
      type: "Online",
      category: "running"
    },
    {
      id: 12,
      title: "Taller de Yoga y Bienestar",
      date: "25 de agosto, 2025 • 10:00",
      location: "Málaga, España",
      attendees: 40,
      description: "Sesión de yoga enfocada en reducir el estrés y mejorar la conexión mente-cuerpo. Incluye meditación guiada y técnicas de respiración.",
      type: "Presencial",
      category: "mindfulness"
    },
    {
      id: 13,
      title: "Volvemos Juntas - Zona Centro",
      date: "Viernes y Sábados, 23:00 - 03:00",
      location: "Valencia, España",
      attendees: 30,
      description: "Grupo organizado para volver a casa de forma segura después de salir por la zona centro de Valencia. Coordinación a través de nuestra app.",
      type: "Presencial",
      category: "nightlife"
    },
    {
      id: 14,
      title: "Foro Empresarial - Mujeres Líderes",
      date: "1 de septiembre, 2025 • 16:00",
      location: "Madrid, España",
      attendees: 100,
      description: "Foro dedicado a mujeres en posiciones de liderazgo. Charlas, mesas redondas y oportunidades de networking con empresarias de éxito.",
      type: "Presencial",
      category: "networking"
    },
    {
      id: 15,
      title: "Webinar: Seguridad en Entornos Digitales",
      date: "8 de septiembre, 2025 • 18:00",
      location: "Evento Virtual",
      attendees: 90,
      description: "Aprende a protegerte en el mundo digital con consejos prácticos sobre privacidad, seguridad en redes sociales y prevención de acoso online.",
      type: "Online",
      category: "safety"
    }
  ];
  
  const filteredEvents = activeTab === "todos" 
    ? allEvents 
    : allEvents.filter(event => event.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-violet-50 -z-10"></div>
          
          <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-[30%] left-[15%] w-72 h-72 bg-violet-200 rounded-full opacity-20 blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full inline-block mb-4 fade-in">Eventos y Actividades</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 fade-in" style={{ transitionDelay: '100ms' }}>
                Descubre Nuestros <span className="text-gradient">Eventos</span>
              </h1>
              <p className="text-gray-700 text-lg fade-in" style={{ transitionDelay: '200ms' }}>
                Explora nuestra amplia variedad de eventos diseñados para conectar, apoyar y empoderar a mujeres. Ya sean virtuales o presenciales, hay algo para cada interés y necesidad.
              </p>
            </div>
            
            <Tabs defaultValue="todos" className="w-full mb-12 fade-in" style={{ transitionDelay: '300ms' }} onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-violet-50 p-1 rounded-full">
                  <TabsTrigger value="todos" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="running" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Running
                  </TabsTrigger>
                  <TabsTrigger value="mindfulness" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Mindfulness
                  </TabsTrigger>
                  <TabsTrigger value="networking" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Networking
                  </TabsTrigger>
                  <TabsTrigger value="nightlife" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Volvemos Juntas
                  </TabsTrigger>
                  <TabsTrigger value="safety" className="rounded-full px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-violet-800 data-[state=active]:shadow-sm">
                    Seguridad
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="todos" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="running" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mindfulness" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="networking" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="nightlife" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="safety" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <Pagination className="mt-12 fade-in" style={{ transitionDelay: '400ms' }}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
