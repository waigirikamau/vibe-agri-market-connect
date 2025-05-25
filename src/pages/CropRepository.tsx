
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft, MapPin, Calendar, TrendingUp, Phone, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CropRepository = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCounty, setSelectedCounty] = useState("all");
  const navigate = useNavigate();

  const cropCategories = [
    { name: "All Categories", crops: [] },
    { name: "Cereals", crops: ["Maize", "Wheat", "Rice", "Barley", "Sorghum", "Millet"] },
    { name: "Legumes", crops: ["Beans", "Peas", "Lentils", "Chickpeas", "Cowpeas", "Green Grams"] },
    { name: "Vegetables", crops: ["Tomatoes", "Onions", "Cabbages", "Kale", "Spinach", "Carrots", "Cucumber", "Bell Peppers", "Broccoli"] },
    { name: "Fruits", crops: ["Bananas", "Mangoes", "Avocados", "Oranges", "Apples", "Pineapples", "Watermelons", "Passion Fruits"] },
    { name: "Root Tubers", crops: ["Potatoes", "Sweet Potatoes", "Cassava", "Yams", "Arrow Roots"] },
    { name: "Cash Crops", crops: ["Coffee", "Tea", "Cotton", "Pyrethrum", "Tobacco", "Sugarcane"] }
  ];

  const counties = [
    "All Counties", "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", 
    "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", 
    "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", 
    "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", 
    "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", 
    "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  // Comprehensive sample data for crops with farmers
  const cropsWithFarmers = [
    {
      crop: "Maize",
      category: "Cereals",
      farmers: [
        {
          id: 1,
          name: "Kelvin Kamau",
          county: "Nakuru",
          location: "Njoro",
          quantity: "2 tons",
          pricePerKg: 35,
          status: "ready",
          verified: true,
          rating: 4.9,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300"
        },
        {
          id: 2,
          name: "Grace Wanjiru",
          county: "Trans Nzoia", 
          location: "Kitale",
          quantity: "1.5 tons",
          pricePerKg: 38,
          status: "harvesting",
          verified: true,
          rating: 4.7,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300"
        }
      ]
    },
    {
      crop: "Potatoes",
      category: "Root Tubers",
      farmers: [
        {
          id: 3,
          name: "Samuel Kiprotich",
          county: "Nyandarua",
          location: "Ol Kalou",
          quantity: "500 kg",
          pricePerKg: 45,
          status: "ready",
          verified: true,
          rating: 4.8,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300"
        },
        {
          id: 4,
          name: "Mary Nyambura",
          county: "Kiambu",
          location: "Limuru",
          quantity: "800 kg",
          pricePerKg: 42,
          status: "ready",
          verified: false,
          rating: 4.6,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300"
        }
      ]
    },
    {
      crop: "Tomatoes",
      category: "Vegetables",
      farmers: [
        {
          id: 5,
          name: "Peter Mwangi",
          county: "Meru",
          location: "Maua",
          quantity: "300 kg",
          pricePerKg: 65,
          status: "ready",
          verified: true,
          rating: 4.5,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1546470427-e5e6c0e8fb30?w=300"
        }
      ]
    },
    {
      crop: "Beans",
      category: "Legumes",
      farmers: [
        {
          id: 6,
          name: "Jane Muthoni",
          county: "Embu",
          location: "Runyenjes",
          quantity: "200 kg",
          pricePerKg: 120,
          status: "ready",
          verified: true,
          rating: 4.8,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1432839737174-5b43eeba3195?w=300"
        }
      ]
    },
    {
      crop: "Cabbage",
      category: "Vegetables", 
      farmers: [
        {
          id: 7,
          name: "David Ochieng",
          county: "Kisii",
          location: "Keroka",
          quantity: "400 kg",
          pricePerKg: 30,
          status: "ready",
          verified: true,
          rating: 4.7,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1594282486438-dcabc4d366b1?w=300"
        }
      ]
    },
    {
      crop: "Bananas",
      category: "Fruits",
      farmers: [
        {
          id: 8,
          name: "Rose Akinyi",
          county: "Kisumu",
          location: "Maseno",
          quantity: "150 bunches",
          pricePerKg: 80,
          status: "ready",
          verified: true,
          rating: 4.9,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300"
        }
      ]
    },
    {
      crop: "Avocados",
      category: "Fruits",
      farmers: [
        {
          id: 9,
          name: "Francis Mutua",
          county: "Murang'a",
          location: "Kandara",
          quantity: "250 kg",
          pricePerKg: 150,
          status: "ready",
          verified: true,
          rating: 4.6,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300"
        }
      ]
    },
    {
      crop: "Carrots",
      category: "Vegetables",
      farmers: [
        {
          id: 10,
          name: "Agnes Wafula",
          county: "Bungoma",
          location: "Webuye",
          quantity: "180 kg",
          pricePerKg: 55,
          status: "harvesting",
          verified: true,
          rating: 4.4,
          phone: "0711122233",
          image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=300"
        }
      ]
    }
  ];

  const filteredCrops = cropsWithFarmers.filter(cropData => {
    const matchesSearch = cropData.crop.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || cropData.category === selectedCategory;
    const matchesCounty = selectedCounty === "all" || 
      cropData.farmers.some(farmer => farmer.county === selectedCounty);
    
    return matchesSearch && matchesCategory && matchesCounty;
  });

  const handleContact = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const handleRate = () => {
    alert("Rating functionality - redirecting to rating system!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <h1 className="text-2xl font-bold text-gray-800">Crop Repository</h1>
            
            <Button onClick={() => navigate("/buyer-auth")} className="bg-blue-600 hover:bg-blue-700">
              Login to Bid
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Browse All Crops by Category
            </CardTitle>
            <CardDescription>
              Explore crops organized by categories with farmer listings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search crops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {cropCategories.map(category => (
                    <SelectItem key={category.name} value={category.name === "All Categories" ? "all" : category.name}>
                      {category.name}
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

        {/* Crop Categories with Farmers */}
        <div className="space-y-8">
          {filteredCrops.map(cropData => (
            <Card key={cropData.crop}>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">{cropData.crop}</CardTitle>
                <CardDescription>
                  Category: {cropData.category} • {cropData.farmers.length} farmer(s) available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cropData.farmers.map(farmer => (
                    <Card key={farmer.id} className="border-l-4 border-l-green-500">
                      <CardHeader className="pb-3">
                        <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-3">
                          <img 
                            src={farmer.image} 
                            alt={cropData.crop}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{farmer.name}</h4>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {farmer.county}, {farmer.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {farmer.verified && (
                              <Badge variant="secondary" className="text-xs">Verified</Badge>
                            )}
                            <span className="text-sm text-yellow-600">★ {farmer.rating}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold text-green-600">
                              KSH {farmer.pricePerKg}/kg
                            </span>
                            <p className="text-sm text-gray-500">Qty: {farmer.quantity}</p>
                          </div>
                          <Badge className={farmer.status === "ready" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {farmer.status === "ready" ? "Ready" : "Harvesting"}
                          </Badge>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => navigate("/buyer-auth")}
                          >
                            <TrendingUp className="h-4 w-4 mr-1" />
                            Bid
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleContact(farmer.phone)}
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={handleRate}
                          >
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCrops.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 mb-4">No crops found matching your criteria</p>
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

export default CropRepository;
