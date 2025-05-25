
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MpesaPaymentProps {
  amount: number;
  description: string;
  onSuccess?: () => void;
}

const MpesaPayment = ({ amount, description, onSuccess }: MpesaPaymentProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePayment = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate M-Pesa payment process
    setTimeout(() => {
      toast({
        title: "Payment Initiated",
        description: `M-Pesa prompt sent to ${phoneNumber}. Please check your phone and enter your PIN.`,
      });
      
      // Simulate successful payment after another delay
      setTimeout(() => {
        setIsProcessing(false);
        setIsOpen(false);
        toast({
          title: "Payment Successful!",
          description: "Your payment has been processed successfully.",
        });
        if (onSuccess) onSuccess();
      }, 3000);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <CreditCard className="mr-2 h-4 w-4" />
          Pay with M-Pesa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-600" />
            M-Pesa Payment
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Details</CardTitle>
            <CardDescription>
              Amount: KSH {amount.toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="phone">M-Pesa Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0712345678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isProcessing}
              />
            </div>
            
            <Button 
              onClick={handlePayment} 
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isProcessing ? "Processing..." : `Pay KSH ${amount.toLocaleString()}`}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              You will receive an M-Pesa prompt on your phone. Enter your PIN to complete the payment.
            </p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default MpesaPayment;
