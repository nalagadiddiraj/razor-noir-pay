import { Card, CardContent } from "@/components/ui/card";
import { Lock, FileCheck, Eye, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "PCI DSS Level 1",
    description: "The highest level of payment security certification"
  },
  {
    icon: FileCheck,
    title: "SOC 2 Compliant",
    description: "Independently audited security controls"
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Round-the-clock security monitoring and alerts"
  },
  {
    icon: Server,
    title: "99.99% Uptime",
    description: "Enterprise-grade infrastructure reliability"
  }
];

const Security = () => {
  return (
    <section id="security" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Security you can <span className="gradient-text">trust</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Your data and your customers' data are protected with enterprise-grade security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="glass-card hover:bg-card/80 transition-all duration-300 text-center"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
