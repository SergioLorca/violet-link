
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Loader, User, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    interests: '',
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user) {
      setFormData({
        name: user.name || '',
        bio: user.bio || '',
        interests: user.interests ? user.interests.join(', ') : '',
      });
    }
  }, [isAuthenticated, user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    logout();
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert comma-separated interests to array
      const interestsArray = formData.interests
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

      await updateProfile({
        name: formData.name,
        bio: formData.bio,
        interests: interestsArray,
      });

      setIsEditing(false);
      toast({
        title: 'Profile updated',
        description: 'Your profile information has been successfully updated.',
      });
    } catch (error) {
      toast({
        title: 'Update failed',
        description: 'There was a problem updating your profile.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 bg-gradient-to-b from-violet-50 to-violet-100">
        <div className="max-w-3xl mx-auto fade-in">
          <div className="flex justify-end mb-6">
            <Button 
              variant="outline" 
              className="flex gap-2 items-center" 
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold text-gradient">Your Profile</CardTitle>
                {!isEditing && (
                  <Button 
                    variant="outline" 
                    className="text-violet-600 border-violet-200" 
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
              <CardDescription>
                {isEditing ? 'Edit your profile information below' : 'Your personal information'}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about yourself..."
                      value={formData.bio}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests (comma-separated)</Label>
                    <Input
                      id="interests"
                      name="interests"
                      placeholder="e.g. Technology, Art, Travel"
                      value={formData.interests}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex gap-2 justify-end pt-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-violet-100 flex items-center justify-center">
                        <User size={64} className="text-violet-500" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-violet-800">Name</h3>
                      <p>{user.name}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-violet-800">Email</h3>
                      <p>{user.email}</p>
                    </div>

                    {user.bio && (
                      <div>
                        <h3 className="text-lg font-medium text-violet-800">Bio</h3>
                        <p>{user.bio}</p>
                      </div>
                    )}

                    {user.interests && user.interests.length > 0 && (
                      <div>
                        <h3 className="text-lg font-medium text-violet-800">Interests</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {user.interests.map((interest, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
