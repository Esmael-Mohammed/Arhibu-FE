import type { OnboardingFormData } from "@/hooks/useOnboardingForm";
import { Label } from "../ui/Lable";
import { Input } from "../ui/Input";

interface NeighborhoodStepProps {
  formData: OnboardingFormData;
  handleChange: (field: string, value: string) => void;
}

const NeighborhoodStep = ({ formData, handleChange }: NeighborhoodStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="houseLocation">Where is the house located?</Label>
          <Input
            id="houseLocation"
            placeholder="House No. 5 Bole Street behindDembel"
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
};

export default NeighborhoodStep;