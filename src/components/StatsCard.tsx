import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-transparent backdrop-blur-sm border-none">
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          {/* First ball - bouncing */}
          <div className="absolute -left-16 animate-bounce">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          </div>
          
          {/* Second ball - spinning */}
          <div className="absolute left-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-spin-slow" />
          </div>
          
          {/* Third ball - floating */}
          <div className="absolute left-32">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 float-animation" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;