
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, ShoppingCart, Users, TrendingUp, Mail, Info, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">Shamba Connect</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200')"
        }}
      >
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to 
              <span className="text-green-400"> Shamba Connect</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Real-time price alerts, direct buyer connections, and AI-powered selling recommendations. 
              Get the best prices for your crops with Shamba Connect.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => navigate('/farmer-auth')}
              >
                <Sprout className="mr-2 h-5 w-5" />
                Login as Farmer
              </Button>
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => navigate('/buyer-browse')}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse as Buyer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Shamba Connect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Real-Time Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get instant notifications about market prices via SMS, USSD, or app notifications. 
                  Never miss the best selling opportunities.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Direct Buyer Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect directly with buyers, negotiate prices, and secure better deals. 
                  Build lasting business relationships.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get recommendations on the best time to sell, weather-based advice, 
                  and market trend predictions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              About Shamba Connect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  Our Mission
                </h4>
                <p className="text-gray-600 mb-6">
                  Shamba Connect was founded to bridge the gap between farmers and buyers across Kenya. 
                  We believe that technology can empower farmers to get fair prices for their produce 
                  while ensuring buyers have access to fresh, quality crops directly from the source.
                </p>
                <p className="text-gray-600">
                  Our platform leverages modern technology to provide real-time market information, 
                  secure payment systems, and efficient logistics coordination to make agricultural 
                  trade more transparent and profitable for everyone involved.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Our Impact
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li>• Connected over 10,000 farmers across Kenya</li>
                  <li>• Facilitated KSH 50M+ in agricultural trade</li>
                  <li>• Increased farmer income by 25% on average</li>
                  <li>• Reduced post-harvest losses through better market access</li>
                  <li>• Created transparent pricing mechanisms</li>
                  <li>• Supported food security through efficient distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold mb-2">10,000+</h4>
              <p>Registered Farmers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">500+</h4>
              <p>Active Buyers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">KSH 50M+</h4>
              <p>Total Trade Value</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">25%</h4>
              <p>Average Price Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <CardTitle>Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Customer Service</p>
                  <p className="font-semibold">+254 700 123 456</p>
                  <p className="text-gray-600 mb-2 mt-4">Technical Support</p>
                  <p className="font-semibold">+254 700 123 457</p>
                  <p className="text-sm text-gray-500 mt-2">Mon - Fri: 8AM - 6PM</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">General Inquiries</p>
                  <p className="font-semibold">info@shambaconnect.co.ke</p>
                  <p className="text-gray-600 mb-2 mt-4">Support</p>
                  <p className="font-semibold">support@shambaconnect.co.ke</p>
                  <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Head Office</p>
                  <p className="font-semibold">Shamba Connect Ltd</p>
                  <p className="text-gray-600">Westlands, Nairobi</p>
                  <p className="text-gray-600">P.O. Box 12345-00100</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout className="h-6 w-6" />
            <span className="text-xl font-bold">Shamba Connect</span>
          </div>
          <p className="text-gray-400">
            Empowering farmers with technology for better market access
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
