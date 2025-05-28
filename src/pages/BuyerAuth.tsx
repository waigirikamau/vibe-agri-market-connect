
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BuyerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Demo credentials that match the main Auth page
  const demoEmail = "buyer@demo.com";
  const demoPassword = "SecureBuyer2024!";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Demo login validation
      if (email === demoEmail && password === demoPassword) {
        toast.success("Welcome to Shamba Connect Portal!", {
          duration: 2000,
        });
        setTimeout(() => {
          navigate("/buyer-dashboard");
        }, 1500);
      } else {
        toast.error("Login Failed - Demo credentials: Email: buyer@demo.com, Password: SecureBuyer2024!", {
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
      
      toast.success("Account Created! Please complete your buyer profile", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/buyer-profile");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-12 w-12 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? "Buyer Login" : "Create Buyer Account"}
            </CardTitle>
            <CardDescription>
              {isLogin ? "Access fresh produce from verified farmers" : "Connect with farmers and get the best deals"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="buyer@demo.com"
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
                  placeholder="SecureBuyer2024!"
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
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 p-1"
                >
                  {isLogin ? "Sign up" : "Login"}
                </Button>
              </p>
            </div>

            {isLogin && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Email: buyer@demo.com<br />
                  Password: SecureBuyer2024!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerAuth;
