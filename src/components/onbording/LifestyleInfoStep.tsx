import type { OnboardingFormData } from "@/hooks/useOnboardingForm";
import { Input } from "../ui/Input";
import { Label } from "../ui/Lable";
import { Select } from "../ui/Select";

interface LifestyleInfoStepProps {
  formData: OnboardingFormData;
  handleChange: (field: string, value: string) => void;
}

const LifestyleInfoStep = ({ formData, handleChange }: LifestyleInfoStepProps) => {
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
          <Label htmlFor="apartmentType">Apartment Type</Label>
          <Select
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
            value={formData.furniture}
            onValueChange={(value) => handleChange('furniture', value)}
            placeholder="Select furniture status"
          >
            <option value="fully-furnished">Fully furnished</option>
            <option value="partially-furnished">Partially furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default LifestyleInfoStep;
