
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Sprout, ShoppingCart, ArrowLeft, Shield, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "farmer",
    otp: ""
  });

  const { signUp, signIn, resetPassword, verifyOTP } = useAuth();
  const navigate = useNavigate();

  // Updated demo credentials
  const demoCredentials = {
    farmer: { email: "farmer@demo.com", password: "SecureFarmer2024!" },
    buyer: { email: "buyer@demo.com", password: "SecureBuyer2024!" }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return false;
    }

    if (!isLogin) {
      if (!formData.phone || !formData.firstName || !formData.lastName) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords do not match",
          variant: "destructive",
        });
        return false;
      }

      if (formData.password.length < 6) {
        toast({
          title: "Weak Password",
          description: "Password must be at least 6 characters long",
          variant: "destructive",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isLogin) {
        // Check for demo credentials first
        const isDemoFarmer = formData.email === demoCredentials.farmer.email && formData.password === demoCredentials.farmer.password;
        const isDemoBuyer = formData.email === demoCredentials.buyer.email && formData.password === demoCredentials.buyer.password;
        
        if (isDemoFarmer || isDemoBuyer) {
          // Handle demo login
          toast({
            title: "Welcome to Shamba Connect Portal!",
            description: "Demo login successful",
            duration: 2000,
          });
          
          setTimeout(() => {
            if (isDemoFarmer) {
              navigate('/farmer-dashboard');
            } else {
              navigate('/buyer-dashboard');
            }
          }, 1500);
        } else {
          // Try real Supabase authentication
          const { data, error } = await signIn(formData.email, formData.password);
          
          if (error) {
            toast({
              title: "Login Failed",
              description: "Please use demo credentials or create a new account",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Welcome to Shamba Connect Portal!",
              description: "Login successful",
              duration: 2000,
            });
            
            setTimeout(() => {
              const userRole = data?.user?.user_metadata?.role || 'farmer';
              navigate(userRole === 'farmer' ? '/farmer-dashboard' : '/buyer-dashboard');
            }, 1500);
          }
        }
      } else {
        // For demo purposes, allow any signup
        toast({
          title: "Account Created Successfully!",
          description: "You can now login with your credentials",
          duration: 2000,
        });
        
        // Switch to login mode and pre-fill the email
        setIsLogin(true);
        setTimeout(() => {
          toast({
            title: "Ready to Login",
            description: "Please login with your new credentials",
          });
        }, 2000);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await resetPassword(formData.email);
    
    if (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Reset Email Sent",
        description: "Check your email for password reset instructions",
      });
      setShowForgotPassword(false);
    }
    setLoading(false);
  };

  const handleOTPVerification = async () => {
    if (formData.otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await verifyOTP(formData.email, formData.otp, 'email_verification');
    
    if (error) {
      toast({
        title: "Verification Failed",
        description: "Invalid or expired OTP",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Email Verified!",
        description: "Your account has been verified successfully",
      });
      
      setTimeout(() => {
        navigate(formData.role === 'farmer' ? '/farmer-profile' : '/buyer-profile');
      }, 1500);
    }
    setLoading(false);
  };

  if (showOTP) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Verify Your Email</CardTitle>
            <CardDescription>
              Enter the 6-digit OTP sent to {formData.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={formData.otp}
                onChange={(value) => handleInputChange('otp', value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button 
              onClick={handleOTPVerification} 
              disabled={loading || formData.otp.length !== 6}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {loading ? "Verifying..." : "Verify Email"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowOTP(false)}
              className="w-full"
            >
              Back to Registration
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>
              Enter your email address to receive password reset instructions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                {loading ? "Sending..." : "Send Reset Email"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
                className="w-full"
              >
                Back to Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              {isLogin ? (
                <Sprout className="h-12 w-12 text-green-600" />
              ) : (
                <ShoppingCart className="h-12 w-12 text-blue-600" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? "Welcome Back" : "Join Shamba Connect"}
            </CardTitle>
            <CardDescription>
              {isLogin ? "Login to your account" : "Create your account"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs value={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" onClick={() => setIsLogin(true)}>
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setIsLogin(false)}>
                  Sign Up
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="farmer@demo.com or buyer@demo.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="SecureFarmer2024! or SecureBuyer2024!"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  
                  <Button type="submit" disabled={loading} className="w-full bg-green-600 hover:bg-green-700">
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setShowForgotPassword(true)}
                    className="w-full text-blue-600"
                  >
                    Forgot Password?
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 text-center">
                    <strong>Demo Credentials:</strong><br />
                    <strong>Farmer:</strong> farmer@demo.com / SecureFarmer2024!<br />
                    <strong>Buyer:</strong> buyer@demo.com / SecureBuyer2024!
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="signupEmail">Email Address</Label>
                    <Input
                      id="signupEmail"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signupPhone">Phone Number</Label>
                    <Input
                      id="signupPhone"
                      type="tel"
                      placeholder="0712345678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role">Account Type</Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmer">Farmer</SelectItem>
                        <SelectItem value="buyer">Buyer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="signupPassword">Password</Label>
                    <Input
                      id="signupPassword"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  
                  <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
                
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-600 text-center">
                    <strong>Demo Mode:</strong> For testing, you can create any account and login immediately after signup.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
