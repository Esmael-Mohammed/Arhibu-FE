import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/context/AuthContext';
import { Button, Card, CardHeader } from 'react-bootstrap';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/Card';
import { Edit, Heart, Home, MapPin, MessageCircle, Settings } from 'lucide-react';
// If you have a Badge component in your UI library, import it here, e.g.:
// import { Badge } from '@/components/ui/Badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';


const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center py-10">Loading...</p>;

  const savedRooms = [
    {
      id: 1,
      title: 'Modern Studio in Downtown',
      location: 'Bole',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Cozy Room in Capitol Hill',
      location: 'Arabsa',
      price: 950,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300&h=200&fit=crop',
    },
  ];

  const recentMatches = [
    {
      name: 'Abrahm',
      compatibility: 95,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=faces',
      location: 'Mixco',
      budget: '1000 birr',
    },
    {
      name: 'Michael',
      compatibility: 87,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      location: 'University District',
      budget: '800 birr',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.displayName || user?.email || 'User'}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your roommate search</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Profile Views</p>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Saved Rooms</p>
                      <p className="text-2xl font-bold text-gray-900">{savedRooms.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Messages</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
                <CardDescription>Potential roommates based on your preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={match.avatar} alt={match.name} />
                          <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{match.name}</h3>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {match.location} • {match.budget}
                          </p>
                        </div>
                        <Badge className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-semibold">
                          {match.compatibility}% match
                        </Badge>
                        <Button size="sm" variant="outline">
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Matches
                </Button>
              </CardContent>
            </Card>

            {/* Saved Rooms */}
            <Card>
              <CardHeader>
                <CardTitle>Saved Rooms</CardTitle>
                <CardDescription>Rooms you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {savedRooms.map((room) => (
                    <div key={room.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">{room.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {room.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-900">{room.price}Birr/month</span>
                          <Button size="sm" onClick={() => navigate(`/listings/${room.id}`)}>
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/listings')}>
                  Browse More Rooms
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user?.photoURL || ''} />
                    <AvatarFallback>{(user?.displayName || 'User')?.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-gray-900">{user?.displayName || user?.email}</h3>
                  <p className="text-sm text-gray-600">Your profile details</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium">1200 Birr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">Seattle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Move-in:</span>
                    <span className="font-medium">Jan 2024</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => navigate('/profile/edit')}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/listings')}>
                  <Home className="w-4 h-4 mr-2" />
                  Browse Rooms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Room viewing</p>
                      <p className="text-xs text-gray-600">Tomorrow at 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Coffee with Sarah</p>
                      <p className="text-xs text-gray-600">Friday at 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
