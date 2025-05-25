
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
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
