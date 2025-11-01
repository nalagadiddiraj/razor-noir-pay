import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-payment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Digital payment visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 glass-card rounded-full text-sm text-muted-foreground mb-4">
            🚀 Modern Payment Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Accept Payments
            <br />
            <span className="gradient-text">Built for Developers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The complete payment solution for your business. Accept payments, manage subscriptions, 
            and scale your revenue with our powerful API.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Start Integration
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div>Uptime SLA</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">135+</div>
              <div>Currencies</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">2M+</div>
              <div>Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
