import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Net Revenue</h3>
          <span className="text-green-500">+32.8%</span>
        </div>
        
        <div className="text-3xl font-bold">$39,274.29</div>
        
        {/* Bouncing Ball Animation */}
        <div className="h-[200px] w-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-bounce shadow-lg" />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;