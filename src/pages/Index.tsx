
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Users, TrendingUp, Shield, ArrowRight, Phone, Mail, MapPin, Clock, Award, Handshake, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
         }}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Shamba Connect</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setShowAbout(true)}
                className="text-gray-600 hover:text-green-600"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowContact(true)}
                className="text-gray-600 hover:text-green-600"
              >
                Contact
              </Button>
              <Button
                onClick={() => navigate("/auth")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting Farmers to Markets
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Shamba Connect bridges the gap between farmers and buyers, creating a transparent, 
            efficient marketplace for fresh produce across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 relative group"
            >
              Join as Farmer
              <ArrowRight className="ml-2 h-5 w-5" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Demo: farmer@demo.com / SecureFarmer2024!
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-3 relative group"
            >
              Browse as Buyer
              <ArrowRight className="ml-2 h-5 w-5" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Demo: buyer@demo.com / SecureBuyer2024!
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Shamba Connect?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Direct Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect farmers directly with buyers, eliminating middlemen and ensuring fair prices for everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time pricing, demand forecasting, and market trends to help farmers make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>M-Pesa Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure M-Pesa payment integration with buyer protection for safe and instant transactions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Verified farmers, quality checks, and transparent ratings ensure you get the best produce.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Dialog */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-green-600" />
              About Shamba Connect
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Shamba Connect is Kenya's premier agricultural marketplace platform that revolutionizes how farmers and buyers interact. Our mission is to create a transparent, efficient, and fair trading environment that benefits both farmers and buyers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Our Vision
                </h4>
                <p className="text-sm text-gray-600">
                  To empower farmers with technology and market access while providing buyers with fresh, quality produce directly from the source.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-blue-600" />
                  Our Mission
                </h4>
                <p className="text-sm text-gray-600">
                  Building sustainable agricultural supply chains that reduce post-harvest losses and increase farmer incomes.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Key Features:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Direct farmer-to-buyer connections</li>
                <li>• Real-time crop listings and bidding</li>
                <li>• Secure M-Pesa payment integration</li>
                <li>• Quality assurance and verification</li>
                <li>• Market price transparency</li>
                <li>• Mobile-friendly platform</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-blue-600" />
              Contact Us
            </DialogTitle>
            <DialogDescription>
              Get in touch with the Shamba Connect team
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-sm text-gray-600">+254 700 123 456</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-gray-600">support@shambaconnect.co.ke</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium">Office Location</p>
                <p className="text-sm text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-sm text-gray-600">Monday - Friday: 8AM - 6PM</p>
                <p className="text-sm text-gray-600">Saturday: 9AM - 4PM</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout className="h-6 w-6 text-green-400" />
            <span className="text-lg font-bold">Shamba Connect</span>
          </div>
          <p className="text-gray-400">
            © 2024 Shamba Connect. Empowering farmers, connecting markets.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
