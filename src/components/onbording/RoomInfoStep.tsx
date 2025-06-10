import type { OnboardingFormData } from "@/hooks/useOnboardingForm";
import { Label } from "../ui/Lable";
import Checkbox from "../ui/Checkbox";
import Textarea from "../ui/Textarea";


interface RoomInfoStepProps {
  formData: OnboardingFormData;
  handleChange: (field: string, value: string) => void;
  handleAmenityChange: (amenity: string, checked: boolean) => void;
}

const RoomInfoStep = ({ formData, handleChange, handleAmenityChange }: RoomInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-3">
          <Label>Amenities Available in the House</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="runningWater"
                checked={formData.amenities.runningWater}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('runningWater', e.target.checked)}
              />
              <Label htmlFor="runningWater" className="text-sm text-blue-600">Running Water</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="electricity"
                checked={formData.amenities.electricity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('electricity', e.target.checked)}
              />
              <Label htmlFor="electricity" className="text-sm text-blue-600">Electricity</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="solarInverter"
                checked={formData.amenities.solarInverter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('solarInverter', e.target.checked)}
              />
              <Label htmlFor="solarInverter" className="text-sm text-blue-600">Solar Inverter</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="swimmingPool"
                checked={formData.amenities.swimmingPool}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('swimmingPool', e.target.checked)}
              />
              <Label htmlFor="swimmingPool" className="text-sm">Swimming pool</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="washer"
                checked={formData.amenities.washer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('washer', e.target.checked)}
              />
              <Label htmlFor="washer" className="text-sm">Washer</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="kitchenCupboard"
                checked={formData.amenities.kitchenCupboard}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmenityChange('kitchenCupboard', e.target.checked)}
              />
              <Label htmlFor="kitchenCupboard" className="text-sm">Kitchen Cupboard</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="houseDescription">Short Description of the house</Label>
          <Textarea
            id="houseDescription"
            placeholder="Nunc nulla tincidunt quis tincidunt tellus, tellus. Iaculis eu, convallis porttitor accumsan. Risus arcu, volutpat amet sit morbi. Integer orci, ut faucibus eros, dignissim neque, consectetur. Sit elit purus vivamus dapibus. Aliquam morbi viverra nisl, nunc, nunc bibendum metus, platea."
            value={formData.houseDescription}
            onChange={(e: { target: { value: string; }; }) => handleChange('houseDescription', e.target.value)}
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomInfoStep;