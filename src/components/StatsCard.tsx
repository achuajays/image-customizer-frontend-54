import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-transparent backdrop-blur-sm border-none">
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
            alt="Scenic nature view" 
            className="w-full h-64 object-cover rounded-lg float-animation"
          />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;