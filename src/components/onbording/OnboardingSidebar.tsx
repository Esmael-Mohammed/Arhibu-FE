import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OnboardingSidebarProps {
  currentStep: number;
}
const OnboardingSidebar = ({ currentStep }: OnboardingSidebarProps) => {
  const stepTitles = [
    "Personal Information",
    "Neighborhood", 
    "Lifestyle Information",
    "Upload Profile Image",
    "Room Information"
  ];

  return (
    <div className="w-80 bg-white shadow-sm p-8">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-12">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Link to="/">
            <Home className="w-5 h-5 text-white" />
          </Link>
        </div>
        <span className="text-xl font-bold text-gray-900">Arhibu</span>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {step}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${
                step <= currentStep ? 'text-blue-600' : 'text-gray-600'
              }`}>
                Step {step}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {stepTitles[step - 1]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingSidebar;