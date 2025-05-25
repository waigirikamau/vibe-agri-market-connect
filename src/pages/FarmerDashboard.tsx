
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Plus, MessageCircle, TrendingUp, Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CropListing from "@/components/CropListing";
import ChatSystem from "@/components/ChatSystem";

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("listings");
  const navigate = useNavigate();

  const farmerData = {
    name: "Kelvin Kamau",
    county: "Kiambu",
    location: "Kiambu Town",
    acres: "5",
    phone: "0711122233",
    crops: ["Maize", "Beans", "Potatoes", "Tomatoes", "Cabbages", "Carrots", "Onions", "Kale", "Spinach", "Cucumber", "Mangoes", "Avocados", "Bananas", "Peas", "Green Grams", "Pineapples", "Watermelons", "Sweet Potatoes"],
    verified: true
  };

  const notifications = [
    { id: 1, message: "New bid received for your potatoes", time: "2 hours ago", type: "bid" },
    { id: 2, message: "Maize prices increased by 15% in Nairobi", time: "4 hours ago", type: "price" },
    { id: 3, message: "Weather alert: Heavy rain expected next week", time: "1 day ago", type: "weather" }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  // Listen for custom tab switch events
  useEffect(() => {
    const handleTabSwitch = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('switchTab' as any, handleTabSwitch as any);
    return () => window.removeEventListener('switchTab' as any, handleTabSwitch as any);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">{farmerData.name}</h2>
                <p className="text-sm text-gray-500">{farmerData.county}, {farmerData.location}</p>
              </div>
            </div>
            {farmerData.verified && (
              <Badge className="bg-green-100 text-green-800">Verified</Badge>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
              <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-1">3</span>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="add-crop">Add Crop</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="listings">
            <CropListing farmerData={farmerData} />
          </TabsContent>

          <TabsContent value="add-crop">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  List New Crop
                </CardTitle>
                <CardDescription>
                  Add your crops to connect with buyers and get better prices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/add-crop")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Start Listing
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <ChatSystem userType="farmer" />
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map(notification => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'bid' ? 'bg-blue-100' :
                        notification.type === 'price' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {notification.type === 'bid' ? <TrendingUp className="h-4 w-4 text-blue-600" /> :
                         notification.type === 'price' ? <TrendingUp className="h-4 w-4 text-green-600" /> :
                         <Bell className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmerDashboard;
