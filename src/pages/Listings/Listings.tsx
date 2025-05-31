import { useState } from 'react';
import { MapPin, Bed, Bath, Wifi, Car, PawPrint, Badge } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';

const Listings = () => {
  const [filters, setFilters] = useState<{
    location: string;
    priceRange: string;
    amenities: string[];
  }>({
    location: '',
    priceRange: '',
    amenities: [],
  });
  const [listings] = useState([
    {
      id: 1,
      title: 'Cozy Apartment in Downtown',
      location: '123 Main St, Anytown',
      price: 1200,
      bedrooms: 2,
      bathrooms: 1,
      amenities: ['wifi', 'pet-friendly'],
      image: 'https://via.placeholder.com/350x200',
    },
    {
      id: 2,
      title: 'Spacious House with Yard',
      location: '456 Elm St, Anytown',
      price: 2500,
      bedrooms: 4,
      bathrooms: 2,
      amenities: ['wifi', 'car parking', 'utensils'],
      image: 'https://via.placeholder.com/350x200',
    },
    {
      id: 3,
      title: 'Modern Studio near University',
      location: '789 Oak St, Anytown',
      price: 900,
      bedrooms: 1,
      bathrooms: 1,
      amenities: ['wifi'],
      image: 'https://via.placeholder.com/350x200',
    },
  ]);

  const handleFilterChange = (e: any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAmenityChange = (amenity: string) => {
    if (filters.amenities.includes(amenity)) {
      setFilters({
        ...filters,
        amenities: filters.amenities.filter((a) => a !== amenity),
      });
    } else {
      setFilters({ ...filters, amenities: [...filters.amenities, amenity] });
    }
  };

  const filteredListings = listings.filter((listing) => {
    if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      if (listing.price < minPrice || listing.price > maxPrice) {
        return false;
      }
    }
    if (filters.amenities.length > 0 && !filters.amenities.every((amenity: string) => listing.amenities.includes(amenity))) {
      return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>

      {/* Filters */}
      <div className="mb-4 flex gap-4">
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <Select onValueChange={(value) => handleFilterChange({ target: { name: 'priceRange', value } })}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000">$0 - $1000</SelectItem>
            <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
            <SelectItem value="2000-3000">$2000 - $3000</SelectItem>
            <SelectItem value="3000-5000">$3000 - $5000</SelectItem>
          </SelectContent>
        </Select>

        <div>
          <Button variant="outline" onClick={() => handleAmenityChange('wifi')}>
            <Wifi className="mr-2 h-4 w-4" /> Wifi
            {filters.amenities.includes('wifi') && <Badge className="ml-2">✓</Badge>}
          </Button>
          <Button variant="outline" onClick={() => handleAmenityChange('car parking')}>
            <Car className="mr-2 h-4 w-4" /> Parking
            {filters.amenities.includes('car parking') && <Badge className="ml-2">✓</Badge>}
          </Button>
          <Button variant="outline" onClick={() => handleAmenityChange('pet-friendly')}>
            <PawPrint className="mr-2 h-4 w-4" /> Pets
            {filters.amenities.includes('pet-friendly') && <Badge className="ml-2">✓</Badge>}
          </Button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <Card key={listing.id}>
            <CardHeader>
              <CardTitle>{listing.title}</CardTitle>
              <CardDescription>
                <MapPin className="mr-2 inline-block h-4 w-4" />
                {listing.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src={listing.image} alt={listing.title} className="mb-4 rounded" />
              <div className="flex items-center mb-2">
                <Bed className="mr-2 h-4 w-4" />
                {listing.bedrooms} Bedrooms
              </div>
              <div className="flex items-center mb-2">
                <Bath className="mr-2 h-4 w-4" />
                {listing.bathrooms} Bathrooms
              </div>
              <div className="flex items-center mb-2">
                Price: ${listing.price}
              </div>
              <div>
                {listing.amenities.map((amenity, index) => (
                  <Badge key={index} className="mr-1">{amenity}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listings;