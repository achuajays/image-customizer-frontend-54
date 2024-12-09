import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 2000 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 3000 },
  { name: "May", value: 2500 },
  { name: "Jun", value: 4000 },
];

const StatsCard = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm float-animation">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Net Revenue</h3>
          <span className="text-green-500">+32.8%</span>
        </div>
        
        <div className="text-3xl font-bold">$39,274.29</div>
        
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;