
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sprout, Camera, CheckCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const FarmerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    county: "",
    location: "",
    acres: "",
    phone: "0712345678", // Pre-filled from login
  });
  
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  
  const navigate = useNavigate();

  const cropTypes = [
    "Maize", "Beans", "Potatoes", "Tomatoes", "Onions", "Carrots", "Cabbage", 
    "Kales", "Spinach", "Bananas", "Avocados", "Mangoes", "Coffee", "Tea", 
    "Rice", "Wheat", "Sweet Potatoes", "Cassava"
  ];

  const counties = [
    "Nairobi", "Mombasa", "Kiambu", "Nakuru", "Uasin Gishu", "Meru", "Kakamega", 
    "Machakos", "Kisumu", "Nyeri", "Laikipia", "Trans Nzoia", "Kitale"
  ];

  const handleCropToggle = (crop: string) => {
    setSelectedCrops(prev => 
      prev.includes(crop) 
        ? prev.filter(c => c !== crop)
        : [...prev, crop]
    );
  };

  const handleVerifyPhone = () => {
    setShowOtpModal(true);
    toast({
      title: "OTP Sent!",
      description: "Please check your SMS for the verification code",
    });
  };

  const handleOtpVerification = () => {
    if (otp === "123456") { // Demo OTP
      setIsVerified(true);
      setShowOtpModal(false);
      toast({
        title: "Phone Verified!",
        description: "Your phone number has been successfully verified",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Demo OTP is 123456",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      toast({
        title: "Phone Verification Required",
        description: "Please verify your phone number before continuing",
        variant: "destructive",
      });
      return;
    }

    if (selectedCrops.length === 0) {
      toast({
        title: "Select Crops",
        description: "Please select at least one crop type",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Profile Created!",
      description: "Welcome to AgriConnect farmer dashboard",
    });
    navigate("/farmer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sprout className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Tell us about your farm to connect with the right buyers
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="acres">Farm Size (Acres)</Label>
                  <Input
                    id="acres"
                    type="number"
                    placeholder="5"
                    value={formData.acres}
                    onChange={(e) => setFormData({...formData, acres: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="county">County</Label>
                  <Select onValueChange={(value) => setFormData({...formData, county: value})}>
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
                  <Label htmlFor="location">Sub-location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Kiambu Town"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Phone Verification */}
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled
                  />
                  <Button
                    type="button"
                    variant={isVerified ? "default" : "outline"}
                    onClick={handleVerifyPhone}
                    disabled={isVerified}
                    className="flex items-center gap-2"
                  >
                    {isVerified ? <CheckCircle className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                    {isVerified ? "Verified" : "Verify"}
                  </Button>
                </div>
              </div>

              {/* Crop Selection */}
              <div>
                <Label>Crops You Grow</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {cropTypes.map(crop => (
                    <div key={crop} className="flex items-center space-x-2">
                      <Checkbox
                        id={crop}
                        checked={selectedCrops.includes(crop)}
                        onCheckedChange={() => handleCropToggle(crop)}
                      />
                      <Label htmlFor={crop} className="text-sm">{crop}</Label>
                    </div>
                  ))}
                </div>
                
                {selectedCrops.length > 0 && (
                  <div className="mt-3">
                    <Label className="text-sm text-gray-600">Selected Crops:</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedCrops.map(crop => (
                        <Badge key={crop} variant="secondary">{crop}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!isVerified}
              >
                Complete Profile
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Verify Phone Number</CardTitle>
                <CardDescription>
                  Enter the 6-digit code sent to {formData.phone}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleOtpVerification} className="flex-1">
                      Verify
                    </Button>
                    <Button variant="outline" onClick={() => setShowOtpModal(false)}>
                      Cancel
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Demo OTP: 123456
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerProfile;
