import LifestyleInfoStep from '@/components/onbording/LifestyleInfoStep';
import NeighborhoodStep from '@/components/onbording/NeighborhoodStep';
import OnboardingSidebar from '@/components/onbording/OnboardingSidebar';
import PersonalInfoStep from '@/components/onbording/PersonalInfoStep';
import ProfileImageStep from '@/components/onbording/ProfileImageStep';
import RoomInfoStep from '@/components/onbording/RoomInfoStep';
import { CardContent } from '@/components/ui/Card';
import { useToast } from '@/hooks/use-toast';
import { useOnboardingForm } from '@/hooks/useOnboardingForm';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, handleChange, handleAmenityChange } = useOnboardingForm();
  const navigate = useNavigate();
  const { toast } = useToast();

  const nextStep = () => {
    if (currentStep < 5) {
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
        description: "Welcome to Arhibu! Your room listing is now active.",
      });
      
      navigate('/login');
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
        return <PersonalInfoStep formData={formData} handleChange={handleChange} />;
      case 2:
        return <NeighborhoodStep formData={formData} handleChange={handleChange} />;
      case 3:
        return <LifestyleInfoStep formData={formData} handleChange={handleChange} />;
      case 4:
        return <ProfileImageStep />;
      case 5:
        return (
          <RoomInfoStep 
            formData={formData} 
            handleChange={handleChange} 
            handleAmenityChange={handleAmenityChange} 
          />
        );
      default:
        return null;
    }
  };

  const stepTitles = [
    "Personal Information",
    "Neighborhood", 
    "Lifestyle Information",
    "Upload Profile Image",
    "Room Information"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OnboardingSidebar currentStep={0} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Set up your account to find roommate/room
            </h1>
            <p className="text-gray-600">
              Holla!, Fill in the details to complete sign up
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  {currentStep === 5 ? 'Room Information' : stepTitles[currentStep - 1]}
                </h2>
                {currentStep === 5 && (
                  <p className="text-gray-600 text-sm">
                    You can upload a minimum of one and maximum of six
                  </p>
                )}
              </div>
              
              {renderStep()}
              
              <div className="flex justify-between pt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < 5 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Save
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="flex justify-between items-center mt-8 text-xs text-gray-500">
            <span>Next 2020</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;