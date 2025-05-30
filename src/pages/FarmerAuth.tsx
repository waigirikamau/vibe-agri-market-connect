
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sprout, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FarmerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Demo credentials that match the main Auth page
  const demoEmail = "farmer@demo.com";
  const demoPassword = "SecureFarmer2024!";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Demo login validation
      if (email === demoEmail && password === demoPassword) {
        toast.success("Welcome to Shamba Connect Portal!", {
          duration: 2000,
        });
        setTimeout(() => {
          navigate("/farmer-dashboard");
        }, 1500);
      } else {
        toast.error("Login Failed - Demo credentials: Email: farmer@demo.com, Password: SecureFarmer2024!", {
          duration: 4000,
        });
      }
    } else {
      // Signup validation
      if (password !== confirmPassword) {
        toast.error("Passwords do not match", {
          duration: 3000,
        });
        return;
      }
      
      toast.success("Account Created! Please complete your profile setup", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/farmer-profile");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sprout className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? "Farmer Login" : "Create Farmer Account"}
            </CardTitle>
            <CardDescription>
              {isLogin ? "Welcome back to Shamba Connect" : "Join thousands of farmers on Shamba Connect"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@demo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="SecureFarmer2024!"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-green-600 p-1"
                >
                  {isLogin ? "Sign up" : "Login"}
                </Button>
              </p>
            </div>

            {isLogin && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Email: farmer@demo.com<br />
                  Password: SecureFarmer2024!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerAuth;
