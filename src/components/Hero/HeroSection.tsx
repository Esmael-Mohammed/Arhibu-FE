import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import heroImage from '../../assets/hero.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
             }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Find Your Perfect
            <br />
            Roommate
          </h1>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700">
                  <option>Select Location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2 ">Gender</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700">
                  <option>Select Budget</option>
                  <option>$500-$1000</option>
                  <option>$1000-$1500</option>
                  <option>$1500-$2000</option>
                </select>
              </div>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 h-10"
                onClick={() => navigate('/listings')}
              >
                Find Roommate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;