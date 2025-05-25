
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload, ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const AddCrop = () => {
  const [formData, setFormData] = useState({
    crop: "",
    quantity: "",
    unit: "kg",
    pricePerUnit: "",
    status: "ready",
    daysToHarvest: "",
    description: "",
    images: [] as string[]
  });

  const navigate = useNavigate();

  const cropTypes = [
    "Maize", "Beans", "Potatoes", "Tomatoes", "Onions", "Carrots", "Cabbage", 
    "Kales", "Spinach", "Bananas", "Avocados", "Mangoes", "Coffee", "Tea", 
    "Rice", "Wheat", "Sweet Potatoes", "Cassava"
  ];

  const handleImageUpload = () => {
    // Demo image upload - in real app would handle file upload
    const demoImages = [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300"
    ];
    
    setFormData({
      ...formData,
      images: [...formData.images, demoImages[Math.floor(Math.random() * demoImages.length)]]
    });
    
    toast({
      title: "Image Added!",
      description: "Demo image has been added to your listing",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.images.length === 0) {
      toast({
        title: "Add Images",
        description: "Please add at least one image of your crop",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Crop Listed Successfully!",
      description: "Your crop is now available for buyers to see and bid on",
    });
    navigate("/farmer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/farmer-dashboard")}
          className="mb-4 text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-6 w-6 text-green-600" />
              List New Crop
            </CardTitle>
            <CardDescription>
              Add your crop details to connect with potential buyers
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Crop Type and Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="crop">Crop Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, crop: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map(crop => (
                        <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={(value) => setFormData({...formData, status: value})} defaultValue="ready">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ready">Ready for Market</SelectItem>
                      <SelectItem value="harvesting">Harvesting Soon</SelectItem>
                      <SelectItem value="growing">Still Growing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quantity and Price */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="500"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="unit">Unit</Label>
                  <Select onValueChange={(value) => setFormData({...formData, unit: value})} defaultValue="kg">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="tons">Tons</SelectItem>
                      <SelectItem value="bags">Bags</SelectItem>
                      <SelectItem value="pieces">Pieces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="price">Price per {formData.unit}</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="45"
                    value={formData.pricePerUnit}
                    onChange={(e) => setFormData({...formData, pricePerUnit: e.target.value})}
                    required
                  />
                </div>
              </div>

              {/* Days to Harvest (if not ready) */}
              {formData.status !== "ready" && (
                <div>
                  <Label htmlFor="daysToHarvest">Days to Harvest</Label>
                  <Input
                    id="daysToHarvest"
                    type="number"
                    placeholder="7"
                    value={formData.daysToHarvest}
                    onChange={(e) => setFormData({...formData, daysToHarvest: e.target.value})}
                    required
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your crop quality, growing conditions, etc."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                />
              </div>

              {/* Image Upload */}
              <div>
                <Label>Crop Images</Label>
                <div className="mt-2 space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <Button type="button" onClick={handleImageUpload} variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Photos (Demo)
                      </Button>
                      <p className="text-sm text-gray-500">
                        Add high-quality photos of your crop
                      </p>
                    </div>
                  </div>
                  
                  {/* Display uploaded images */}
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={image} 
                            alt={`Crop ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 h-6 w-6 p-0"
                            onClick={() => setFormData({
                              ...formData,
                              images: formData.images.filter((_, i) => i !== index)
                            })}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!formData.crop || !formData.quantity || !formData.pricePerUnit}
              >
                List Crop for Sale
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCrop;
