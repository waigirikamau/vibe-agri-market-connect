
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageCircle, TrendingUp, Bell, User, LogOut, ShoppingCart, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ChatSystem from "@/components/ChatSystem";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const navigate = useNavigate();

  const buyerData = {
    businessName: "Fresh Foods Ltd",
    contactPerson: "Jane Smith",
    county: "Nairobi",
    location: "Industrial Area",
    phone: "0722123456",
    businessType: "Wholesaler",
    verified: false
  };

  const activeBids = [
    {
      id: 1,
      farmer: "John Doe",
      crop: "Potatoes",
      quantity: "500 kg",
      bidAmount: 45,
      status: "pending",
      location: "Kiambu",
      timeLeft: "2 days"
    },
    {
      id: 2,
      farmer: "Mary Wanjiku", 
      crop: "Maize",
      quantity: "1 ton",
      bidAmount: 35,
      status: "accepted",
      location: "Nakuru",
      timeLeft: "completed"
    }
  ];

  const notifications = [
    { id: 1, message: "Your bid for potatoes was accepted!", time: "1 hour ago", type: "bid" },
    { id: 2, message: "New maize listings in Nakuru", time: "3 hours ago", type: "alert" },
    { id: 3, message: "Price drop alert: Tomatoes -15% in Nairobi", time: "1 day ago", type: "price" }
  ];

  const recentOrders = [
    {
      id: 1,
      farmer: "Peter Kamau",
      crop: "Tomatoes",
      quantity: "200 kg",
      totalAmount: 13000,
      status: "delivered",
      date: "2024-01-15"
    },
    {
      id: 2,
      farmer: "Sarah Mwangi",
      crop: "Cabbages", 
      quantity: "100 kg",
      totalAmount: 4500,
      status: "in_transit",
      date: "2024-01-18"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">{buyerData.businessName}</h2>
                <p className="text-sm text-gray-500">{buyerData.county}, {buyerData.location}</p>
              </div>
            </div>
            {!buyerData.verified && (
              <Badge variant="outline" className="text-orange-600 border-orange-600">Pending Verification</Badge>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="browse">Browse Crops</TabsTrigger>
            <TabsTrigger value="bids">My Bids</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Browse Fresh Produce
                </CardTitle>
                <CardDescription>
                  Discover quality crops from verified farmers across Kenya
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={() => navigate("/buyer-browse")}
                    className="bg-blue-600 hover:bg-blue-700 h-16"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Browse All Crops
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/crop-repository")}
                    className="h-16"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Crop Repository
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bids">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  My Active Bids
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeBids.map(bid => (
                    <div key={bid.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{bid.crop} - {bid.quantity}</h4>
                          <p className="text-sm text-gray-600">Farmer: {bid.farmer} ({bid.location})</p>
                        </div>
                        <Badge className={
                          bid.status === "accepted" ? "bg-green-100 text-green-800" :
                          bid.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                          "bg-gray-100 text-gray-800"
                        }>
                          {bid.status}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600">
                          KSH {bid.bidAmount}/kg
                        </span>
                        <span className="text-sm text-gray-500">
                          {bid.status === "pending" ? `${bid.timeLeft} left` : bid.timeLeft}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat
                        </Button>
                        {bid.status === "pending" && (
                          <Button size="sm" variant="outline">
                            Modify Bid
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{order.crop} - {order.quantity}</h4>
                          <p className="text-sm text-gray-600">Farmer: {order.farmer}</p>
                          <p className="text-sm text-gray-500">Date: {order.date}</p>
                        </div>
                        <Badge className={
                          order.status === "delivered" ? "bg-green-100 text-green-800" :
                          order.status === "in_transit" ? "bg-blue-100 text-blue-800" :
                          "bg-yellow-100 text-yellow-800"
                        }>
                          {order.status.replace("_", " ")}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                          KSH {order.totalAmount.toLocaleString()}
                        </span>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <ChatSystem userType="buyer" />
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
                        notification.type === 'bid' ? 'bg-green-100' :
                        notification.type === 'alert' ? 'bg-blue-100' : 'bg-yellow-100'
                      }`}>
                        {notification.type === 'bid' ? <TrendingUp className="h-4 w-4 text-green-600" /> :
                         notification.type === 'alert' ? <Bell className="h-4 w-4 text-blue-600" /> :
                         <TrendingUp className="h-4 w-4 text-yellow-600" />}
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

export default BuyerDashboard;
