
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-violet-50 to-violet-100 px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/a72dd5ea-1b23-4b21-baa3-776036f7a480.png" 
              alt="Red Violeta Logo" 
              className="h-32 mx-auto mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-gray-700 mb-8">¡Ups! Página no encontrada</p>
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

export default NotFound;
