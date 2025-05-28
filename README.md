
# Shamba Connect - Agricultural Marketplace Platform

## 🌾 About Shamba Connect

Shamba Connect is Kenya's premier agricultural marketplace platform that bridges the gap between farmers and buyers. Our mission is to create a transparent, efficient, and fair trading environment that benefits both farmers and buyers through direct connections and secure transactions.

**Live Demo**: https://preview--vibe-agri-market-connect.lovable.app/

## ✨ Key Features

### For Farmers
- **Crop Listing Management**: Easy-to-use interface for listing crops with photos, descriptions, and pricing
- **Real-time Market Insights**: Access to current market prices and demand trends
- **Direct Buyer Communication**: Chat system for direct negotiation with buyers
- **Secure Payment Processing**: M-Pesa integration for safe and instant payments
- **Profile & Verification**: Build trust through verified farmer profiles

### For Buyers
- **Crop Repository**: Browse and search through available crops from verified farmers
- **Advanced Filtering**: Filter by crop type, location, price range, and quality ratings
- **Bidding System**: Place competitive bids on desired produce
- **Quality Assurance**: Access to farmer ratings and crop quality information
- **Secure Transactions**: Protected payment system with buyer guarantees

### Payment Integration
- **M-Pesa Integration**: Seamless mobile money transactions
- **Secure Processing**: End-to-end encrypted payment handling
- **Transaction History**: Complete record of all transactions
- **Buyer Protection**: Dispute resolution and refund mechanisms

## 🚀 Demo Access

Experience Shamba Connect with our demo accounts - no setup required!

### Farmer Demo Account
- **Email**: `farmer@demo.com`
- **Password**: `SecureFarmer2024!`
- **Features**: Add crops, manage listings, view buyer inquiries

### Buyer Demo Account
- **Email**: `buyer@demo.com`
- **Password**: `SecureBuyer2024!`
- **Features**: Browse crops, place bids, contact farmers

### Quick Access
- Click **"Join as Farmer"** on the homepage and use farmer demo credentials
- Click **"Browse as Buyer"** on the homepage and use buyer demo credentials
- Hover over buttons to see demo credentials tooltip

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (Authentication, Database, Edge Functions)
- **Payment**: M-Pesa API integration
- **State Management**: Tanstack React Query
- **Routing**: React Router DOM

## 📱 Platform Features

### User Authentication
- Role-based access (Farmer/Buyer/Admin)
- Secure email/password authentication
- Phone number verification
- Profile management with verification status

### Crop Management
- Comprehensive crop categories (vegetables, fruits, grains, legumes, herbs)
- Image upload and management
- Pricing and quantity management
- Harvest date tracking
- Quality ratings and reviews

### Communication System
- Real-time chat between farmers and buyers
- Inquiry management
- Notification system
- Transaction communication

### Analytics & Insights
- Market price trends
- Demand forecasting
- Sales analytics for farmers
- Purchase history for buyers

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── AuthProvider.tsx # Authentication context
│   └── MpesaPayment.tsx # Payment component
├── pages/               # Application pages
│   ├── Index.tsx        # Landing page
│   ├── Auth.tsx         # Authentication page
│   ├── FarmerDashboard.tsx
│   ├── BuyerDashboard.tsx
│   └── CropRepository.tsx
├── integrations/        # External service integrations
│   └── supabase/        # Supabase configuration
└── hooks/               # Custom React hooks
```

## 🔧 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shamba-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - The project uses Supabase for backend services
   - Supabase configuration is already set up in `src/integrations/supabase/client.ts`
   - For M-Pesa integration, additional API keys may be required

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open http://localhost:5173 in your browser
   - Use the demo credentials provided above

## 🌐 Deployment

### Using Lovable Platform
1. Visit the [Lovable Project](https://lovable.dev/projects/80f009c3-17f4-49b4-98d6-1b2c3648e9a0)
2. Click on Share → Publish
3. Your app will be automatically deployed

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure proper environment variables are configured

## 📊 Database Schema

The application uses Supabase with the following main tables:
- `profiles` - User profile information
- `crops` - Crop listings and details
- `bids` - Buyer bids on crops
- `transactions` - Payment and order tracking
- `login_logs` - Authentication audit trail

## 🔐 Security Features

- Row Level Security (RLS) policies on all tables
- JWT-based authentication
- Secure payment processing
- Data encryption in transit and at rest
- User verification system

## 📱 Mobile Compatibility

The platform is fully responsive and optimized for mobile devices:
- Touch-friendly interface
- Mobile-optimized forms with proper input types
- Responsive design for all screen sizes
- Mobile-specific authentication improvements

## 🚧 Roadmap

### Phase 1 (Current)
- ✅ Basic marketplace functionality
- ✅ User authentication and profiles
- ✅ Crop listing and browsing
- ✅ M-Pesa payment integration
- ✅ Mobile optimization

### Phase 2 (Upcoming)
- 📱 Native mobile app development
- 🚚 Logistics and delivery integration
- 📈 Advanced analytics dashboard
- 🌍 Multi-language support

### Phase 3 (Future)
- 🤖 AI-powered crop recommendations
- 📊 Blockchain-based supply chain tracking
- 🌾 Integration with agricultural sensors
- 🏦 Credit and financing options

## 🤝 Contributing

We welcome contributions to Shamba Connect! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper testing
4. Submit a pull request with detailed description

## 📞 Support

For support and inquiries:
- **Email**: support@shambaconnect.co.ke
- **Phone**: +254 700 123 456
- **Office**: Nairobi, Kenya
- **Hours**: Monday - Friday: 8AM - 6PM, Saturday: 9AM - 4PM

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

**Shamba Connect** - Empowering farmers, connecting markets. 🌾

