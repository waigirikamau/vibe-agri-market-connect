
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MessageCircle, TrendingUp } from "lucide-react";

interface FarmerData {
  name: string;
  county: string;
  location: string;
  acres: string;
  phone: string;
  crops: string[];
  verified: boolean;
}

interface CropListingProps {
  farmerData: FarmerData;
}

const CropListing = ({ farmerData }: CropListingProps) => {
  const [listings] = useState([
    {
      id: 1,
      crop: "Potatoes",
      quantity: "500 kg",
      pricePerKg: 45,
      status: "ready",
      daysToHarvest: 0,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
      bids: [
        { buyerName: "Fresh Market Ltd", amount: 50, timestamp: "2 hours ago" },
        { buyerName: "Green Grocers", amount: 48, timestamp: "4 hours ago" }
      ],
      messages: 3
    },
    {
      id: 2,
      crop: "Maize",
      quantity: "2 tons",
      pricePerKg: 35,
      status: "harvesting",
      daysToHarvest: 3,
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300",
      bids: [],
      messages: 1
    },
    {
      id: 3,
      crop: "Beans",
      quantity: "300 kg",
      pricePerKg: 80,
      status: "growing",
      daysToHarvest: 45,
      image: "https://images.unsplash.com/photo-1583114329515-3e7a4de76cc3?w=300",
      bids: [],
      messages: 0
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-green-100 text-green-800";
      case "harvesting": return "bg-yellow-100 text-yellow-800";
      case "growing": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string, days: number) => {
    switch (status) {
      case "ready": return "Ready for Market";
      case "harvesting": return `Harvesting in ${days} days`;
      case "growing": return `${days} days to harvest`;
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">My Crop Listings</h3>
        <Badge variant="outline" className="text-sm">
          {listings.length} Active Listings
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map(listing => (
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
                <CardTitle className="text-lg">{listing.crop}</CardTitle>
                <Badge className={getStatusColor(listing.status)}>
                  {getStatusText(listing.status, listing.daysToHarvest)}
                </Badge>
              </div>
              <CardDescription>
                Quantity: {listing.quantity}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  KSH {listing.pricePerKg}/kg
                </span>
                {listing.bids.length > 0 && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {listing.bids.length} bids
                  </Badge>
                )}
              </div>

              {listing.bids.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Recent Bids:</p>
                  {listing.bids.slice(0, 2).map((bid, index) => (
                    <div key={index} className="flex justify-between text-sm bg-gray-50 p-2 rounded">
                      <span>{bid.buyerName}</span>
                      <span className="font-medium text-green-600">KSH {bid.amount}/kg</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                {listing.messages > 0 && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    {listing.messages}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {listings.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-gray-500 mb-4">No crops listed yet</p>
            <Button className="bg-green-600 hover:bg-green-700">
              List Your First Crop
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CropListing;
