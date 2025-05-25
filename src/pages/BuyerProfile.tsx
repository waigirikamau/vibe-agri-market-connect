
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, MapPin, Phone, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const BuyerProfile = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    businessType: "",
    county: "",
    location: "",
    description: "",
    preferredCrops: [] as string[],
    businessLicense: "",
    paymentMethods: [] as string[]
  });

  const navigate = useNavigate();

  const counties = [
    "Nairobi", "Kiambu", "Nakuru", "Meru", "Kakamega", "Machakos", "Nyeri", 
    "Murang'a", "Kirinyaga", "Embu", "Tharaka Nithi", "Isiolo", "Mombasa"
  ];

  const businessTypes = [
    "Retailer", "Wholesaler", "Restaurant", "Hotel", "School", "Hospital", 
    "Exporter", "Processor", "Market Vendor", "Supermarket"
  ];

  const cropCategories = [
    "Cereals", "Legumes", "Vegetables", "Fruits", "Root Tubers", "Cash Crops"
  ];

  const paymentMethods = ["M-Pesa", "Airtel Money", "Bank Transfer", "Cash"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.businessName || !formData.contactPerson || !formData.phone || !formData.county) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Profile Created!",
      description: "Welcome to AgriConnect. You can now browse and bid on crops.",
    });
    
    navigate("/buyer-dashboard");
  };

  const toggleArrayItem = (array: string[], item: string, setter: (value: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-12 w-12 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Complete Your Buyer Profile</CardTitle>
            <CardDescription>
              Help farmers understand your business and build trust
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Business Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                      placeholder="Primary contact person"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="0722123456"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="business@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="county">County *</Label>
                    <Select value={formData.county} onValueChange={(value) => setFormData(prev => ({ ...prev, county: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select county" />
                      </SelectTrigger>
                      <SelectContent>
                        {counties.map(county => (
                          <SelectItem key={county} value={county}>{county}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Specific Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="Town/Area"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Crop Preferences</h3>
                
                <div>
                  <Label>Preferred Crop Categories</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {cropCategories.map(crop => (
                      <Badge
                        key={crop}
                        variant={formData.preferredCrops.includes(crop) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleArrayItem(formData.preferredCrops, crop, (value) => setFormData(prev => ({ ...prev, preferredCrops: value })))}
                      >
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Payment Methods</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {paymentMethods.map(method => (
                      <Badge
                        key={method}
                        variant={formData.paymentMethods.includes(method) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleArrayItem(formData.paymentMethods, method, (value) => setFormData(prev => ({ ...prev, paymentMethods: value })))}
                      >
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Tell farmers about your business and requirements"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="businessLicense">Business License Number</Label>
                  <Input
                    id="businessLicense"
                    value={formData.businessLicense}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessLicense: e.target.value }))}
                    placeholder="Optional - helps build trust"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Complete Profile & Start Buying
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerProfile;
