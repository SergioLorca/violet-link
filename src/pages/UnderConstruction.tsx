
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-violet-50 to-violet-100 px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/a72dd5ea-1b23-4b21-baa3-776036f7a480.png" 
              alt="Red Violeta Logo" 
              className="h-48 mx-auto mb-4"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
            Web en Construcción
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Nuestras ingenieras están trabajando arduamente para traerte una experiencia increíble. ¡Pronto estaremos disponibles!
          </p>
          <Link to="/">
            <Button className="rounded-full bg-gradient-violet hover:opacity-90 shadow-md btn-hover">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UnderConstruction;
