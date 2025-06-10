import { useState } from 'react';

export interface OnboardingFormData {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  
  // Neighborhood
  houseLocation: string;
  neighborhood: string;
  
  // Lifestyle Info
  totalBedrooms: string;
  totalBathrooms: string;
  apartmentType: string;
  furniture: string;
  
  // Amenities
  amenities: {
    runningWater: boolean;
    electricity: boolean;
    solarInverter: boolean;
    swimmingPool: boolean;
    washer: boolean;
    kitchenCupboard: boolean;
  };
  
  // Room Information
  houseDescription: string;
  
  // Profile Image
  profileImage: null;
}

export const useOnboardingForm = () => {
  const [formData, setFormData] = useState<OnboardingFormData>({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    
    // Neighborhood
    houseLocation: '',
    neighborhood: '',
    
    // Lifestyle Info
    totalBedrooms: '',
    totalBathrooms: '',
    apartmentType: '',
    furniture: '',
    
    // Amenities
    amenities: {
      runningWater: false,
      electricity: false,
      solarInverter: false,
      swimmingPool: false,
      washer: false,
      kitchenCupboard: false
    },
    
    // Room Information
    houseDescription: '',
    
    // Profile Image
    profileImage: null
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: checked
      }
    }));
  };

  return {
    formData,
    handleChange,
    handleAmenityChange
  };
};