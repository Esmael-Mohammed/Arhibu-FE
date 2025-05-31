
const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-8 h-8 text-orange-400">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-32 w-6 h-6 text-orange-400">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 w-4 h-4 text-orange-400">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About Us
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Arhibu is a place that connects prospective roommates. It means you get to find the roommate for you & you could be in terms of budget, lifestyle, character, even same hometown or school so workplace it goes on and on.
            </p>
          </div>

          {/* Right Content - Logo */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Large Arhibu Logo */}
              <div className="text-center">
                <div className="text-8xl font-bold text-white opacity-20 mb-4">
                  Arhibu
                </div>
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-blue-600">
                    <path fill="currentColor" d="M50 10L20 85h60L50 10z M50 25L65 75H35L50 25z"/>
                    <circle cx="50" cy="40" r="8" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;