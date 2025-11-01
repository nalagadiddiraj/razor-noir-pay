import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for side projects and testing",
    features: [
      "Up to $10K in transactions",
      "All payment methods",
      "Basic analytics",
      "Email support",
      "Standard security"
    ]
  },
  {
    name: "Growth",
    price: "99",
    description: "For growing businesses and startups",
    features: [
      "Unlimited transactions",
      "All payment methods",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Fraud prevention",
      "Multi-currency support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "Advanced security",
      "Volume discounts",
      "White-label options"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Just straightforward pricing that scales with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`glass-card relative ${
                plan.popular ? 'border-primary shadow-glow scale-105' : ''
              } hover:shadow-elegant transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="p-6 pb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <Button 
                  variant={plan.popular ? "hero" : "glass"}
                  className="w-full mb-6"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
