import React, { useState } from 'react';
import { Home, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Select } from '@/components/ui/Select'; // only import Select, no SelectTrigger etc.
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import Textarea from '@/components/ui/Textarea';
import { Card, CardContent } from '@/components/ui/Card';
import { Label } from '@/components/ui/Lable';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    houseLocation: '',
    neighborhood: '',
    totalBedrooms: '',
    totalBathrooms: '',
    apartmentType: '',
    furniture: '',
    amenities: {
      runningWater: false,
      electricity: false,
      solarInverter: false,
      swimmingPool: false,
      washer: false,
      kitchenCupboard: false,
    },
    houseDescription: '',
    profileImage: null,
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: checked,
      },
    }));
  };

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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: 'Profile created!',
        description: 'Welcome to Arhibu! Your room listing is now active.',
      });

      navigate('/dashboard');
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="houseLocation">Where is the house located?</Label>
                <Input
                  id="houseLocation"
                  placeholder="House No. 5 Bole Street behind Dembel"
                  value={formData.houseLocation}
                  onChange={(e) => handleChange('houseLocation', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="neighborhood">What is the name of the area/neighborhood?</Label>
                <Input
                  id="neighborhood"
                  placeholder="Bole"
                  value={formData.neighborhood}
                  onChange={(e) => handleChange('neighborhood', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalBedrooms">Total Number of Bedrooms</Label>
                <Input
                  id="totalBedrooms"
                  type="number"
                  placeholder="Enter number"
                  value={formData.totalBedrooms}
                  onChange={(e) => handleChange('totalBedrooms', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalBathrooms">Total Number of Bathrooms</Label>
                <Input
                  id="totalBathrooms"
                  type="number"
                  placeholder="Enter number"
                  value={formData.totalBathrooms}
                  onChange={(e) => handleChange('totalBathrooms', e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="apartmentType">Apartment type</Label>
                <Select
                  id="apartmentType"
                  value={formData.apartmentType}
                  onValueChange={(value) => handleChange('apartmentType', value)}
                  placeholder="Select apartment type"
                >
                  <option value="1-bedroom">1 bedroom</option>
                  <option value="2-bedroom">2 bedroom</option>
                  <option value="3-bedroom">3 bedroom</option>
                  <option value="4-bedroom">4 bedroom</option>
                  <option value="studio">Studio</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="furniture">Furniture</Label>
                <Select
                  id="furniture"
                  value={formData.furniture}
                  onValueChange={(value) => handleChange('furniture', value)}
                  placeholder="Select furniture type"
                >
                  <option value="fully-furnished">Fully furnished</option>
                  <option value="partially-furnished">Partially furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
              <Button variant="outline" className="mb-6">
                Upload Photo
              </Button>
              <p className="text-sm text-gray-600">
                Add a profile photo to build trust with potential roommates
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label>Amenities Available in the House</Label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'runningWater', label: 'Running Water' },
                    { id: 'electricity', label: 'Electricity' },
                    { id: 'solarInverter', label: 'Solar Inverter' },
                    { id: 'swimmingPool', label: 'Swimming Pool' },
                    { id: 'washer', label: 'Washer' },
                    { id: 'kitchenCupboard', label: 'Kitchen Cupboard' },
                  ].map(({ id, label }) => (
                    <Checkbox
                      key={id}
                      id={id}
                      checked={formData.amenities[id as keyof typeof formData.amenities]}
                      onChange={(e) => handleAmenityChange(id, e.target.checked)}
                    >
                      {label}
                    </Checkbox>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="houseDescription">Describe Your Room</Label>
                <Textarea
                  id="houseDescription"
                  placeholder="Enter room description"
                  value={formData.houseDescription}
                  onChange={(e) => handleChange('houseDescription', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    'Personal Info',
    'Neighborhood Info',
    'Lifestyle Info',
    'Profile Image Upload',
    'Room Description and Amenities',
  ];

  return (
    <div className="flex min-h-[90vh]">
      {/* Left Sidebar */}
      <div className="flex flex-col items-center justify-center w-56 p-4 border-r border-gray-200">
        <div className="mb-10">
          <Home className="mx-auto h-8 w-8 text-primary" />
          <h1 className="mt-2 font-bold text-lg text-center text-primary">Arhibu</h1>
          <p className="text-xs text-gray-500 text-center mt-1">Onboarding</p>
        </div>

        <div className="flex flex-col space-y-10">
          {stepTitles.map((title, index) => {
            const step = index + 1;
            const isActive = currentStep === step;
            return (
              <div
                key={step}
                className={`flex flex-col items-center cursor-pointer select-none ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`}
                onClick={() => setCurrentStep(step)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isActive ? 'border-primary bg-primary text-white' : 'border-gray-300'
                  }`}
                >
                  {step}
                </div>
                <div className="text-xs mt-1 text-center">{title}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Card>
          <CardContent className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {stepTitles[currentStep - 1]}
            </h2>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
              )}
              {currentStep < 5 ? (
                <Button onClick={nextStep}>Continue</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
