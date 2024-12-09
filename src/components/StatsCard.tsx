import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-transparent backdrop-blur-sm border-none">
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          <img 
            src="/lovable-uploads/99634788-e3da-43ac-9d0e-603c2944d408.png" 
            alt="Ethics4Every logo" 
            className="w-full h-64 object-contain rounded-lg float-animation"
          />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;