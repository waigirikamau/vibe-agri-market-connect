
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import FarmerAuth from "./pages/FarmerAuth";
import FarmerProfile from "./pages/FarmerProfile";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerBrowse from "./pages/BuyerBrowse";
import BuyerAuth from "./pages/BuyerAuth";
import BuyerProfile from "./pages/BuyerProfile";
import BuyerDashboard from "./pages/BuyerDashboard";
import AddCrop from "./pages/AddCrop";
import CropRepository from "./pages/CropRepository";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/farmer-auth" element={<FarmerAuth />} />
            <Route path="/farmer-profile" element={<FarmerProfile />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
            <Route path="/add-crop" element={<AddCrop />} />
            <Route path="/buyer-browse" element={<BuyerBrowse />} />
            <Route path="/buyer-auth" element={<BuyerAuth />} />
            <Route path="/buyer-profile" element={<BuyerProfile />} />
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="/crop-repository" element={<CropRepository />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
