import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  buttonText, 
  isActive = false 
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isActive?: boolean;
}) => (
  <div className={`rounded-lg p-8 ${isActive ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-lg`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      {isActive && (
        <span className="px-3 py-1 text-xs font-semibold text-black bg-white rounded-full">
          Active
        </span>
      )}
    </div>
    <div className="mb-4">
      <span className="text-4xl font-bold text-white">{price}</span>
      {price !== "Free" && <span className="text-white/80 ml-2">/ month</span>}
    </div>
    <p className="text-white/80 mb-6">{description}</p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-white">
          <Check className="h-5 w-5 mr-2 text-green-400" />
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full bg-white text-black hover:bg-gray-100">
      {buttonText}
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen hero-gradient">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-white/80">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingTier
              name="FREE"
              price="Free"
              description="Perfect for getting started"
              features={[
                "Chat and generate projects",
                "Unlimited public projects",
                "Attach and prompt with images",
                "Sync with GitHub",
                "One click deploy"
              ]}
              buttonText="Get Started"
              isActive={true}
            />
            
            <PricingTier
              name="STARTER"
              price="$20"
              description="Perfect for hobby and occasional use"
              features={[
                "Everything in Free, plus:",
                "Go beyond daily limits",
                "Unlimited private projects",
                "Remove Lovable badge",
                "Priority support"
              ]}
              buttonText="Upgrade to Starter"
            />
            
            <PricingTier
              name="LAUNCH"
              price="$50"
              description="For individuals working on small projects"
              features={[
                "Everything in Starter, plus:",
                "2.5x monthly limits",
                "Advanced analytics",
                "Custom branding",
                "API access"
              ]}
              buttonText="Upgrade to Launch"
            />
            
            <PricingTier
              name="SCALE"
              price="$100"
              description="For individuals working on larger projects"
              features={[
                "Everything in Launch, plus:",
                "5x monthly limits",
                "Early access features",
                "VIP support",
                "Custom integrations"
              ]}
              buttonText="Upgrade to Scale"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;