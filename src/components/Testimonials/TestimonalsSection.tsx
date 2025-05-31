const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=faces',
    position: { top: '20%', left: '15%' }
  },
  {
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    position: { top: '10%', right: '20%' }
  },
  {
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    position: { top: '40%', left: '10%' }
  },
  {
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
    position: { top: '60%', right: '15%' }
  },
  {
    name: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces',
    position: { bottom: '30%', left: '20%' }
  },
  {
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=80&h=80&fit=crop&crop=faces',
    position: { bottom: '10%', right: '25%' }
  },
  {
    name: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=faces',
    position: { bottom: '40%', left: '25%' }
  },
  {
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
    position: { top: '70%', right: '30%' }
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awsome testimonies
          </h2>
          <h3 className="text-2xl text-gray-600">
            from all round
          </h3>
        </div>

        {/* Central Testimonial */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Floating Avatar Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute transform hover:scale-110 transition-transform duration-300"
              style={testimonial.position}
            >
              <div className="relative group cursor-pointer">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-800">{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Central Featured Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md text-center z-10">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=faces"
              alt="Adaobeche Yusile Rebecca"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
            />
            <p className="text-gray-700 mb-4 leading-relaxed">
              "Hibu is a place that connects prospective roommates. It means you get to find the roommate for you & you could be in terms of budget, lifestyle, character, even same hometown..."
            </p>
            <h4 className="font-bold text-gray-900">Adaobeche Yusile Rebecca</h4>
            <p className="text-gray-500 text-sm">Student at Unilag</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;