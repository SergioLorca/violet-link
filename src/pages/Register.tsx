
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: 'Las contraseñas no coinciden',
        description: 'Por favor, asegúrate de que las contraseñas coincidan.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: 'Términos y Condiciones',
        description: 'Por favor, acepta los términos y condiciones para continuar.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      await register(name, email, password);
      toast({
        title: '¡Registro exitoso!',
        description: 'Bienvenida a Red Violeta. Tu cuenta ha sido creada.',
      });
      navigate('/profile');
    } catch (error) {
      console.error('Error de registro:', error);
      toast({
        title: 'Registro fallido',
        description: 'Por favor verifica tu información e intenta nuevamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-50 to-violet-100 px-4 py-12">
      <Card className="w-full max-w-md shadow-lg fade-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-gradient">Crear una Cuenta</CardTitle>
          <CardDescription>
            Únete a nuestra comunidad de mujeres apoyándose mutuamente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                placeholder="María López"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                disabled={isSubmitting}
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Acepto los{' '}
                <Link to="/terms" className="text-violet-600 hover:text-violet-800">
                  Términos de Servicio
                </Link>{' '}
                y la{' '}
                <Link to="/privacy" className="text-violet-600 hover:text-violet-800">
                  Política de Privacidad
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full bg-gradient-violet" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                'Registrarse'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-violet-600 hover:text-violet-800 font-medium">
              Iniciar sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
