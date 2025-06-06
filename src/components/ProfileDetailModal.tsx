
import { X, Heart, MessageCircle, Phone, MapPin, Calendar, Users, Home } from 'lucide-react';
import Button from './ui/Button';
import { Dialog, DialogContent } from './ui/Dialog';

interface ProfileDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    id: number;
    title: string;
    location: string;
    match: number;
    image: string;
    liked: boolean;
  };
}

const ProfileDetailModal = ({ isOpen, onClose, profile }: ProfileDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-0 border-0">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-50">
            <img 
              src={profile.image} 
              alt={profile.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <Heart className={`w-4 h-4 ${profile.liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
            <div className="absolute bottom-4 left-4 bg-white rounded px-3 py-1 shadow-md">
              <span className="text-sm font-medium text-gray-700">{profile.match}% Match</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.title}</h2>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{profile.location}</span>
            </div>

            {/* Profile Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-600">Age</span>
                </div>
                <span className="text-sm font-medium">24 years old</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-600">Looking for</span>
                </div>
                <span className="text-sm font-medium">1 roommate</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Home className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-600">Budget</span>
                </div>
                <span className="text-sm font-medium">30,000 Birr/month</span>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm a friendly and responsible person looking for a compatible roommate. 
                I value cleanliness, respect for personal space, and good communication. 
                I enjoy reading, cooking, and watching movies in my free time.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDetailModal;