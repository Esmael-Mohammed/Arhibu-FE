import { Shield,Clock, MapPin } from 'lucide-react';
const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Use Arhibu ?
          </h2>
        </div>

        {/* You Find the Extras too Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">2.</span> You Find the Extras too
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Verified Perfect Match</h4>
              <p className="text-gray-600 leading-relaxed">
                Arhibu is a place that connects prospective roommates. It means you get to find the roommate for you & you could be in
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Utmost Security & Privacy</h4>
              <p className="text-gray-600 leading-relaxed">
                Arhibu is a place that connects prospective roommates. It means you get to find the roommate for you & you could be in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row Features */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">1.</span> Save Time, Energy & Money
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Arhibu is a place that connects prospective roommates. It means you get to find
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">3.</span> Have Real Connections
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Arhibu is a place that connects prospective roommates. It means you get to find
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;