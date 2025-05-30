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
    { name: "Vegetables", crops: ["Tomatoes", "Onions", "Cabbages", "Kale", "Spinach", "Carrots", "Cucumber", "Bell Peppers", "Broccoli", "Cauliflower", "Lettuce"] },
    { name: "Fruits", crops: ["Bananas", "Mangoes", "Avocados", "Oranges", "Apples", "Pineapples", "Watermelons", "Passion Fruits", "Pawpaw", "Grapes"] },
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
          phone: "+254711234567",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
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
          phone: "+254722345678",
          image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Potatoes",
      category: "Root Tubers",
      farmers: [
        {
          id: 3,
          name: "Kelvin Kamau",
          county: "Kiambu",
          location: "Limuru",
          quantity: "500 kg",
          pricePerKg: 45,
          status: "ready",
          verified: true,
          rating: 4.8,
          phone: "+254711234567",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop"
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
          phone: "+254733456789",
          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Tomatoes",
      category: "Vegetables",
      farmers: [
        {
          id: 5,
          name: "Peter Kamau",
          county: "Meru",
          location: "Maua",
          quantity: "300 kg",
          pricePerKg: 65,
          status: "ready",
          verified: true,
          rating: 4.5,
          phone: "+254744567890",
          image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop"
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
          phone: "+254755678901",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Peas",
      category: "Legumes",
      farmers: [
        {
          id: 13,
          name: "Kelvin Kamau",
          county: "Kericho",
          location: "Londiani",
          quantity: "150 kg",
          pricePerKg: 100,
          status: "ready",
          verified: true,
          rating: 4.8,
          phone: "+254711234567",
          image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&h=300&fit=crop"
        },
        {
          id: 14,
          name: "Michael Kiprop",
          county: "Kericho",
          location: "Londiani",
          quantity: "120 kg",
          pricePerKg: 95,
          status: "harvesting",
          verified: true,
          rating: 4.7,
          phone: "+254766789012",
          image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&h=300&fit=crop"
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
          phone: "+254777890123",
          image: "https://images.unsplash.com/photo-1594282486438-dcabc4d366b1?w=400&h=300&fit=crop"
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
          phone: "+254788901234",
          image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop"
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
          phone: "+254799012345",
          image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop"
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
          phone: "+254700123456",
          image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Mangoes",
      category: "Fruits",
      farmers: [
        {
          id: 11,
          name: "John Mwangi",
          county: "Machakos",
          location: "Wamunyu",
          quantity: "300 kg",
          pricePerKg: 120,
          status: "ready",
          verified: true,
          rating: 4.7,
          phone: "+254711234567",
          image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Cucumber",
      category: "Vegetables",
      farmers: [
        {
          id: 12,
          name: "Faith Wanjiku",
          county: "Nyeri",
          location: "Karatina",
          quantity: "200 kg",
          pricePerKg: 40,
          status: "ready",
          verified: true,
          rating: 4.5,
          phone: "+254722345678",
          image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Green Grams",
      category: "Legumes",
      farmers: [
        {
          id: 15,
          name: "Catherine Adhiambo",
          county: "Homa Bay",
          location: "Ndhiwa",
          quantity: "100 kg",
          pricePerKg: 140,
          status: "ready",
          verified: true,
          rating: 4.6,
          phone: "+254733456789",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Pineapples",
      category: "Fruits",
      farmers: [
        {
          id: 16,
          name: "Robert Kibet",
          county: "Bomet",
          location: "Sotik",
          quantity: "50 pieces",
          pricePerKg: 200,
          status: "ready",
          verified: true,
          rating: 4.9,
          phone: "+254744567890",
          image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Watermelons",
      category: "Fruits",
      farmers: [
        {
          id: 17,
          name: "Lucy Wambui",
          county: "Makueni",
          location: "Wote",
          quantity: "20 pieces",
          pricePerKg: 25,
          status: "ready",
          verified: true,
          rating: 4.4,
          phone: "+254755678901",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      crop: "Sweet Potatoes",
      category: "Root Tubers",
      farmers: [
        {
          id: 18,
          name: "Joseph Onyango",
          county: "Siaya",
          location: "Bondo",
          quantity: "400 kg",
          pricePerKg: 35,
          status: "ready",
          verified: true,
          rating: 4.5,
          phone: "+254766789012",
          image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop"
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
            
            <div className="flex gap-2">
              <Button onClick={() => navigate("/buyer-auth")} className="bg-blue-600 hover:bg-blue-700">
                Login to Bid
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Browse All Crops by Category
            </CardTitle>
            <CardDescription>
              Explore crops organized by categories with farmer listings. Demo Login: farmer@agrimarket.demo / SecureFarmer2024! (Farmer) | buyer@agrimarket.demo / SecureBuyer2024! (Buyer)
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
