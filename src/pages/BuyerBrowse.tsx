
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, ArrowLeft, MessageCircle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BuyerBrowse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const navigate = useNavigate();

  const cropCategories = [
    "All Categories", "Cereals", "Legumes", "Vegetables", "Fruits", "Root Tubers", "Cash Crops"
  ];

  const counties = [
    "All Counties", "Nairobi", "Kiambu", "Nakuru", "Meru", "Kakamega", "Machakos", "Nyeri"
  ];

  const listings = [
    {
      id: 1,
      farmer: {
        name: "John Doe",
        county: "Kiambu",
        location: "Kiambu Town",
        verified: true,
        rating: 4.8
      },
      crop: "Potatoes",
      category: "Root Tubers",
      quantity: "500 kg",
      pricePerKg: 45,
      status: "ready",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
      description: "Fresh Irish potatoes, Grade A quality",
      bids: 3,
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      farmer: {
        name: "Mary Wanjiku",
        county: "Nakuru",
        location: "Njoro",
        verified: true,
        rating: 4.9
      },
      crop: "Maize",
      category: "Cereals",
      quantity: "2 tons",
      pricePerKg: 35,
      status: "harvesting",
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400",
      description: "High-quality yellow maize, perfect for animal feed",
      bids: 5,
      lastUpdated: "4 hours ago"
    },
    {
      id: 3,
      farmer: {
        name: "Peter Kamau",
        county: "Meru",
        location: "Maua",
        verified: false,
        rating: 4.5
      },
      crop: "Tomatoes",
      category: "Vegetables",
      quantity: "300 kg",
      pricePerKg: 65,
      status: "ready",
      image: "https://images.unsplash.com/photo-1546470427-e5e6c0e8fb30?w=400",
      description: "Fresh tomatoes, harvested this morning",
      bids: 1,
      lastUpdated: "1 hour ago"
    }
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.farmer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    const matchesCounty = selectedCounty === "all" || listing.farmer.county === selectedCounty;
    
    return matchesSearch && matchesCategory && matchesCounty;
  });

  const handlePlaceBid = (listingId: number) => {
    // Redirect to login if not authenticated
    navigate("/buyer-auth");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => navigate("/buyer-auth")}>
                Login as Buyer
              </Button>
              <Button onClick={() => navigate("/crop-repository")} className="bg-green-600 hover:bg-green-700">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Full Repository
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Browse Fresh Produce
            </CardTitle>
            <CardDescription>
              Find the best crops from verified farmers across Kenya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                placeholder="Search crops or farmers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:col-span-2"
              />
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {cropCategories.map(category => (
                    <SelectItem key={category} value={category === "All Categories" ? "all" : category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                <SelectTrigger>
                  <SelectValue placeholder="County" />
                </SelectTrigger>
                <SelectContent>
                  {counties.map(county => (
                    <SelectItem key={county} value={county === "All Counties" ? "all" : county}>
                      {county}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            {filteredListings.length} listings found
          </h3>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map(listing => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={listing.image} 
                    alt={listing.crop}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{listing.crop}</CardTitle>
                    <CardDescription>{listing.description}</CardDescription>
                  </div>
                  <Badge className={listing.status === "ready" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                    {listing.status === "ready" ? "Ready" : "Harvesting"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Farmer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{listing.farmer.name}</p>
                    <p className="text-sm text-gray-500">{listing.farmer.county}, {listing.farmer.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {listing.farmer.verified && (
                      <Badge variant="secondary" className="text-xs">Verified</Badge>
                    )}
                    <span className="text-sm text-yellow-600">★ {listing.farmer.rating}</span>
                  </div>
                </div>

                {/* Price and Quantity */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      KSH {listing.pricePerKg}/kg
                    </span>
                    <p className="text-sm text-gray-500">Quantity: {listing.quantity}</p>
                  </div>
                  {listing.bids > 0 && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {listing.bids} bids
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handlePlaceBid(listing.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Place Bid
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Updated {listing.lastUpdated}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 mb-4">No listings found matching your criteria</p>
              <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("all"); setSelectedCounty("all");}}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BuyerBrowse;
