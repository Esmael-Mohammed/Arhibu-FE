import type { OnboardingFormData } from "@/hooks/useOnboardingForm";
import { Label } from "../ui/Lable";
import { Input } from "../ui/Input";

interface PersonalInfoStepProps {
  formData: OnboardingFormData;
  handleChange: (field: string, value: string) => void;
}

const PersonalInfoStep = ({ formData, handleChange }: PersonalInfoStepProps) => {
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
};

export default PersonalInfoStep;