import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <Card className="p-6 bg-transparent backdrop-blur-sm border-none">
      <div className="flex items-center justify-center h-64">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-50" />
          <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-float" />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;