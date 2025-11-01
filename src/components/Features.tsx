import { CreditCard, Zap, Shield, Globe, Code, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept all major payment methods with a single integration. Cards, wallets, and bank transfers."
  },
  {
    icon: Zap,
    title: "Instant Settlements",
    description: "Get your money faster with our instant settlement options. No more waiting days for your funds."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "PCI DSS Level 1 certified. Your transactions are protected with enterprise-grade encryption."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accept payments from customers worldwide. Support for 135+ currencies and local payment methods."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Clean APIs, comprehensive docs, and SDKs in every major language. Build in minutes, not weeks."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Real-time insights into your revenue, customer behavior, and payment performance."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">grow revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete payment infrastructure designed for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card hover:bg-card/80 transition-all duration-300 hover:shadow-elegant group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
