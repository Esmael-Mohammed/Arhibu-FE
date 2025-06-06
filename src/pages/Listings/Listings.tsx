import { useState } from 'react';
import { Heart, MessageCircle, Phone } from 'lucide-react';
import ProfileDetailModal from '@/components/ProfileDetailModal';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select'; // Your custom Select

const Listings = () => {
  const [filters, setFilters] = useState({
    location: '',
    gender: '',
    budget: '',
  });

  type Listing = {
    id: number;
    title: string;
    location: string;
    match: number;
    image: string;
    liked: boolean;
  };

  const [selectedProfile, setSelectedProfile] = useState<Listing | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [listings, setListings] = useState<Listing[]>([
    {
      id: 1,
      title: 'Rebecca Oyelami',
      location: 'Bole',
      match: 80,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      liked: false,
    },
    {
      id: 2,
      title: 'Tom Johnson',
      location: 'Saris',
      match: 75,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      liked: false,
    },
    {
      id: 3,
      title: 'Jane Doe',
      location: 'Megenaga',
      match: 90,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      liked: true,
    },
    {
      id: 4,
      title: 'Ali Musa',
      location: 'Kolfe',
      match: 85,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      liked: false,
    },
  ]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const toggleLike = (id: number) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, liked: !listing.liked } : listing
      )
    );
  };

  const handleCardClick = (listing: Listing) => {
    setSelectedProfile(listing);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const filteredListings = listings.filter((listing) => {
    const locationMatch = filters.location ? listing.location === filters.location : true;
    const genderMatch = true; // Placeholder: add gender logic if needed
    const budgetMatch = true; // Placeholder: add budget logic if needed
    return locationMatch && genderMatch && budgetMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-blue-600">Arhibu</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="/listings" className="text-blue-600 font-medium">Feed</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Find Room</a>
            </nav>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Select
                value={filters.location}
                onValueChange={(value) => handleFilterChange('location', value)}
                placeholder="Location"
                className="w-32"
              >
                <option value="bole">Bole</option>
                <option value="saris">Saris</option>
                <option value="kolfie">Kolfe Keranio</option>
              </Select>

              <Select
                value={filters.gender}
                onValueChange={(value) => handleFilterChange('gender', value)}
                placeholder="Gender"
                className="w-32"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>

              <Select
                value={filters.budget}
                onValueChange={(value) => handleFilterChange('budget', value)}
                placeholder="Budget"
                className="w-32"
              >
                <option value="0-5000">0 - 5k Birr</option>
                <option value="5000-10000">5k - 10k Birr</option>
                <option value="10000-15000">10k - 15k Birr</option>
              </Select>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Find Roommate
            </Button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCardClick(listing)}
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(listing.id);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    className={`w-4 h-4 ${listing.liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                  />
                </button>
                <div className="absolute bottom-3 left-3 bg-white rounded px-2 py-1 shadow-md">
                  <span className="text-sm font-medium text-gray-700">{listing.match}%</span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{listing.title}</h3>
                <p className="text-sm text-gray-600 mb-4 capitalize">{listing.location}</p>

                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-xs font-medium">{listing.match}%</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="ghost" className="text-blue-600 underline">
            Load More Matches
          </Button>
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <ProfileDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          profile={selectedProfile}
        />
      )}
    </div>
  );
};

export default Listings;
