import { useState } from 'react';
import { Home, ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Lable';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Textarea from '@/components/ui/Textarea';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    age: '',
    occupation: '',
    phone: '',
    bio: '',
    
    // Preferences
    budget: '',
    location: '',
    roomType: '',
    moveInDate: '',
    leaseLength: '',
    
    // Lifestyle
    cleanliness: '',
    socialLevel: '',
    sleepSchedule: '',
    pets: '',
    smoking: '',
    drinking: '',
    
    // Profile Image
    profileImage: null
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Profile created!",
        description: "Welcome to Arhibu! You can now start browsing rooms.",
      });
      
      navigate('/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-gray-600">Tell us a bit about yourself</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  placeholder="Software Engineer"
                  value={formData.occupation}
                  onChange={(e) => handleChange('occupation', e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell potential roommates about yourself, your interests, and what you're looking for..."
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                rows={8}
              />
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Housing Preferences</h2>
              <p className="text-gray-600">What are you looking for?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500">Under $500</SelectItem>
                    <SelectItem value="500-800">$500 - $800</SelectItem>
                    <SelectItem value="800-1200">$800 - $1,200</SelectItem>
                    <SelectItem value="1200-1500">$1,200 - $1,500</SelectItem>
                    <SelectItem value="over-1500">Over $1,500</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Input
                  id="location"
                  placeholder="Downtown Seattle"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="roomType">Room Type</Label>
                <Select value={formData.roomType} onValueChange={(value) => handleChange('roomType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shared">Shared Room</SelectItem>
                    <SelectItem value="private">Private Room</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="entire">Entire Place</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="moveInDate">Move-in Date</Label>
                <Input
                  id="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={(e) => handleChange('moveInDate', e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="leaseLength">Preferred Lease Length</Label>
              <Select value={formData.leaseLength} onValueChange={(value) => handleChange('leaseLength', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select lease length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month-to-month">Month-to-month</SelectItem>
                  <SelectItem value="3-months">3 months</SelectItem>
                  <SelectItem value="6-months">6 months</SelectItem>
                  <SelectItem value="12-months">12 months</SelectItem>
                  <SelectItem value="longer">Longer than 12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Lifestyle Preferences</h2>
              <p className="text-gray-600">Help us match you with compatible roommates</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cleanliness">Cleanliness Level</Label>
                <Select value={formData.cleanliness} onValueChange={(value) => handleChange('cleanliness', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cleanliness level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-clean">Very Clean</SelectItem>
                    <SelectItem value="moderately-clean">Moderately Clean</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="socialLevel">Social Level</Label>
                <Select value={formData.socialLevel} onValueChange={(value) => handleChange('socialLevel', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select social level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-social">Very Social</SelectItem>
                    <SelectItem value="moderately-social">Moderately Social</SelectItem>
                    <SelectItem value="quiet">Prefer Quiet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sleepSchedule">Sleep Schedule</Label>
                <Select value={formData.sleepSchedule} onValueChange={(value) => handleChange('sleepSchedule', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sleep schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="early-bird">Early Bird (before 10 PM)</SelectItem>
                    <SelectItem value="normal">Normal (10 PM - 12 AM)</SelectItem>
                    <SelectItem value="night-owl">Night Owl (after 12 AM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pets">Pets</Label>
                <Select value={formData.pets} onValueChange={(value) => handleChange('pets', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pet preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="have-pets">I have pets</SelectItem>
                    <SelectItem value="love-pets">Love pets (don't have)</SelectItem>
                    <SelectItem value="allergic">Allergic to pets</SelectItem>
                    <SelectItem value="no-preference">No preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="smoking">Smoking</Label>
                <Select value={formData.smoking} onValueChange={(value) => handleChange('smoking', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Smoking preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-smoker">Non-smoker</SelectItem>
                    <SelectItem value="occasional">Occasional</SelectItem>
                    <SelectItem value="regular">Regular smoker</SelectItem>
                    <SelectItem value="outside-only">Outside only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="drinking">Drinking</Label>
                <Select value={formData.drinking} onValueChange={(value) => handleChange('drinking', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Drinking preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-drinker">Non-drinker</SelectItem>
                    <SelectItem value="social">Social drinker</SelectItem>
                    <SelectItem value="regular">Regular drinker</SelectItem>
                    <SelectItem value="no-preference">No preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Profile Photo</h2>
              <p className="text-gray-600">Add a photo to make a great first impression</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
              <Button variant="outline" className="mb-6">
                Upload Photo
              </Button>
              <p className="text-sm text-gray-600 mb-8">
                This helps potential roommates get to know you better
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Profile Summary</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Age:</span> {formData.age || 'Not specified'}</p>
                <p><span className="font-medium">Occupation:</span> {formData.occupation || 'Not specified'}</p>
                <p><span className="font-medium">Budget:</span> {formData.budget || 'Not specified'}</p>
                <p><span className="font-medium">Location:</span> {formData.location || 'Not specified'}</p>
                <p><span className="font-medium">Room Type:</span> {formData.roomType || 'Not specified'}</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">Arhibu</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of 4</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between pt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Complete Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;