import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-transparent backdrop-blur-sm border-none">
      <div className="flex items-center justify-center">
        <img 
          src="/lovable-uploads/d1a88e59-3f38-4575-8f70-88ee11b4bd22.png"
          alt="Edu4Every Logo"
          className="w-32 h-32 animate-spin-slow"
        />
      </div>
    </Card>
  );
};

export default StatsCard;