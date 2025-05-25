
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from "lucide-react";

const DataProtection = () => {
  const [protectionLevel] = useState("High");

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All user data is encrypted using AES-256 encryption standards",
      status: "Active",
      color: "text-green-600"
    },
    {
      icon: UserCheck,
      title: "Two-Factor Authentication",
      description: "OTP verification for all account access and transactions",
      status: "Active", 
      color: "text-green-600"
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description: "Data stored in compliance with Kenya Data Protection Act 2019",
      status: "Active",
      color: "text-green-600"
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Users control what information is visible to others",
      status: "Active",
      color: "text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Fraud Detection",
      description: "AI-powered system to detect and prevent fraudulent activities",
      status: "Active",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Regular Security Audits",
      description: "Monthly security assessments and vulnerability testing",
      status: "Scheduled",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Data Protection & Security
          </CardTitle>
          <CardDescription>
            Your data security is our top priority. Current protection level: 
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
              {protectionLevel}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <IconComponent className={`h-6 w-6 ${feature.color} mt-1`} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    <Badge 
                      variant="outline" 
                      className={`mt-2 text-xs ${
                        feature.status === 'Active' ? 'border-green-500 text-green-700' :
                        feature.status === 'Scheduled' ? 'border-blue-500 text-blue-700' :
                        'border-orange-500 text-orange-700'
                      }`}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Compliance</CardTitle>
          <CardDescription>
            Shamba Connect complies with local and international data protection standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Kenya Data Protection Act 2019</span>
              <Badge className="bg-green-100 text-green-800">Compliant</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">GDPR Standards</span>
              <Badge className="bg-green-100 text-green-800">Compliant</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">ISO 27001 Security</span>
              <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataProtection;
